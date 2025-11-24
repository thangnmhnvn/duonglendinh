var GameLogic = {
    currentQuestionIndex: 0,
    timer: null,
    currentTime: 0,

    init: function() {
        GameUI.updateScoreBoard(GameConfig.players);
    },

    startKhoiDong: function() {
        this.currentQuestionIndex = 0;
        GameUI.toggleScreen("screen-play");
        this.loadQuestion();
    },

    loadQuestion: function() {
        if (this.currentQuestionIndex >= GameConfig.rounds.khoiDong.questions.length) {
            alert("Kết thúc vòng thi!");
            return;
        }

        var q = GameConfig.rounds.khoiDong.questions[this.currentQuestionIndex];
        GameUI.showQuestion(q.content);
        this.startTimer(GameConfig.rounds.khoiDong.timePerQuestion);
    },

    startTimer: function(seconds) {
        clearInterval(this.timer);
        this.currentTime = seconds;
        GameUI.updateTimer(this.currentTime);

        this.timer = setInterval(() => {
            this.currentTime--;
            GameUI.updateTimer(this.currentTime);
            if (this.currentTime <= 0) {
                clearInterval(this.timer);
                // Hết giờ tự động hiện đáp án hoặc xử lý logic khác
            }
        }, 1000);
    },

    showAnswer: function() {
        clearInterval(this.timer);
        var q = GameConfig.rounds.khoiDong.questions[this.currentQuestionIndex];
        GameUI.showAnswer(q.answer);
    },

    nextQuestion: function() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    },

    addScore: function(playerIndex, points) {
        GameConfig.players[playerIndex].score += points;
        GameUI.updateScoreBoard(GameConfig.players);
    }
};