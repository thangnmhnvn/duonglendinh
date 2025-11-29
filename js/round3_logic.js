Object.assign(GameLogic, {
    ttCurrentQIndex: 0,
    ttTimer: null,
    ttTimeLeft: 0,

    transitionToRound3: function() {
        GameUI.playVideo(GameConfig.paths.ttIntro, function() {
            GameUI.renderTTIntroPlayers();
            GameUI.switchScreen("screen-tt-intro");
        });
    },

    startTangToc: function() {
        this.ttCurrentQIndex = 0;
        GameUI.renderTTScoringButtons(); // Vẽ nút chấm điểm
        GameUI.switchScreen("screen-tt-play");
        this.nextTTQuestion();
    },

    nextTTQuestion: function() {
        var questions = GameConfig.rounds.tangToc.questions;
        if (this.ttCurrentQIndex >= questions.length) {
            GameUI.showNotification("Đã kết thúc Vòng Tăng Tốc! Chuyển sang Vòng Về Đích.", function () {
                GameLogic.transitionToRound4();
            });
            return;
        }

        var q = questions[this.ttCurrentQIndex];
        GameUI.renderTTQuestion(q);
        this.startTTTimer();
        GameUI.playMusic({'url':GameConfig.paths.audio.showQuestion}, () => {});
    },

    startTTTimer: function() {
        clearInterval(this.ttTimer);
        this.ttTimeLeft = GameConfig.rounds.tangToc.duration; // 30 giây
        GameUI.updateTTTimer(this.ttTimeLeft);

        this.ttTimer = setInterval(() => {
            this.ttTimeLeft--;
            GameUI.updateTTTimer(this.ttTimeLeft);

            if (this.ttTimeLeft === 5) GameUI.playMusic({'url':GameConfig.paths.audio.c5giay}, () => {});
            if (this.ttTimeLeft <= 0) {
                clearInterval(this.ttTimer);
                this.revealTTAnswer();
            }
        }, 1000);
    },

    revealTTAnswer: function() {
        clearInterval(this.ttTimer);
        var q = GameConfig.rounds.tangToc.questions[this.ttCurrentQIndex];
        GameUI.showTTAnswer(q.answer);
    },

    // --- CẬP NHẬT HÀM CỘNG ĐIỂM ---
    awardTTPoints: function(playerIndex) {
        var points = GameConfig.rounds.tangToc.points; // 30 điểm
        GameConfig.players[playerIndex].score += points;

        // Cập nhật Sidebar
        GameUI.updateSideScore(playerIndex, GameConfig.players[playerIndex].score);

        // Disable nút để tránh bấm nhầm 2 lần
        $(`#btn-tt-score-${playerIndex}`).prop("disabled", true).text("ĐÃ CỘNG (+30)").removeClass("btn-success").addClass("btn-secondary");
    },

    finishTTQuestion: function() {
        clearInterval(this.ttTimer);
        // Reset lại trạng thái các nút chấm điểm trước khi sang câu mới
        $(".btn-success, .btn-secondary").prop("disabled", false); // Logic này sẽ được render lại ở câu sau nên không lo

        this.ttCurrentQIndex++;
        this.nextTTQuestion();

        // Vẽ lại bảng điểm để reset các nút "ĐÃ CỘNG" về trạng thái ban đầu
        GameUI.renderTTScoringButtons();
    }
});