/**
 * DUCK RACE GAME - JQUERY MODULE
 * Update: Camera stops to show Finish Line at 80% screen width
 */

const DuckRaceApp = {
    // ============================================================
    // 1. CẤU HÌNH (CONFIG)
    // ============================================================
    config: {
        basePath: "",

        sounds: {
            win: "3.mp3",
            click: "bling.mp3",
            correct: "dung.mp3",
            wrong: "sai.mp3",
            bgm: "nhacnen.mp3",
            countdown: "c321_2.mp3",
            start: "airhorn.mp3",
            covu: "cheer.mp3",
            winrace: "3.mp3",
            count5s: "count5s.m4a",
            hover: "hover.mp3"
        },

        images: {
            bg_ice: "sanbang.jpg",
            bg_grass: "duongduaco.jpg",
            tree_bank: "boco.jpg",
            start_line: "vachxuatphat.jpg",
            shore: "bo.png",
        },

        assets: {
            tree:   { folder: "cay",     prefix: "cay_",       ext: ".png", count: 12 },
            flower: { folder: "hoa",     prefix: "hoala_",     ext: ".png", count: 22 },
            rock:   { folder: "da",      prefix: "da_",        ext: ".png", count: 26 },
            boat:   { folder: "thuyen",  prefix: "thuyen (",     suffix: ").gif", count: 10, scaleX: false },
            bird:   { folder: "chim",    prefix: "chimthuan (",  suffix: ").gif", count: 10,
                reverse_prefix: "chimnguoc (",
                reverse_start: 25, reverse_end: 36, scaleX: true
            },
            animal: { folder: "dongvat", prefix: "dongvat (",    suffix: ").gif", count: 10,
                reverse_prefix: "dongvat (",
                reverse_start: 20, reverse_end: 22, scaleX: true
            }
        },

        fps: 60,
        pondLength: 13000,
        maxDistance: 0,
        parallaxSpeed: 0.5,
        targetSpeedPPS: 250
    },

    // ============================================================
    // 2. STATE
    // ============================================================
    state: {
        ducks: [], trees: [], hoas: [], das: [],
        students: [], names: [], winners: [], scores: {},

        raceStarted: false, readyToRun: false, winner: null,
        treesCreated: false, isPlayingMusic: false,

        cameraX: 0, raceDuration: 10, raceTimeLeft: 10,
        gameMode: "duck",
        excludeWinnersNextRound: false, highQualityAnimation: false,

        isQuizEnabled: false, questionType: "tuluan", questionPool: [],
        questionsTracNghiem: [], questionsTuLuan: [], currentQIndex: 0,
        maxQuestions: 3, questionTimerId: null, eliminateOnWrong: false
    },

    // ============================================================
    // 3. INIT
    // ============================================================
    el: {}, audio: {}, ctx: null,

    init: function() {
        this.cacheDOM();
        this.initAudio();
        this.initData();
        this.bindEvents();
        this.setupEnvironment();
        this.resizeCanvas();
        $(window).on('resize', () => this.resizeCanvas());
    },

    cacheDOM: function() {
        this.el = {
            pond: $("#pond"), pondContainer: $("#pond-container"),
            controls: $("#controls"), result: $("#result"),
            countdown: $("#countdown"), winnerList: $("#winnerList"),
            winnerMenu: $("#winnerMenu"),

            setupBtn: $("#setupBtn"), startBtn: $("#startBtn"),
            menuBtn: $("#menuBtn"), closeMenuBtn: $("#closeMenu"),
            resetGameBtn: $("#resetGame"), toggleMusicBtn: $("#toggleMusic"),
            answerBtn: $("#traloi"),

            lopName: $("#lopname"), studentCount: $("#soluonghs"),
            volumeSlider: $("#volumeSlider"), raceTimeInput: $("#thoigiandua"),
            excludeCheckbox: $("#excludeWinners"), hqAnimCheckbox: $("#hoatanh"),

            startLine: $("#startLine"), finishLine: $("#finishLine"),
            vachXuatPhat: $("#vachxuatphat"), vachVeDich: $("#vachvedich"),
            bank: $("#bank"), bo: $("#bo"), raceTimer: $("#raceTimer")
        };

        if ($("#pond canvas").length === 0) {
            this.el.pond.append('<canvas id="waterCanvas"></canvas>');
        }
        this.el.canvas = $("#waterCanvas");
        this.ctx = this.el.canvas[0].getContext('2d');
        this.el.canvas.css({position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none'});
    },

    initAudio: function() {
        const sounds = this.config.sounds;
        const path = this.config.basePath;
        const create = (file) => new Audio(path + file);

        this.audio = {
            win: create(sounds.win),
            click: create(sounds.click),
            countdown: create(sounds.countdown),
            correct: create(sounds.correct),
            wrong: create(sounds.wrong),
            start: create(sounds.start),
            winrace: create(sounds.winrace),
            covu: create(sounds.covu),
            bgm: create(sounds.bgm),
            count5s: create(sounds.count5s),
            hover: create(sounds.hover)
        };

        if (this.audio.bgm) {
            this.audio.bgm.loop = true;
            this.audio.bgm.volume = 0.5;
        }
    },

    // ============================================================
    // 4. DATA & UTILS
    // ============================================================
    initData: function() {
        const rawData = (typeof data !== 'undefined') ? data : { tenlop: "Lớp Demo", students: [], questions: [] };
        this.state.students = rawData.students || [];
        this.state.names = [...this.state.students];
        this.state.questionPool = rawData.questions || [];
        this.el.lopName.text(rawData.tenlop ? "Lớp: " + rawData.tenlop.toUpperCase() : "");

        if (this.state.questionPool.length > 0 && this.state.questionPool[0].opts) {
            this.state.questionType = "tracnghiem";
            this.state.questionsTracNghiem = this.getRandomQuestions(this.state.questionPool.length);
        } else {
            this.state.questionType = "tuluan";
            this.state.questionsTuLuan = [...this.state.questionPool];
            this.shuffleArray(this.state.questionsTuLuan);
        }
        this.loadStorage();
    },
    getStorageKey: function(suffix) { return suffix + this.state.gameMode + this.el.lopName.text(); },
    loadStorage: function() {
        const storedWinners = localStorage.getItem(this.getStorageKey("winners"));
        if (storedWinners) this.state.winners = JSON.parse(storedWinners);
        const storedScores = localStorage.getItem(this.getStorageKey("scores"));
        if (storedScores) this.state.scores = JSON.parse(storedScores);
        const storedExclude = localStorage.getItem(this.getStorageKey("excludeWinnersNextRound"));
        this.state.excludeWinnersNextRound = (storedExclude === "true");
        this.el.excludeCheckbox.prop("checked", this.state.excludeWinnersNextRound);
        this.updateWinnerListUI();
    },
    saveStorage: function() {
        localStorage.setItem(this.getStorageKey("winners"), JSON.stringify(this.state.winners));
        localStorage.setItem(this.getStorageKey("scores"), JSON.stringify(this.state.scores));
        localStorage.setItem(this.getStorageKey("excludeWinnersNextRound"), this.state.excludeWinnersNextRound);
    },
    getImagePath: function(key) { return this.config.basePath + this.config.images[key]; },
    getAssetPath: function(type, index, isReverse = false) {
        const asset = this.config.assets[type];
        if (!asset) return "";
        let idxStr = (["tree", "flower", "rock"].includes(type) && index < 10) ? "0" + index : index;
        if(type == "duck") {
            idxStr = Math.floor(Math.random() * 70) + 1;
        }
        let fileName = (isReverse && asset.reverse_prefix)
            ? asset.reverse_prefix + idxStr + (asset.suffix || asset.ext)
            : asset.prefix + idxStr + (asset.suffix || asset.ext);
        return this.config.basePath + asset.folder + "/" + fileName;
    },
    shuffleArray: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },
    getRandomQuestions: function(count) {
        let pool = [...this.state.questionPool];
        this.shuffleArray(pool);
        const selected = pool.slice(0, count);
        selected.forEach(q => {
            if(q.opts) {
                const correct = q.opts[q.answer];
                this.shuffleArray(q.opts);
                q.answer = q.opts.indexOf(correct);
            }
        });
        return selected;
    },
    shortenName: function(fullName) {
        if (!fullName) return '';
        const parts = fullName.trim().split(/\s+/).filter(Boolean);
        if (parts.length === 1) return parts[0];
        const initials = parts.slice(0, -1).map(p => p[0].toUpperCase());
        const last = parts[parts.length - 1];
        return initials.join(' ') + ' ' + last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();
    },
    playSound: function(key) {
        if (this.state.isPlayingMusic || key !== 'bgm') {
            if (this.audio[key]) {
                if (key !== 'bgm') this.audio[key].currentTime = 0;
                this.audio[key].play().catch(e => {});
            }
        }
    },
    stopSound: function (key) {
        if (this.audio[key]) {
            this.audio[key].pause();
            this.audio[key].currentTime = 0;
        }
    },

    // ============================================================
    // 5. ENVIRONMENT
    // ============================================================
    spawnObjects: function(count, type, className) {
        this.state[className + 's'] = [];
        $("." + className).remove();
        const assetConfig = this.config.assets[type];
        for (let i = 0; i < count; i++) {
            const div = $("<div>").addClass(className);
            const x = Math.random() * this.config.pondLength;
            const h = 120 + Math.random() * 70;
            const imgIndex = Math.floor(Math.random() * assetConfig.count) + 1;
            const bgUrl = this.getAssetPath(type, imgIndex);

            div.css({
                left: x + "px", height: h + "px", width: h * 0.8 + "px", bottom: "0px",
                backgroundImage: `url('${bgUrl}')`, backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom", backgroundSize: "contain",
                position: "absolute", zIndex: 6
            });
            div.attr('data-baseX', x);
            this.el.bank.append(div);
            if(className === 'tree') this.state.trees.push(div);
            if(className === 'hoa') this.state.hoas.push(div);
            if(className === 'da') this.state.das.push(div);
        }
    },
    setupEnvironment: function() {
        if (this.state.treesCreated) return;
        this.state.treesCreated = true;
        this.spawnObjects(this.config.assets.tree.count, 'tree', 'tree');
        this.spawnObjects(this.config.assets.flower.count, 'flower', 'hoa');
        this.spawnObjects(this.config.assets.rock.count, 'rock', 'da');
    },
    updateParallax: function() {
        const speed = this.config.parallaxSpeed;
        [...this.state.trees, ...this.state.hoas, ...this.state.das].forEach($el => {
            let baseX = parseFloat($el.attr('data-baseX'));
            let screenX = baseX - this.state.cameraX * speed;
            $el.css('left', screenX + "px");
            if (screenX < -150) {
                baseX += this.config.pondLength;
                $el.attr('data-baseX', baseX);
            }
        });
    },


    // ============================================================
    // 🔥 HÀM MỚI: VẼ VỊT BẰNG CANVAS
    // ============================================================
    drawDuck: function(ctx, w, h, index) {
        ctx.clearRect(0, 0, w, h);

        // Tạo màu ngẫu nhiên cho vịt dựa trên index để không con nào giống con nào
        // Màu gốc là Vàng (Hue ~ 45-55). Ta dao động nhẹ.
        const hue = 45 + (index % 15) * 2;
        const bodyColor = `hsl(${hue}, 100%, 50%)`;
        const wingColor = `hsl(${hue}, 100%, 45%)`; // Cánh đậm hơn chút

        ctx.save();

        // 1. THÂN VỊT (Hình bầu dục)
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.ellipse(w * 0.5, h * 0.65, w * 0.3, h * 0.22, 0, 0, Math.PI * 2);
        ctx.fill();
        // Viền thân
        ctx.strokeStyle = "#D4A017";
        ctx.lineWidth = 2;
        ctx.stroke();

        // 2. CÁNH (Hình bầu dục nhỏ)
        ctx.fillStyle = wingColor;
        ctx.beginPath();
        ctx.ellipse(w * 0.55, h * 0.65, w * 0.12, h * 0.08, 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // 3. ĐẦU (Hình tròn)
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.arc(w * 0.7, h * 0.45, w * 0.16, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // 4. MẮT
        // Lòng trắng
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(w * 0.75, h * 0.42, w * 0.05, 0, Math.PI * 2);
        ctx.fill();
        // Con ngươi đen
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(w * 0.77, h * 0.42, w * 0.02, 0, Math.PI * 2);
        ctx.fill();

        // 5. MỎ (Màu cam)
        ctx.fillStyle = "#FF5722";
        ctx.beginPath();
        ctx.moveTo(w * 0.82, h * 0.48); // Gốc mỏ trên
        ctx.quadraticCurveTo(w * 0.98, h * 0.45, w * 0.95, h * 0.52); // Mỏ trên cong ra
        ctx.quadraticCurveTo(w * 0.88, h * 0.58, w * 0.82, h * 0.52); // Mỏ dưới cong vào
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    },

    getDuckStyle: function (arg) {
        const style = new lib["style" + arg[0]]();
        style.x = arg[1];
        style.y = arg[2];
        style.scaleX = style.scaleY = arg[3];
        return style;
    },

    createDuckCanvas: function () {
        const canvas = document.createElement('canvas');
        canvas.width = 150;
        canvas.height = 150;

        const stage = new createjs.Stage(canvas);
        let eq = Math.floor(Math.random() * 2) + 1;

        const base = new lib["base" + eq]();
        base.x = 45;  // Giữa canvas (170/2)
        base.y = 50; // Hạ thấp xuống chút
        base.scaleX = base.scaleY = 1; // Thu nhỏ lại chút cho vừa khung

        stage.addChild(base);


        
        const styles = [
            [1, 79, 38, 0.72],
            [1, 79, 38, 0.72],
            [2, 60, 95, 0.72],
            [3, 80, 42, 0.72],
            [4, 60, 62, 0.72],
            [5, 60, 62, 0.72],
            [6, 63, 62, 0.72],
            [7, 80, 54, 0.72],
            [8, 90, 44, 0.72],
            [9, 91, 50, 0.72],
            [10, 59, 62, 0.72],
            [11, 89, 50, 0.72],
            [12, 77, 42, 0.72],
            [13, 136, 58, 0.71],
            [14, 92, 25, 0.7],
            [15, 60, 62, 0.72],
            [16, 49, 56, 0.68],
            [17, 59, 62, 0.72],
            [18, 60, 65, 0.71],
            [19, 68, 33, 0.71],
            [20, 64, 33, 1],
            [21, 60, 62, 0.72],
            [22, 60, 62, 0.72],
            [23, 74, 30, 1],
            [24, 80, 40, 0.9],
            [25, 80, 34, 0.9],
            [26, 60, 64, 0.7],
            [27, 60, 64, 0.72],
            [28, 74, 32, 0.72],
            [29, 145, 30, 0.72],
            [30, 98, 37, 0.72],
            [31, 82, 37, 0.72],
            [32, 60, 64, 0.71],
            [33, 73, 38, 0.71],
            [34, 59, 64, 0.71],
            [35, 64, 57, 0.71],
            [36, 60, 63, 0.72],
            [37, 60, 61, 0.72],
            [38, 40, 47, 0.8],
            [39, 85, 50, 0.72],
            [40, 60, 63, 0.72],
            [41, 78, 38, 0.72],
            [42, 85, 45, 0.75],
            [43, 59, 63, 0.73],
            [44, 76, 30, 0.73],
            [45, 84, 69, 0.75],
            [46, 70, 38, 0.75],
            [47, 80, 20, 0.75],
            [48, 85, 60, 0.75]
        ];

        const eq2 = Math.floor(Math.random() * (48 + 1));
        stage.addChild(this.getDuckStyle(styles[eq2]));

        // const style = this.getDuckStyle(48, 85, 60, 0.75);
        // stage.addChild(style);

        stage.update(); // Render 1 lần (vì hình này tĩnh, không cần tick liên tục)

        return canvas;
    },

    // ============================================================
    // 6. SETUP RACE
    // ============================================================
    setupRace: function() {
        this.state.raceStarted = false;
        this.state.readyToRun = false;
        this.state.winner = null;
        this.resetQuestionState();
        this.el.answerBtn.hide();
        this.state.cameraX = 0;
        this.el.pond.css('transform', 'translateX(0px)');
        this.el.result.text('');
        this.el.countdown.hide();
        this.el.vachVeDich.addClass("hidden");
        this.el.vachXuatPhat.removeClass("hidden");
        this.el.startLine.css('transform', 'translateX(0px)');

        // 1. Lấy thời gian từ input
        this.state.raceDuration = parseInt(this.el.raceTimeInput.val()) || 10;
        this.state.raceTimeLeft = this.state.raceDuration;

        // 2. Tính toán quãng đường đích (Đảm bảo về đích đúng thời gian đã đặt)
        this.config.maxDistance = this.config.targetSpeedPPS * this.state.raceDuration;
        this.config.pondLength = this.config.maxDistance + 2000;

        // 3. Đặt vạch đích
        this.el.finishLine.css('left', (this.config.maxDistance + 125)+ "px");
        this.el.finishLine.css('transform', 'translateX(0px)');

        let currentNames = [...this.state.students];
        if (this.el.excludeCheckbox.is(":checked")) {
            currentNames = currentNames.filter(n => !this.state.winners.includes(n));
        }
        if (currentNames.length === 0) { alert("Không còn học sinh nào để đua!"); return; }

        this.el.pond.find('.duck').remove();
        this.state.ducks = [];
        const pondHeight = this.el.pond.height();
        const bottomOffset = 180;
        const spacing = (pondHeight - bottomOffset) / (currentNames.length + 1);
        const mode = this.state.gameMode;
        const assetConfig = this.config.assets[mode];

        let bgImageKey = null;
        if (mode === 'bird') bgImageKey = "bg_ice";
        if (mode === 'animal') bgImageKey = "bg_grass";
        const bgUrl = this.getImagePath(bgImageKey);
        if(bgImageKey !== null) {
            $("body").css({
                background: `url("${bgUrl}") ${this.state.highQualityAnimation ? 'repeat-x center bottom' : 'no-repeat center center'}`,
                backgroundSize: 'cover'
            });
        } else {
            $("body").css({
                background: '',
                backgroundSize: ''
            });
        }

        // Tính tốc độ cơ bản (Pixel per frame)
        const baseSpeedPerFrame = this.config.targetSpeedPPS / this.config.fps;


        this.shuffleArray(currentNames);

        currentNames.forEach((name, i) => {
            const shortName = this.shortenName(name);
            const duckDiv = $("<div>").addClass("duck").css("top", (spacing * (i + 1)) + "px");
            if (mode === 'duck') {
                const canvas = this.createDuckCanvas();
                duckDiv.append(canvas);
                duckDiv.append(`<div class="name">${shortName}</div>`);
                duckDiv.append('<div class="index">'+data.students.indexOf(name)+'</div>');
            } else {
                let displayIdx = (i % assetConfig.count) + 1;
                let isReverse = false;
                let transformStyle = "";
                if (assetConfig.scaleX) {
                    if (assetConfig.reverse_start && i >= assetConfig.reverse_start && i <= assetConfig.reverse_end) {
                        isReverse = true;
                        // if(mode === 'bird') displayIdx = i - 24;
                        // if(mode === 'animal') displayIdx = i;
                        transformStyle = "scaleX(-1)";
                    }
                }
                const imgPath = this.getAssetPath(mode, displayIdx, isReverse);
                duckDiv.html(`<img src="${imgPath}" style="transform: ${transformStyle}"><div class="name">${shortName}</div>`);
            }

            this.el.pond.append(duckDiv);

            const randomFactor = 0.9 + Math.random() * 0.2;

            this.state.ducks.push({
                $el: duckDiv,
                name: name,
                x: 0,
                yOffset: Math.random() * 10,
                baseSpeed: baseSpeedPerFrame * randomFactor,
                boosting: false,
                active: true
            });
        });
        const remaining = this.state.students.length - this.state.winners.length;
        this.el.studentCount.text(`Số lượng học sinh: ${remaining}/${this.state.students.length}`);
        this.el.startBtn.prop("disabled", false);
    },

    startRace: async function() {
        if (this.state.ducks.length === 0) return;
        this.el.startBtn.prop("disabled", true);
        this.el.setupBtn.prop("disabled", true);
        this.el.countdown.show();
        this.playSound('countdown');

        for (let i = 3; i > 0; i--) {
            this.el.countdown.text(i);
            await new Promise(r => setTimeout(r, 1000));
        }
        this.playSound('start');
        this.playSound('covu');

        this.el.countdown.text("GO!");
        await new Promise(r => setTimeout(r, 700));
        this.el.countdown.hide();
        this.el.vachXuatPhat.addClass("hidden");
        this.state.readyToRun = true;
        this.state.raceStarted = true;
        requestAnimationFrame((ts) => this.animateRace(ts));
    },

    // ============================================================
    // 7. ANIMATE RACE (Logic Camera Updated)
    // ============================================================
    animateRace: function(ts) {
        if (!this.state.raceStarted || !this.state.readyToRun) return;

        const delta = 1 / this.config.fps;

        // 1. Đếm ngược
        this.state.raceTimeLeft -= delta;
        if (this.state.raceTimeLeft < 0) this.state.raceTimeLeft = 0;
        this.el.raceTimer.text(`⏱ ${Math.ceil(this.state.raceTimeLeft)}s`);

        const leadDuck = this.state.ducks.reduce((a, b) => a.x > b.x ? a : b);

        this.state.ducks.forEach(d => {
            if (this.state.winner) return; // Dừng nếu đã có người thắng
            if (!d.active) return;

            // Boost
            if (!d.boosting && Math.random() < 0.004) {
                d.boosting = true;
                const oldSpeed = d.baseSpeed;
                d.baseSpeed *= 1.5;
                setTimeout(() => { d.baseSpeed = oldSpeed; d.boosting = false; }, 800 + Math.random() * 1200);
            }

            let moveAmt = d.baseSpeed;
            d.x += moveAmt;

            // KIỂM TRA ĐÍCH
            if (d.x >= this.config.maxDistance) {
                d.x = this.config.maxDistance;
                if (!this.state.winner) {
                    this.state.raceTimeLeft = 0;
                    this.el.raceTimer.text(`⏱ 0s`);
                    this.handleWin(d);
                }
            }

            d.yOffset += 0.05;
            d.$el.css({ left: d.x + "px", transform: `translateY(${Math.sin(d.yOffset) * 5}px)` });
        });

        // --- CAMERA LOGIC (ĐÃ CẬP NHẬT) ---
        const pondWidth = this.el.pondContainer.width();
        let targetCameraX = 0;

        // Theo dõi vịt dẫn đầu (giữ ở giữa màn hình)
        if (leadDuck.x > 150) targetCameraX = leadDuck.x - pondWidth / 2 + 100;

        // 🔥 ĐIỀU CHỈNH: Dừng camera sao cho vạch đích nằm ở 80% (4/5) màn hình
        // Công thức: MaxCamera = Vị trí Đích - (0.8 * Chiều rộng màn hình)
        const maxCam = this.config.maxDistance - pondWidth * 0.6;

        if (targetCameraX > maxCam) targetCameraX = maxCam;

        // Di chuyển camera mượt mà
        this.state.cameraX = this.lerp(this.state.cameraX, targetCameraX, 0.08);
        const transformStyle = `translateX(${-this.state.cameraX}px)`;

        this.el.pond.css('transform', transformStyle);
        this.el.startLine.css('transform', transformStyle);
        this.el.finishLine.css('transform', transformStyle);
        this.el.bo.css('transform', transformStyle);
        this.el.bank.css('transform', transformStyle);

        if (this.state.highQualityAnimation) $("body").css('backgroundPosition', `${-this.state.cameraX}px`);
        this.updateParallax();

        if (!this.state.winner) {
            // Hết giờ mà chưa ai thắng -> Xử lý thắng cho con dẫn đầu
            if (this.state.raceTimeLeft <= 0) {
                this.handleWin(leadDuck);
            } else {
                requestAnimationFrame((ts) => this.animateRace(ts));
            }
        }
    },

    handleWin: function(winnerDuck) {
        this.playSound('winrace');
        this.state.winner = winnerDuck;
        this.state.ducks.forEach(d => { if (d !== winnerDuck) d.active = false; });
        this.el.result.text(`🏆 ${winnerDuck.name.toUpperCase()}`);
        winnerDuck.$el.addClass("winner-glow");
        this.el.vachVeDich.removeClass("hidden");
        this.addWinner(winnerDuck.name);
        if (this.state.isQuizEnabled) this.el.answerBtn.show();
        if (this.state.isPlayingMusic) this.audio.win.play();
        const x = winnerDuck.x + 35;
        const y = winnerDuck.$el.position().top + 40;
        this.createEffects(x, y);
        this.el.startBtn.prop("disabled", true);
        this.el.setupBtn.prop("disabled", false);
    },

    // ... (Các hàm Utils và Quiz giữ nguyên) ...
    addWinner: function(name) {
        if (!this.state.scores[name]) this.state.scores[name] = 0;
        if (!this.state.winners.includes(name)) this.state.winners.push(name);
        this.saveStorage();
        this.updateWinnerListUI();
    },
    updateWinnerListUI: function() {
        this.el.winnerList.empty();
        if (this.state.winners.length === 0) { this.el.winnerList.html("<p>Chưa có ai thắng 🐥</p>"); return; }
        const sorted = [...this.state.winners].sort((a, b) => (this.state.scores[b] || 0) - (this.state.scores[a] || 0));
        sorted.forEach((name, index) => {
            const div = $("<div>").css({ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px", padding: "4px 6px", borderBottom: "1px dashed #ccc" });
            div.append($("<span>").text(`${index + 1}. 🏅 ${name} — ${this.state.scores[name] || 0} điểm`));
            const btn = $("<button>").text("❌").css({ background: "#ff4d4d", border: "none", color: "white", borderRadius: "6px", cursor: "pointer", padding: "2px 6px" }).click(() => {
                const idx = this.state.winners.indexOf(name);
                if (idx > -1) this.state.winners.splice(idx, 1);
                delete this.state.scores[name];
                this.saveStorage();
                this.updateWinnerListUI();
            });
            div.append(btn);
            this.el.winnerList.append(div);
        });
        const remaining = this.state.students.length - this.state.winners.length;
        this.el.studentCount.text(`Số lượng học sinh: ${remaining}/${this.state.students.length}`);
    },
    resizeCanvas: function() {
        const w = this.el.pond.width();
        const h = this.el.pond.height();
        if (this.el.canvas[0]) { this.el.canvas[0].width = w; this.el.canvas[0].height = h; }
    },
    lerp: function(a, b, t) { return a + (b - a) * t; },
    createEffects: function(x, y) {
        const createSplash = () => { for (let i = 0; i < 8; i++) { const s = $("<div>").addClass("splash").css({ left: x + (Math.random() * 40 - 20) + "px", top: y + (Math.random() * 20 - 10) + "px" }); this.el.pond.append(s); setTimeout(() => s.remove(), 600); } };
        const createConfetti = () => { for (let i = 0; i < 15; i++) { const c = $("<div>").addClass("confetti").css({ left: x + (Math.random() * 60 - 30) + "px", top: y + (Math.random() * 20 - 10) + "px", background: `hsl(${Math.random() * 360},80%,60%)` }); this.el.pond.append(c); setTimeout(() => c.remove(), 1000); } };
        let sInt = setInterval(createSplash, 600); let cInt = setInterval(createConfetti, 1000);
        setTimeout(() => { clearInterval(sInt); clearInterval(cInt); }, 5000);
    },
    prepareQuiz: function() {
        if (!this.state.isQuizEnabled || !this.state.winner) return;
        this.el.answerBtn.hide();
        this.state.currentQIndex = 0;
        if ($("#questionArea").length === 0) this.createQuestionUI();
        this.showNextQuestion();
    },
    createQuestionUI: function() {
        $("<div>", { id: "questionArea" }).css({ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'white', color: 'black', padding: '20px', borderRadius: '15px', textAlign: 'center', display: 'none', zIndex: 900, width: '80vw', maxHeight: '90vh' }).appendTo("body");
        this.el.questionArea = $("#questionArea");
    },
    showNextQuestion: function() {
        const name = this.state.winner.name;
        if (this.state.currentQIndex >= this.state.maxQuestions) {
            if(this.state.scores[name] > 0) {
                this.playSound('win');
            } else {
                this.playSound('wrong');
            }
            this.el.questionArea.html(`<h3>🎉 Số điểm ${name}: ${this.state.scores[name] || 0} điểm</h3><button id="closeQBtn">Đóng</button>`);
            $("#closeQBtn").on("click", () => this.el.questionArea.hide());
            this.el.questionArea.show();
            return;
        }
        this.state.currentQIndex++;
        let q = (this.state.questionType === 'tuluan') ? this.state.questionsTuLuan[this.state.currentQIndex % this.state.questionsTuLuan.length] : this.state.questionsTracNghiem[this.state.currentQIndex % this.state.questionsTracNghiem.length];
        this.el.questionArea.show();
        if (this.state.questionType === 'tuluan') this.renderTuLuan(q, name); else this.renderTracNghiem(q, name);
        if ($("#chtgtl").is(":checked")) this.startQuestionTimer();
    },
    renderTuLuan: function(q, name) {
        this.el.questionArea.html(`<div id="qTimerDisplay" style="font-size:36px; font-weight:bold;"></div><h3>Câu ${this.state.currentQIndex}: ${q.q}</h3><button id="showAnsBtn">👀 Hiện đáp án</button><br><br><div id="ansContainer" style="display:none; margin-top:10px;"><h3>Đáp án: ${q.answer}</h3><button class="markBtn" data-correct="true">✅ Đúng</button><button class="markBtn" data-correct="false">❌ Sai</button></div><button id="skipQBtn" class="btn_boqua" style="margin-top:10px;">Bỏ qua</button>`);
        $("#showAnsBtn").click(() => { clearInterval(this.state.questionTimerId); $("#ansContainer").show(); $("#showAnsBtn").hide(); });
        $(".markBtn").click((e) => {
            this.handleAnswerResult($(e.currentTarget).data("correct"), name);
        });
        $("#skipQBtn").click(() => this.closeQuestion());
    },
    renderTracNghiem: function(q, name) {
        this.el.questionArea.html(`<div id="qTimerDisplay" style="font-size:36px; font-weight:bold;"></div><h3>Câu ${this.state.currentQIndex}: ${q.q}</h3><div id="optsContainer">${q.opts.map((o, i) => `<button class="optBtn" data-idx="${i}" style="margin:5px; width:100%; text-align:left;">${String.fromCharCode(65 + i)}. ${o}</button>`).join("<br>")}</div><br><button id="skipQBtn" class="btn_boqua">Bỏ qua</button>`);
        $(".optBtn").click((e) => {
            clearInterval(this.state.questionTimerId);
            const $btn = $(e.currentTarget);
            const selectedIdx = $btn.data("idx");
            this.stopSound('count5s');

            if (selectedIdx === q.answer) {
                $btn.css("background-color", "lightgreen");
                this.playSound('correct');
                setTimeout(() => this.handleAnswerResult(true, name), 1000);
            } else {
                $btn.css("background-color", "lightcoral"); $(`.optBtn[data-idx="${q.answer}"]`).css("background-color", "lightgreen");
                this.playSound('wrong');
                setTimeout(() => this.handleAnswerResult(false, name), 1000);
            }
            $(".optBtn").prop("disabled", true);
        });
        $("#skipQBtn").click(() => this.closeQuestion());
    },
    startQuestionTimer: function() {
        let timeLeft = parseInt($("#thoigiantraloi").val()) || 15;
        $("#qTimerDisplay").text("⏱ " + timeLeft + "s");
        clearInterval(this.state.questionTimerId);
        this.state.questionTimerId = setInterval(() => {
            timeLeft--;
            $("#qTimerDisplay").text("⏱ " + timeLeft + "s");
            if(timeLeft == 5) {
                this.playSound('count5s');
            }
            if (timeLeft <= 0) {
                clearInterval(this.state.questionTimerId);
                $("#qTimerDisplay").text("Hết giờ!");
                if (this.state.eliminateOnWrong) { alert(`🚫 ${this.state.winner.name} hết giờ và bị loại!`); this.closeQuestion(); } else { setTimeout(() => this.showNextQuestion(), 1500); }
            }
        }, 1000);
    },
    handleAnswerResult: function(isCorrect, name) {
        if (isCorrect) {
            if (!this.state.scores[name]) this.state.scores[name] = 0;
            this.state.scores[name] += 10;
            this.saveStorage();
            this.updateWinnerListUI();
            this.showNextQuestion();
        } else {
            if (this.state.eliminateOnWrong) {
                this.playSound('wrong')
                alert(`🚫 ${name} bị loại khỏi lượt hỏi!`);
                this.closeQuestion();
            } else { this.showNextQuestion(); }
        }
    },
    closeQuestion: function() {
        this.stopSound('count5s');
        this.el.questionArea.hide(); clearInterval(this.state.questionTimerId);
    },
    resetQuestionState: function() { if(this.el.questionArea) this.el.questionArea.hide(); },

    bindEvents: function() {
        const self = this;
        this.el.setupBtn.click(() => { this.playSound('click'); this.setupRace(); });
        this.el.startBtn.click(() => { this.startRace(); });
        this.el.resetGameBtn.click(() => {
            if (confirm("Reset toàn bộ game?")) {
                localStorage.removeItem(this.getStorageKey("winners")); localStorage.removeItem(this.getStorageKey("scores"));
                this.state.winners = []; this.state.scores = {};
                this.updateWinnerListUI(); this.setupEnvironment(); alert("Đã reset!");
            }
        });
        this.el.menuBtn.click(() => this.el.winnerMenu.addClass("show"));
        this.el.closeMenuBtn.click(() => {
            this.el.winnerMenu.removeClass("show");
            this.playSound('click');
            this.setupRace();
        });
        this.el.toggleMusicBtn.click(function() {
            if (self.state.isPlayingMusic) { self.audio.bgm.pause(); $(this).text("🔊 Bật nhạc"); } else { self.audio.bgm.play(); $(this).text("⏸ Tạm dừng"); }
            self.state.isPlayingMusic = !self.state.isPlayingMusic;
        });
        this.el.volumeSlider.on("input", function() { self.audio.bgm.volume = $(this).val(); });
        this.el.answerBtn.click(() => this.prepareQuiz());
        this.el.hqAnimCheckbox.change(function() { self.state.highQualityAnimation = $(this).is(":checked"); });
        $('input[name="race"]').change(function() { if ($(this).is(":checked")) self.state.gameMode = $(this).val(); });
        $("#hstraloicauhoi").change(function() { self.state.isQuizEnabled = $(this).is(":checked"); $("#opcauhoi").toggle(self.state.isQuizEnabled); });
        $("#chkLoai").change(function() { self.state.eliminateOnWrong = $(this).is(":checked"); });
        $("#numQ").change(function() { self.state.maxQuestions = parseInt($(this).val()); });
        $("#chtgtl").change(function() { $("#numbertgtlch").toggle($(this).is(":checked")); });
    }
};

$(document).ready(function() { DuckRaceApp.init(); });