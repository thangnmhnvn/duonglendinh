Object.assign(GameLogic, {
    vdPlayerOrder: [0, 1, 2, 3], // Thứ tự thi
    vdCurrentTurnIndex: 0,       // Đang là lượt của người thứ mấy
    vdCurrentQIndex: null,       // Index câu hỏi đang chọn (0, 1, 2)
    vdIsStarActive: false,       // Có chọn ngôi sao không
    vdTimer: null,
    vdStealerIndex: null,        // Ai đang cướp

    transitionToRound4: function() {
        GameUI.playVideo(GameConfig.paths.vdIntro, function() {
            GameUI.renderVDIntroPlayers();
            GameUI.switchScreen("screen-vd-intro");
        });
    },

    startVeDich: function() {
        this.vdCurrentTurnIndex = 0;
        GameUI.switchScreen("screen-vd-play");
        this.prepareVDTurn();
    },

    // Chuẩn bị lượt cho thí sinh
    prepareVDTurn: function() {
        if (this.vdCurrentTurnIndex >= 4) {
            GameUI.showNotification("Đã kết thúc Vòng Về Đích! Chuẩn bị công bố kết quả chung cuộc.", function () {
                // GỌI HÀM CHUYỂN SANG MÀN TỔNG KẾT
                GameLogic.transitionToSummary();
            });

            return;
        }
        var pIdx = this.vdPlayerOrder[this.vdCurrentTurnIndex];

        GameUI.renderVDQuestionList(pIdx);
        GameUI.highlightSidePlayer(pIdx);

        // Reset giao diện câu hỏi
        $("#vd-question-content").text("Mời chọn câu hỏi...");
    },

    // Chọn câu hỏi 1, 2 hoặc 3
    selectVDQuestion: function(qIdx) {
        this.vdCurrentQIndex = qIdx;
        this.vdIsStarActive = false; // Reset sao
        this.vdStealerIndex = null;

        var pIdx = this.vdPlayerOrder[this.vdCurrentTurnIndex];
        var q = GameConfig.rounds.veDich.questionSets[pIdx][qIdx];

        GameUI.renderVDQuestion(q);
    },

    toggleStar: function() {
        this.vdIsStarActive = !this.vdIsStarActive;
        GameUI.toggleStarUI(this.vdIsStarActive);
    },

    startVDTimer: function() {
        clearInterval(this.vdTimer);
        // Khóa nút chọn sao
        $("#btn-star-hope").prop("disabled", true);

        var timeLeft = GameConfig.rounds.veDich.duration;
        GameUI.updateVDTimer(timeLeft);

        this.vdTimer = setInterval(() => {
            timeLeft--;
            GameUI.updateVDTimer(timeLeft);
            if (timeLeft <= 0) clearInterval(this.vdTimer);
        }, 1000);
    },

    revealVDAnswer: function() {
        clearInterval(this.vdTimer);
        var pIdx = this.vdPlayerOrder[this.vdCurrentTurnIndex];
        var q = GameConfig.rounds.veDich.questionSets[pIdx][this.vdCurrentQIndex];
        GameUI.showVDAnswer(q.answer);
    },

    // --- XỬ LÝ KẾT QUẢ ---

    // Người chính trả lời ĐÚNG
    handleVDMainCorrect: function() {
        var pIdx = this.vdPlayerOrder[this.vdCurrentTurnIndex];
        var q = GameConfig.rounds.veDich.questionSets[pIdx][this.vdCurrentQIndex];
        var points = q.points;

        if (this.vdIsStarActive) points = points * 2; // Nhân đôi nếu có sao

        GameConfig.players[pIdx].score += points;
        GameUI.updateSideScore(pIdx, GameConfig.players[pIdx].score);

        GameUI.showNotification(`Chính xác! (+${points}đ)`);
    },

    // Người chính trả lời SAI
    handleVDMainWrong: function() {
        var pIdx = this.vdPlayerOrder[this.vdCurrentTurnIndex];
        var q = GameConfig.rounds.veDich.questionSets[pIdx][this.vdCurrentQIndex];

        // Nếu có sao hy vọng thì bị trừ điểm
        if (this.vdIsStarActive) {
            GameConfig.players[pIdx].score -= q.points;
            GameUI.updateSideScore(pIdx, GameConfig.players[pIdx].score);
            GameUI.showNotification(`Sai! Có ngôi sao hy vọng nên bị trừ ${q.points}đ`);
        }

        // Mở quyền cướp lượt
        GameUI.showVDStealOptions(pIdx);
    },

    // Chọn người cướp
    selectVDStealer: function(stealerIdx) {
        this.vdStealerIndex = stealerIdx;
        GameUI.showNotification(`Mời ${GameConfig.players[stealerIdx].name} trả lời!`);
        // Có thể reset đồng hồ 5s nếu muốn
    },

    // Xử lý kết quả cướp lượt
    handleVDStealResult: function(isCorrect) {
        if (this.vdStealerIndex === null) return GameUI.showNotification("Chưa chọn người cướp!");

        var mainPIdx = this.vdPlayerOrder[this.vdCurrentTurnIndex];
        var q = GameConfig.rounds.veDich.questionSets[mainPIdx][this.vdCurrentQIndex];
        var points = q.points;

        if (isCorrect) {
            // Cướp đúng: Cộng điểm người cướp, Trừ điểm người chính
            GameConfig.players[this.vdStealerIndex].score += points;
            GameConfig.players[mainPIdx].score -= points; // Luật: Người chính bị trừ điểm câu hỏi

            GameUI.showNotification(`Cướp thành công! (+${points}đ)`);
        } else {
            // Cướp sai: Trừ điểm người cướp (thường là 50% số điểm câu hỏi)
            var penalty = points / 2;
            GameConfig.players[this.vdStealerIndex].score -= penalty;

            GameUI.showNotification(`Cướp sai! (-${penalty}đ)`);
        }

        // Cập nhật điểm cả 2
        GameUI.updateSideScore(this.vdStealerIndex, GameConfig.players[this.vdStealerIndex].score);
        GameUI.updateSideScore(mainPIdx, GameConfig.players[mainPIdx].score);
    },

    // Kết thúc câu hỏi này
    finishVDQuestion: function() {
        clearInterval(this.vdTimer);
        GameUI.disableVDQuestionBtn(this.vdCurrentQIndex);

        // Kiểm tra xem thí sinh này đã trả lời hết 3 câu chưa?
        // Logic đơn giản: Nếu muốn chuyển người phải bấm nút chuyển người thủ công hoặc đếm số câu đã disable
        // Ở đây ta làm đơn giản: Thêm nút "CHUYỂN NGƯỜI TIẾP THEO" vào UI hoặc hỏi

        GameUI.showConfirm("Chuyển sang thí sinh tiếp theo chưa?", function () {
            GameLogic.vdCurrentTurnIndex++;
            GameLogic.prepareVDTurn();
        });

        // Vẫn ở lại màn hình để chọn câu khác
        $("#vd-question-content").text("Mời chọn câu hỏi tiếp theo...");
        $("#vd-answer-area").hide();
        $("#vd-score-controls").find("button").prop("disabled", false); // Reset buttons
    }
});