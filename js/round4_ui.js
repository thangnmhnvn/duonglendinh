Object.assign(GameUI, {
    renderVDIntroPlayers: function() { this.renderPlayersCommon("vd-player-summary"); },

    // Vẽ danh sách nút chọn câu hỏi (20, 20, 30)
    renderVDQuestionList: function(playerIndex) {
        var questions = GameConfig.rounds.veDich.questionSets[playerIndex];
        var html = "";
        questions.forEach((q, idx) => {
            html += `<button id="btn-vd-q-${idx}" class="btn btn-outline-light fw-bold" onclick="GameLogic.selectVDQuestion(${idx})">
                        Câu ${idx + 1} (${q.points}đ)
                     </button>`;
        });
        $("#vd-question-list").html(html);
        $("#vd-current-player-name").text(GameConfig.players[playerIndex].name);
    },

    // Hiển thị nội dung câu hỏi
    renderVDQuestion: function(q) {
        $("#vd-question-content").text(q.content);
        $("#vd-question-point").text(q.points + " điểm");
        $("#vd-answer-area").hide();
        $("#vd-steal-section").hide();
        $("#vd-timer").text(GameConfig.rounds.veDich.duration).removeClass("text-danger");

        // Reset nút sao
        $("#btn-star-hope").removeClass("btn-warning").addClass("btn-outline-warning").prop("disabled", false).show();
        $("#star-status").hide();
    },

    updateVDTimer: function(seconds) {
        $("#vd-timer").text(seconds);
        if (seconds <= 5) $("#tt-timer").addClass("text-danger");
    },

    showVDAnswer: function(ans) {
        $("#vd-answer-area").text("ĐÁP ÁN: " + ans).fadeIn();
    },

    // Hiển thị trạng thái Ngôi sao hy vọng
    toggleStarUI: function(isActive) {
        if (isActive) {
            $("#btn-star-hope").addClass("btn-warning").removeClass("btn-outline-warning").text("★ ĐÃ CHỌN NGÔI SAO");
            $("#star-status").show();
        } else {
            $("#btn-star-hope").removeClass("btn-warning").addClass("btn-outline-warning").text("★ NGÔI SAO HY VỌNG");
            $("#star-status").hide();
        }
    },

    // Hiển thị các nút cho người cướp lượt
    showVDStealOptions: function(excludeIdx) {
        $("#vd-steal-section").show();
        var html = "";
        GameConfig.players.forEach((p, idx) => {
            if (idx !== excludeIdx) {
                html += `<button class="btn btn-outline-info mx-1" onclick="GameLogic.selectVDStealer(${idx})">${p.name}</button>`;
            }
        });
        $("#vd-steal-buttons").html(html);
    },

    // Đánh dấu câu hỏi đã xong
    disableVDQuestionBtn: function(idx) {
        $(`#btn-vd-q-${idx}`).removeClass("btn-outline-light").addClass("btn-secondary disabled").prop("disabled", true);
    }
});