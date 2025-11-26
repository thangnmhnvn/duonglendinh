Object.assign(GameLogic, {
    currentQueue: [],

    startKhoiDong: function() {
        GameUI.playVideo(GameConfig.paths.khoiDongIntro, function() {
            GameLogic.preparePlayerTurn(0);
            GameUI.playBgMusic(GameConfig.paths.audio.startRound, () => {});
        });
    },

    preparePlayerTurn: function(playerIndex) {
        this.currentPlayerIndex = playerIndex;
        var questions = GameConfig.rounds.khoiDong.questionSets[playerIndex];
        if (!questions) return alert("Lỗi dữ liệu câu hỏi!");

        this.currentQueue = [...questions];
        GameUI.showPlayerReady(playerIndex);
        GameUI.highlightSidePlayer(playerIndex);
    },

    startQuestions: function() {
        this.timeLeft = GameConfig.rounds.khoiDong.duration;
        GameUI.updateTimer(this.timeLeft);
        this.nextQuestion();
        this.startTimer();
    },

    nextQuestion: function() {
        if (this.currentQueue.length === 0) {
            this.finishTurn();
            return;
        }
        GameUI.renderQuestion(this.currentQueue[0], GameConfig.players[this.currentPlayerIndex]);
    },

    checkAnswer: function(idx) {
        var q = this.currentQueue[0];
        let correctId = q.options.indexOf(q.answer);
        if (q.options[idx] === q.answer) {
            GameUI.showAnswerFeedback(idx, true);
            GameConfig.players[this.currentPlayerIndex].score += GameConfig.rounds.khoiDong.points;
            GameUI.updateScore(GameConfig.players[this.currentPlayerIndex].score);
            GameUI.updateSideScore(this.currentPlayerIndex, GameConfig.players[this.currentPlayerIndex].score);
            setTimeout(() => { this.currentQueue.shift(); this.nextQuestion(); }, 1000);
            GameUI.playMusic(GameConfig.paths.audio.correct, () => {});
        } else {
            GameUI.showAnswerFeedback(idx, false);
            GameUI.showAnswerFeedback(correctId, true);
            setTimeout(() => { this.currentQueue.shift(); this.nextQuestion(); }, 1000);
            GameUI.playMusic(GameConfig.paths.audio.inCorrect, () => {});
        }
    },

    handleSkip: function() {
        this.currentQueue.push(this.currentQueue.shift());
        this.nextQuestion();
    },

    startTimer: function() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            console.log(this.timeLeft);
            GameUI.updateTimer(this.timeLeft);
            if (this.timeLeft < 0) {
                clearInterval(this.timer);
                this.finishTurn();
            }
            if (this.timeLeft == 5) GameUI.playMusic(GameConfig.paths.audio.c5giay, () => {});
        }, 1000);
    },

    finishTurn: function() {
        clearInterval(this.timer);
        GameUI.playMusic(GameConfig.paths.audio.finishRound, () => {});

        GameUI.stopAllMedia();
        alert("Kết thúc lượt của " + GameConfig.players[this.currentPlayerIndex].name);
        var next = this.currentPlayerIndex + 1;
        if (next < GameConfig.players.length) {
            this.preparePlayerTurn(next);
            GameUI.playBgMusic(GameConfig.paths.audio.startRound, () => {});
        }
        else {
            alert("Đã kết thúc Vòng Khởi Động! Chuyển sang Vòng 2.");
            this.transitionToRound2();
        }

    }
});