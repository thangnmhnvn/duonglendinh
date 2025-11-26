Object.assign(GameUI, {
    showPlayerReady: function(playerIndex) {
        var p = GameConfig.players[playerIndex];
        $("#current-player-avatar").attr("src", p.avatar);
        $("#current-player-name").text(p.name);
        $("#current-player-school").text(p.school);
        $("#current-player-score").text(p.score);
        this.switchScreen("screen-player-ready");
    },

    renderQuestion: function(question, player) {
        $("#gp-player-avatar").attr("src", player.avatar);
        $("#gp-player-name").text(player.name);
        $("#gp-player-score").text(player.score);
        $("#question-content").text(question.content);

        // Ảnh
        if (question.image) {
            $("#question-image").attr("src", question.image);
            $("#question-image-area").show();
        } else { $("#question-image-area").hide(); }

        // 4 Đáp án
        $(".option-btn").removeClass("btn-success btn-danger").addClass("btn-outline-light").prop("disabled", false);
        if (question.options && question.options.length === 4) {
            $("#opt-0").text("A. " + question.options[0]);
            $("#opt-1").text("B. " + question.options[1]);
            $("#opt-2").text("C. " + question.options[2]);
            $("#opt-3").text("D. " + question.options[3]);
            $("#answer-options").show();
        } else { $("#answer-options").hide(); }
    },

    showAnswerFeedback: function(selectedIndex, isCorrect) {
        var btn = $("#opt-" + selectedIndex);
        isCorrect ? btn.addClass("btn-success").removeClass("btn-outline-light")
            : btn.addClass("btn-danger").removeClass("btn-outline-light");
        $(".option-btn").prop("disabled", true);
    },

    updateTimer: function(seconds) {
        $("#timer-display").text(seconds);
        if (seconds <= 10) $("#timer-display").addClass("text-warning").removeClass("text-danger");
        else $("#timer-display").addClass("text-danger").removeClass("text-warning");
    },

    updateScore: function(score) { $("#gp-player-score").text(score); }
});