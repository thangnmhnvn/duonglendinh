var GameUI = {
    updateScoreBoard: function(players) {
        players.forEach((p, index) => {
            $(`#score-${index}`).text(p.score);
            $(`#name-${index}`).text(p.name);
        });
    },

    showQuestion: function(content) {
        $("#question-content").html(content).fadeIn();
        $("#answer-content").hide();
    },

    showAnswer: function(answer) {
        $("#answer-content").html(answer).show();
    },

    updateTimer: function(seconds) {
        $("#timer").text(seconds);
    },

    toggleScreen: function(screenId) {
        $(".game-screen").hide();
        $("#" + screenId).show();
    }
};