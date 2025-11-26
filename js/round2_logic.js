Object.assign(GameLogic, {
    vcTurnOrder: [0, 1, 2, 3, 0, 1, 2, 3],
    vcCurrentTurnIndex: 0,
    currentVCQuestionIndex: null,
    vcStealerIndex: null,
    vcTimer: null,      // Biến lưu interval
    vcTimeLeft: 0,

    transitionToRound2: function() {
        GameUI.playVideo(GameConfig.paths.vcIntro, function() {
            GameUI.stopIntroVideo();
            GameUI.renderVCIntroPlayers();
            GameUI.switchScreen("screen-vc-intro");
        });
    },

    startVuotChuongNgaiVat: function() {
        this.vcCurrentTurnIndex = 0;
        // XÓA DÒNG NÀY: GameUI.renderVCSidebar();
        GameUI.renderMatrix();
        GameUI.switchScreen("screen-vc-play");
        this.updateVCActivePlayer();
    },

    updateVCActivePlayer: function() {
        if (this.vcCurrentTurnIndex >= this.vcTurnOrder.length) return alert("Vòng thi đã kết thúc!");
        var idx = this.vcTurnOrder[this.vcCurrentTurnIndex];

        // XÓA DÒNG NÀY: GameUI.highlightVCPlayer(idx);

        // Chỉ giữ lại highlight sidebar bên phải (Nav dọc)
        GameUI.highlightSidePlayer(idx);
    },

    openVCQuestion: function(idx) {
        if (this.vcCurrentTurnIndex >= this.vcTurnOrder.length) return;
        this.currentVCQuestionIndex = idx;
        this.vcStealerIndex = null;
        var pName = GameConfig.players[this.vcTurnOrder[this.vcCurrentTurnIndex]].name;
        GameUI.showVCModal(GameConfig.rounds.vuotChuongNgaiVat.questions[idx], pName);

        // --- BẮT ĐẦU ĐẾM GIỜ (NGƯỜI CHÍNH) ---
        this.startVCTimer(15, () => {
            // Hết giờ người chính -> Xem như trả lời sai
            alert("Hết giờ!");
            this.handleMainTimeOut();
        });
    },

    // Hàm xử lý đếm ngược (MỚI)
    startVCTimer: function(seconds, onTimeout) {
        clearInterval(this.vcTimer);
        this.vcTimeLeft = seconds;
        GameUI.updateVCTimer(this.vcTimeLeft);

        this.vcTimer = setInterval(() => {
            this.vcTimeLeft--;
            GameUI.updateVCTimer(this.vcTimeLeft);

            if (this.vcTimeLeft <= 0) {
                clearInterval(this.vcTimer);
                if (onTimeout) onTimeout();
            }
        }, 1000);
    },

    stopVCTimer: function() {
        clearInterval(this.vcTimer);
        GameUI.hideVCTimer();
    },

    // Khi người chính hết giờ (MỚI)
    handleMainTimeOut: function() {
        var playerIdx = this.vcTurnOrder[this.vcCurrentTurnIndex];
        // Coi như sai -> Hiện bảng cướp
        GameUI.showVCAnswerFeedback(-1, false, false); // -1 để không highlight nút nào
        this.prepareStealPhase(playerIdx);
    },

    // Chuẩn bị giai đoạn cướp (Tách ra để tái sử dụng)
    prepareStealPhase: function(mainPlayerIdx) {
        GameUI.showStealOptions(mainPlayerIdx);

        // --- ĐẾM 15 GIÂY CHO 3 NGƯỜI CÒN LẠI ---
        this.startVCTimer(15, () => {
            alert("Hết thời gian cướp lượt!");
            this.closeVCQuestion(); // Không ai cướp -> Đóng luôn
        });
    },

    // ... (Các hàm checkVCAnswer, handleVCSteal, closeVCQuestion, onVCModalClosed giữ nguyên) ...
    // Bạn chỉ cần copy lại phần logic bên dưới từ file cũ là được, không thay đổi gì.
    checkVCAnswer: function(idx) {
        // DỪNG ĐỒNG HỒ NGAY KHI BẤM
        this.stopVCTimer();

        var q = GameConfig.rounds.vuotChuongNgaiVat.questions[this.currentVCQuestionIndex];
        var isCorrect = (q.options[idx] === q.answer);
        var playerIdx = (this.vcStealerIndex === null) ? this.vcTurnOrder[this.vcCurrentTurnIndex] : this.vcStealerIndex;
        var pts = 0;

        if (this.vcStealerIndex === null) { // Người chính
            if (isCorrect) {
                pts = GameConfig.rounds.vuotChuongNgaiVat.pointsCorrect;
                q.isOpened = true;
                GameUI.showVCAnswerFeedback(idx, true, false);
            } else {
                GameUI.showVCAnswerFeedback(idx, false, false);
                // Sai -> Chuyển sang giai đoạn cướp
                this.prepareStealPhase(playerIdx);
                return;
            }
        } else { // Người cướp
            if (isCorrect) {
                pts = GameConfig.rounds.vuotChuongNgaiVat.stealCorrect;
                GameUI.showVCAnswerFeedback(idx, true, true);
            } else {
                pts = GameConfig.rounds.vuotChuongNgaiVat.stealWrong;
                GameUI.showVCAnswerFeedback(idx, false, true);
            }
            q.isOpened = true;
        }

        if (pts !== 0) {
            GameConfig.players[playerIdx].score += pts;
            GameUI.updateSideScore(playerIdx, GameConfig.players[playerIdx].score);
        }
    },

    handleVCSteal: function(idx) {
        // DỪNG ĐỒNG HỒ CHỜ (Vì đã có người bấm)
        // Hoặc bạn có thể để đồng hồ chạy tiếp cho áp lực?
        // Thường là bấm giành quyền thì dừng đồng hồ chọn, chuyển sang trả lời ngay.
        this.stopVCTimer();

        this.vcStealerIndex = idx;
        $("#vc-current-player-name").text(GameConfig.players[idx].name + " (ĐANG CƯỚP LƯỢT)").removeClass("text-warning").addClass("text-danger");
        $("#vc-steal-controls").hide();
        $("#vc-answer-options").css("opacity", "1"); // Sáng lại nút bấm
    },

    closeVCQuestion: function() {
        this.stopVCTimer(); // Đảm bảo dừng mọi đồng hồ
        GameConfig.rounds.vuotChuongNgaiVat.questions[this.currentVCQuestionIndex].isOpened = true;
        GameUI.closeVCModal();
    },

    onVCModalClosed: function() {
        this.vcCurrentTurnIndex++;
        this.updateVCActivePlayer();
    }
});