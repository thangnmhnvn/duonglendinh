const GameApp = {
    // 2. TRẠNG THÁI GAME (STATE)
    state: {
        students: [], // Danh sách hiện tại trên vòng quay
        studentsOriginal: [], // Bản sao gốc để reset
        questions: [], // Danh sách câu hỏi đang chơi
        questionPool: [], // Kho câu hỏi gốc

        // Wheel state
        rotation: 0,
        omega: 0,
        holding: false,
        spinning: false,
        lastTime: 0,
        holdStart: 0,
        releaseStart: 0,
        lastIndexUnderPointer: -1,
        selectedStudentIndex: -1,
        tempCall: true, // Chế độ gọi tên (true = gọi 1 lần rồi xóa)

        // Game state
        currentPlayer: null,
        currentScore: 0,
        totalScoreMap: {}, // Lưu điểm tổng: { "Tên HS": 100 }

        // Quiz state
        currentQIndex: -1,
        scoreRound: 0,
        timer: 0,
        timerId: null,
        answered: false,
        correctCount: 0,
        timePerQuestion: 15,
        totalQuestionsConfig: 3
    },

    // 3. CACHE DOM ELEMENTS
    el: {},
    audio: {},
    ctx: null, // Canvas context
    langTmp: [],

    curLang: "vi",
    getLangText: function (textbase) {
        GameApp.langTmp.push(textbase);

        if(
            typeof window.textTranslate[textbase] !== undefined && window.textTranslate[textbase] &&
            typeof window.textTranslate[textbase][this.curLang] !== undefined && window.textTranslate[textbase][this.curLang]
        ) {
            return window.textTranslate[textbase][this.curLang];
        }
        return textbase;
    },
    initLangEvent: function () {
        const self = this;
        self.initLang();

        $('input[name="language"]').on('change', function () {
            if(self.curLang != $('input[name="language"]:checked').val()) {
                self.curLang = $('input[name="language"]:checked').val();
                self.initLang();
            }
        });
    },
    initLang: function () {
        const self = this;
        if($('[data-text]').length) {
            $('[data-text]').each(function (i) {
                $(this).text(self.getLangText($(this).attr('data-text')));
            });
        }
    },

    // ============================================================
    // KHỞI TẠO (INIT)
    // ============================================================
    init: function() {
        this.config.initialData.questions = this.config.initialData.questions.map(question => {
            const correctAnswerText = question.opts[question.answer];
            const newOpts = question.opts.filter(opt => opt && opt.trim() !== "");
            const newAnswerIndex = newOpts.indexOf(correctAnswerText);
            return {
                ...question,
                opts: newOpts,
                answer: newAnswerIndex
            };
        });
        this.initLangEvent();
        this.cacheDOM();
        this.initAudio();
        this.initData();
        this.bindEvents();
        this.initTuLuanEvent();

        // Khởi chạy vòng lặp vẽ Canvas
        requestAnimationFrame((ts) => this.tick(ts));
    },

    cacheDOM: function() {
        this.el = {
            // Screens
            welcome: $("#welcomeScreen"),
            wheelScreen: $("#man_vongquay"),
            gameScreen: $("#man_trochoi"),

            // Wheel UI
            canvas: $("#wheel"),
            result: $("#result"),
            hint: $("#hint"),
            chargeFill: $("#chargeFill"),
            lopName: $("#lopname"),
            studentList: $("#studentList"),

            // Game UI
            playerName: $("#ten_hocsinh"),
            score: $("#score"),
            timer: $("#timer"),
            question: $("#question"),
            options: $("#options"),
            nextBtn: $("#nextBtn"),
            levelMonkey: $("#levelMonkey"),
            levelLabel: $("#levelLabel"),

            // Config Inputs
            timeConfig: $("#timeConfig"),
            countConfig: $("#countConfig"),
            randomQConfig: $('[name="random_question"]'),
            callModeConfig: $("#che_do_goi_ten")
        };

        // Canvas Context
        this.ctx = this.el.canvas[0].getContext('2d');
    },

    initAudio: function() {
        // Lấy native DOM element [0] để dùng các hàm play/pause của HTML5 Audio
        this.audio = {
            tick: $('#tickSound')[0],
            winVQ: $('#winSoundvq')[0],
            correct: $('#correctSound')[0],
            wrong: $('#wrongSound')[0],
            countdown: $('#countdownSound')[0],
            winGame: $('#winSound')[0]
        };
    },

    // ============================================================
    // XỬ LÝ DỮ LIỆU (DATA HANDLER)
    // ============================================================
    initData: function() {
        const d = this.config.initialData;

        // Thiết lập tên lớp
        this.el.lopName.text(d.tenlop.toUpperCase());

        // Key lưu localStorage
        this.storageKey = this.config.CLASS_KEY_PREFIX + d.tenlop;

        // Load học sinh
        this.state.students = d.students || [];
        this.state.studentsOriginal = [...this.state.students];

        // Load câu hỏi
        this.state.questionPool = d.questions || [];

        // Load điểm cũ từ localStorage (nếu có)
        this.loadStudentsFromStorage();
        this.renderStudentList();
    },

    getStudentsFromStorage: function() {
        let data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    },

    saveStudentsToStorage: function(list) {
        localStorage.setItem(this.storageKey, JSON.stringify(list));
    },

    loadStudentsFromStorage: function() {
        const storedList = this.getStudentsFromStorage();
        // Cập nhật điểm vào map
        storedList.forEach(st => {
            this.state.totalScoreMap[st.name] = st.score;
        });
    },

    addStudentToStorage: function(name) {
        let list = this.getStudentsFromStorage();
        let exist = list.find(s => s.name === name);
        if (!exist) {
            list.push({ name: name, score: 0 });
            this.saveStudentsToStorage(list);
            this.renderStudentList();
        }
    },

    updateScoreStorage: function(name, points) {
        let list = this.getStudentsFromStorage();
        let st = list.find(s => s.name === name);

        // Cập nhật map hiện tại
        this.state.totalScoreMap[name] = (this.state.totalScoreMap[name] || 0) + points;

        if (st) {
            st.score += points;
            this.saveStudentsToStorage(list);
        } else {
            // Nếu chưa có trong storage thì thêm mới
            list.push({ name: name, score: this.state.totalScoreMap[name] });
            this.saveStudentsToStorage(list);
        }
        this.renderStudentList();
    },

    renderStudentList: function() {
        const self = this;
        this.el.studentList.empty();
        const storedList = this.getStudentsFromStorage();

        storedList.forEach(st => {
            $('<li>').text(`${st.name} - ${st.score} ${self.getLangText('⭐')}`).appendTo(this.el.studentList);
        });
    },

    // ============================================================
    // VÒNG QUAY (WHEEL LOGIC)
    // ============================================================
    getArc: function() {
        return (2 * Math.PI) / this.state.students.length;
    },

    drawWheel: function() {
        const { ctx, students, rotation } = this.state;
        const size = this.el.canvas[0].width;
        const R = size / 2;

        this.ctx.clearRect(0, 0, size, size);
        this.ctx.save();
        this.ctx.translate(R, R);
        this.ctx.rotate(this.state.rotation);

        const arc = this.state.tempCall ? this.getArc() : (2 * Math.PI) / this.state.students.length;

        for (let i = 0; i < this.state.students.length; i++) {
            const start = i * arc;
            const end = start + arc;
            const hue = Math.round(i * (360 / this.state.students.length));

            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.arc(0, 0, R - 8, start, end);
            this.ctx.closePath();
            this.ctx.fillStyle = `hsl(${hue} 85% 55%)`;
            this.ctx.fill();

            this.ctx.strokeStyle = 'rgba(255,255,255,.6)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, R - 8, start, end);
            this.ctx.stroke();

            // Text
            this.ctx.save();
            this.ctx.rotate(start + arc / 2);
            this.ctx.fillStyle = '#fff';
            this.ctx.font = 'bold 24px system-ui, Arial';
            this.ctx.textAlign = 'right';
            this.ctx.textBaseline = 'middle';
            this.ctx.shadowColor = 'rgba(0,0,0,.35)';
            this.ctx.shadowBlur = 4;
            this.ctx.fillText(this.state.students[i], R - 26, 0);
            this.ctx.restore();
        }

        // Center Cap
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 38, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#111';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 28, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#fff';
        this.ctx.fill();
        this.ctx.restore();
    },

    tick: function(ts) {
        if (!this.state.lastTime) this.state.lastTime = ts;
        const dt = Math.min(32, ts - this.state.lastTime);
        this.state.lastTime = ts;

        if (this.state.holding) {
            this.state.omega += this.config.ACCEL_PER_MS * dt;
            if (this.state.omega > this.config.MAX_ANGULAR_VEL) this.state.omega = this.config.MAX_ANGULAR_VEL;
        } else if (this.state.spinning) {
            this.state.omega *= this.config.DECAY;

            const elapsed = performance.now() - this.state.releaseStart;
            const minReached = elapsed >= this.config.MIN_SPIN_MS;

            if (minReached && this.state.omega < 0.0022) {
                this.finishSpin();
            }
        }

        if (this.state.omega !== 0) {
            this.state.rotation = (this.state.rotation + this.state.omega) % (2 * Math.PI);
        }

        // Sound Logic
        const currIdx = this.getIndexUnderPointer();
        if (currIdx !== this.state.lastIndexUnderPointer) {
            if (this.state.omega > 0.03) {
                if (this.audio.tick) {
                    this.audio.tick.play().catch(e => {});
                }
            }
            this.state.lastIndexUnderPointer = currIdx;
        }

        this.drawWheel();

        // Update Charge Bar UI
        const pct = Math.min(100, Math.round((this.state.omega / this.config.MAX_ANGULAR_VEL) * 100));
        this.el.chargeFill.css('width', (this.state.holding ? pct : 0) + '%');

        requestAnimationFrame((t) => this.tick(t));
    },

    getIndexUnderPointer: function() {
        const arc = this.getArc();
        const degrees = this.state.rotation * 180 / Math.PI + 90;
        const arcd = arc * 180 / Math.PI;
        let idx = Math.floor((360 - ((degrees % 360) + 360) % 360) / arcd);
        return (idx % this.state.students.length + this.state.students.length) % this.state.students.length;
    },

    finishSpin: function() {
        this.state.omega = 0;
        this.state.spinning = false;

        const idx = this.getIndexUnderPointer();
        const winner = this.state.students[idx];

        this.el.hint.text(GameApp.getLangText('Nhấn & giữ để lấy lực, thả để quay.'));
        this.el.result.text(GameApp.getLangText('🎉 CHÚC MỪNG:') + winner.toUpperCase() + '!');

        this.fadeOutSound(this.audio.tick, 2000);
        this.playSound('winVQ');

        this.state.selectedStudentIndex = idx;
        this.state.currentPlayer = winner;
        this.addStudentToStorage(winner);
    },

    // ============================================================
    // TRÒ CHƠI TRẮC NGHIỆM (QUIZ LOGIC)
    // ============================================================
    prepareQuiz: function() {
        // Cấu hình
        this.state.timePerQuestion = parseInt(this.el.timeConfig.val()) || 15;
        this.state.totalQuestionsConfig = parseInt(this.el.countConfig.val()) || 3;

        // Lấy câu hỏi ngẫu nhiên
        this.state.questions = this.getRandomQuestions(this.state.totalQuestionsConfig);

        if(this.state.questions.length < 1) return false

        // Reset state
        this.state.currentQIndex = -1;
        this.state.scoreRound = 0;
        this.state.correctCount = 0;
        this.el.score.text("0 ");
        this.el.nextBtn.text(GameApp.getLangText("Bắt đầu")).show();

        // Reset UI Components

        return true;
    },

    getRandomQuestions: function(count) {
        // Clone pool
        var self = this;
        if (this.state.questionPool.length < count) {
            // Nếu hết câu hỏi thì reset pool (clone lại từ config gốc)
            if(confirm(GameApp.getLangText('Số câu hỏi còn lại không đủ! Reset Game?'))) {
                self.resetGame();
            } else {
                // this.state.questionPool = JSON.parse(JSON.stringify(this.config.initialData.questions));
            }
            self.el.gameScreen.hide();
            self.el.wheelScreen.show();
            return [];
        }

        let tempPool = [...this.state.questionPool];
        const isRandom = this.el.randomQConfig.is(':checked');

        if (isRandom) this.shuffleArray(tempPool);

        // Lấy n câu
        const selected = tempPool.slice(0, count);

        // Xóa câu đã chọn khỏi pool chính (nếu muốn không lặp lại ngay)
        this.state.questionPool = tempPool.slice(count);

        // Xử lý đảo đáp án
        return selected.map(q => {
            let newQ = { ...q, opts: [...q.opts] };
            const correctText = newQ.opts[newQ.answer];

            if (isRandom) this.shuffleArray(newQ.opts);
            newQ.answer = newQ.opts.indexOf(correctText);
            return newQ;
        });
    },

    nextQuestion: function() {
        this.stopTimer();
        $('#ansContainer').hide();
        $('#showAnsBtn').hide();
        $('#skipQuestionBtn').hide();

        // Bắt đầu game hoặc câu tiếp theo
        if (this.state.currentQIndex === -1) {
            if(this.prepareQuiz()) {
                this.state.currentQIndex = 0;
                this.renderQuestion();
            }
            return;
        }

        this.state.currentQIndex++;

        // Kiểm tra kết thúc
        if (this.state.currentQIndex >= this.state.questions.length) {
            this.endQuiz();
            return;
        }

        this.renderQuestion();
    },

    initTuLuanEvent() {
        const self = this;
        $('#showAnsBtn').on('click', function () {
            self.stopTimer();
            $('#ansContainer').show();
            $('#options').show();
            $(this).hide();
        });
        $('#ansContainer button').on('click', function () {
            self.selectAnswerTuLuan($(this).attr('data-correct'));
            $('#ansContainer button').prop('disabled', true);
        });
    },

    selectAnswerTuLuan: function(correct) {
        if (this.state.answered) return;
        this.state.answered = true;
        this.stopTimer();

        const buttons = this.el.options.find('button');
        buttons.prop('disabled', true);


        if (correct == "true") {
            this.state.scoreRound += 1;
            this.state.correctCount++;
            this.el.score.text(this.state.scoreRound + " ");
            this.playSound('correct');

            if (this.state.scoreRound === this.state.questions.length * 1) {
                this.playSound('winGame');
                this.launchConfetti();
            }
        } else {
            this.playSound('wrong');
        }

        setTimeout(() => {
            const isLast = this.state.currentQIndex >= this.state.questions.length - 1;
            this.el.nextBtn.text(isLast ? GameApp.getLangText("Kết thúc") : GameApp.getLangText("Tiếp tục")).show();
            $('#skipQuestionBtn').hide();
        }, 200);
    },

    renderQuestion: function() {
        this.state.answered = false;
        const q = this.state.questions[this.state.currentQIndex];

        this.el.question.html('');
        if(q.q) this.el.question.append('<p>' + q.q + '</p>');
        if(q.img) this.el.question.append('<img src="' + q.img + '" alt="" />');
        this.el.options.empty();

        q.opts.forEach((opt, i) => {
            let text = '';
            if(q.opts.length > 1) text += String.fromCharCode(65 + i) + '. ';
            text += opt;
            $('<button>')
                .text(text)
                .click(() => this.selectAnswer(i, q.answer))
                .appendTo(this.el.options);
        });

        this.el.nextBtn.hide();
        $('#skipQuestionBtn').show();

        this.startTimer(q.answer);

        if(q.opts.length < 2) {
            $('#ansContainer').hide();
            $('#showAnsBtn').show();
            $('#options').hide();
            $('#ansContainer button').prop('disabled', false);
            this.el.options.find('button').prop('disabled', true);
        } else {
            $('#ansContainer').hide();
            $('#showAnsBtn').hide();
            $('#options').show();
        }

        // MathJax
        if (window.MathJax) {
            MathJax.typesetPromise([this.el.question[0], this.el.options[0]]);
            MathJax.typeset();
        }
    },

    selectAnswer: function(idx, correct) {
        if (this.state.answered) return;
        this.state.answered = true;
        this.stopTimer();

        const buttons = this.el.options.find('button');
        buttons.prop('disabled', true);

        // Luôn hiện đáp án đúng
        buttons.eq(correct).addClass('correct');
        if (idx === correct && correct >= 0) {
            this.state.scoreRound += 1;
            this.state.correctCount++;
            this.el.score.text(this.state.scoreRound + " ");
            this.playSound('correct');

            if (this.state.scoreRound === this.state.questions.length * 1) {
                this.playSound('winGame');
                this.launchConfetti();
            }
        } else {
            if(idx >= 0) {
                buttons.eq(idx).addClass('wrong');
            }
            this.playSound('wrong');
        }

        setTimeout(() => {
            const isLast = this.state.currentQIndex >= this.state.questions.length - 1;
            this.el.nextBtn.text(isLast ? GameApp.getLangText("Kết thúc") : GameApp.getLangText("Tiếp tục")).show();
            $('#skipQuestionBtn').hide();
        }, 200);
    },

    endQuiz: function() {
        this.el.question.text(GameApp.getLangText('🎉 Hoàn thành! Tổng điểm:') + ' ' + this.state.scoreRound + '⭐');
        this.el.options.empty();
        $('#ansContainer').hide();
        $('#showAnsBtn').hide();
        this.el.nextBtn.text(GameApp.getLangText("Về Vòng Quay"));
        // this.state.currentQIndex = -1; // Reset để nút chơi lại hoạt động
    },

    // ============================================================
    // TIMER & UI HELPERS
    // ============================================================
    startTimer: function(correct) {
        this.state.timer = this.state.timePerQuestion;
        this.el.timer.text(this.state.timer);

        this.state.timerId = setInterval(() => {
            this.state.timer--;
            this.el.timer.text(this.state.timer);

            if (this.state.timer === 10) this.playSound('countdown');
            if (this.state.timer <= 6 && this.state.timer > 0) {
                this.el.timer.addClass('pulse');
                setTimeout(() => this.el.timer.removeClass('pulse'), 500);
            }
            if (this.state.timer <= 0) {
                this.handleTimeout();
                this.selectAnswer(-1, correct);
            }
        }, 1000);
    },

    stopTimer: function() {
        clearInterval(this.state.timerId);
        this.audio.countdown.pause();
        this.audio.countdown.currentTime = 0;
    },

    handleTimeout: function() {
        this.stopTimer();

        this.el.options.find('button').prop('disabled', true).addClass('disabled');
        this.el.nextBtn.text(GameApp.getLangText("Tiếp tục")).show();

        $('#ansContainer').hide();
        $('#showAnsBtn').hide();
        $('#options').show();
    },

    // ============================================================
    // UTILS & EVENTS
    // ============================================================
    playSound: function(name) {
        if (this.audio[name]) {
            this.audio[name].currentTime = 0;
            this.audio[name].play().catch(e => {});
        }
    },

    fadeOutSound: function(audio, duration = 3000) {
        if (!audio) return;
        let step = audio.volume / (duration / 100);
        let fade = setInterval(() => {
            if (audio.volume - step > 0) {
                audio.volume = Math.max(0, audio.volume - step);
            } else {
                audio.pause();
                audio.currentTime = 0;
                audio.volume = 1;
                clearInterval(fade);
            }
        }, 100);
    },

    shuffleArray: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    resetGame: function () {
        var self = this;
        localStorage.removeItem(self.storageKey);
        self.state.students = [...self.state.studentsOriginal];
        self.state.questionPool = self.config.initialData.questions || [];
        self.renderStudentList();
        self.drawWheel();
    },

    launchConfetti: function() {
        if (typeof confetti === 'undefined') return;
        let duration = 6000;
        let end = Date.now() + duration;
        (function frame() {
            confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 } });
            confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 } });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    },

    cleanRound: function () {
        this.el.question.text(GameApp.getLangText('Nhấn "Bắt đầu" để chơi!'));
        this.el.options.empty();
    },

    // BIND EVENT LISTENERS
    bindEvents: function() {
        const self = this;

        // 1. Wheel Interactions
        this.el.canvas.on('mousedown touchstart', function(e) {
            // Xóa học sinh khỏi danh sách nếu đang ở chế độ gọi tên
            if (self.state.tempCall && self.state.selectedStudentIndex >= 0) {
                self.state.students.splice(self.state.selectedStudentIndex, 1);
            }

            // Logic giữ chuột
            if (self.state.spinning) return;
            self.state.holding = true;
            self.state.holdStart = performance.now();
            self.el.result.text('');
            self.el.hint.text(GameApp.getLangText('Đang lấy lực… thả ra để quay!'));
        });

        $(window).on('mouseup touchend', function() {
            if (!self.state.holding) return;
            self.state.holding = false;
            self.state.spinning = true;
            self.state.releaseStart = performance.now();
            self.el.hint.text(GameApp.getLangText('Đang quay…'));
        });

        this.el.canvas.on('mouseleave', function(e) {
            if (self.state.holding) $(window).trigger('mouseup');
        });

        // 2. Navigation
        $("#startBtn").click(function() {
            self.el.welcome.addClass("fadeOut");
            setTimeout(() => {
                self.el.welcome.hide();
                self.el.wheelScreen.show();
            }, 1000);
        });

        $("#to_trochoi").click(function() {
            if (!self.state.currentPlayer) {
                alert(GameApp.getLangText("⚠️ Hãy quay chọn một học sinh trước!"));
                return;
            }
            self.el.wheelScreen.hide();
            self.el.gameScreen.show();
            self.el.playerName.text("👤: " + self.state.currentPlayer);
            self.cleanRound();
            // self.prepareQuiz(); // Chuẩn bị game mới
        });

        $("#reset_games").click(function() {
            if (confirm(GameApp.getLangText("Bạn có chắc muốn RESET danh sách không?"))) {
                self.resetGame();
            }
        });

        // 3. Settings
        this.el.callModeConfig.change(function() {
            self.state.tempCall = $(this).is(":checked");
        }).prop("checked", true);

        $('#btn_save_config').on('click', function () {
            $('#settings_panel input').trigger('change')
        });

        // 4. Game Controls
        this.el.nextBtn.click(() => {
            if(this.el.nextBtn.text() == GameApp.getLangText("Về Vòng Quay")) {
                if (self.state.currentPlayer) {
                    self.updateScoreStorage(self.state.currentPlayer, self.state.scoreRound);
                }
                self.stopTimer();
                self.el.timer.text('');
                self.el.gameScreen.hide();
                self.el.wheelScreen.show();
                // Reset state
                this.state.currentQIndex = -1;
                this.state.scoreRound = 0;
                this.state.correctCount = 0;
                this.el.score.text("0 ");
                this.el.nextBtn.text(GameApp.getLangText("Bắt Đầu")).show();
            } else {
                this.nextQuestion();
            }
        });


        $('#skipQuestionBtn').on('click', function () {
            const q = self.state.questions[self.state.currentQIndex];
            self.selectAnswer(-1, q.answer);
            $('#ansContainer').hide();
            $('#showAnsBtn').hide();
            $('#options').show();
        });
    }
};
