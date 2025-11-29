var GameLogic = {
    // --- CẤU HÌNH HỆ THỐNG ---
    saveKey: 'olympia_save_data_v1', // Tên khóa lưu dữ liệu

    // Biến chung
    currentPlayerIndex: 0,
    timer: null,
    timeLeft: 0,

    // Khởi tạo
    init: function() {
        console.log("Khởi tạo game...");

        // Thử tải game đã lưu trước đó
        if (this.loadGame()) {
            console.log("Đã khôi phục trạng thái game cũ.");
        } else {
            // Nếu không có dữ liệu cũ -> Chạy mới từ đầu
            GameUI.renderPlayers();
            GameUI.switchScreen("screen-welcome");
        }
    },

    // --- HÀM LƯU GAME (GỌI KHI CÓ THAY ĐỔI) ---
    saveGame: function() {
        // Lấy ID màn hình đang hiển thị
        var currentScreenId = $(".game-screen:visible").attr("id") || "screen-welcome";

        var dataToSave = {
            // 1. Dữ liệu cấu hình (Điểm số, Trạng thái câu hỏi)
            players: GameConfig.players,
            vcQuestions: GameConfig.rounds.vuotChuongNgaiVat.questions, // Lưu trạng thái ma trận

            // 2. Dữ liệu Logic (Lượt chơi hiện tại)
            currentScreen: currentScreenId,

            // Vòng 1
            currentPlayerIndex: this.currentPlayerIndex,

            // Vòng 2
            vcCurrentTurnIndex: this.vcCurrentTurnIndex || 0,

            // Vòng 3
            ttCurrentQIndex: this.ttCurrentQIndex || 0,

            // Vòng 4
            vdCurrentTurnIndex: this.vdCurrentTurnIndex || 0
        };

        // Lưu vào trình duyệt
        localStorage.setItem(this.saveKey, JSON.stringify(dataToSave));
        console.log("Game Saved at screen:", currentScreenId);
    },

    // --- HÀM TẢI GAME (GỌI KHI F5) ---
    loadGame: function() {
        var json = localStorage.getItem(this.saveKey);
        if (!json) return false; // Không có dữ liệu lưu

        try {
            var data = JSON.parse(json);

            // 1. Khôi phục dữ liệu Config
            GameConfig.players = data.players;
            if(data.vcQuestions) GameConfig.rounds.vuotChuongNgaiVat.questions = data.vcQuestions;

            // 2. Khôi phục biến Logic
            this.currentPlayerIndex = data.currentPlayerIndex;
            this.vcCurrentTurnIndex = data.vcCurrentTurnIndex;
            this.ttCurrentQIndex = data.ttCurrentQIndex;
            this.vdCurrentTurnIndex = data.vdCurrentTurnIndex;

            // 3. Vẽ lại giao diện từ dữ liệu đã khôi phục
            GameUI.renderPlayers();          // Vòng 1
            GameUI.renderVCIntroPlayers();   // Vòng 2 Intro
            GameUI.renderTTIntroPlayers();   // Vòng 3 Intro
            GameUI.renderVDIntroPlayers();   // Vòng 4 Intro

            // Nếu đang ở màn hình chơi Vòng 2 -> Vẽ lại ma trận & Sidebar
            if (data.currentScreen === 'screen-vc-play') {
                GameUI.renderMatrix();
                GameUI.renderVCSidebar();
                if (this.vcTurnOrder && this.vcTurnOrder[this.vcCurrentTurnIndex] !== undefined) {
                    GameUI.highlightSidePlayer(this.vcTurnOrder[this.vcCurrentTurnIndex]);
                }
            }

            // Nếu đang ở màn hình chơi Vòng 3 -> Vẽ lại câu hỏi hiện tại
            if (data.currentScreen === 'screen-tt-play') {
                var q = GameConfig.rounds.tangToc.questions[this.ttCurrentQIndex];
                if(q) GameUI.renderTTQuestion(q);
                GameUI.renderTTScoringButtons();
            }

            // Nếu đang ở màn hình chơi Vòng 4 -> Vẽ lại danh sách câu hỏi
            if (data.currentScreen === 'screen-vd-play') {
                if (this.vdPlayerOrder) {
                    var pIdx = this.vdPlayerOrder[this.vdCurrentTurnIndex];
                    GameUI.renderVDQuestionList(pIdx);
                    GameUI.highlightSidePlayer(pIdx);
                    $("#vd-question-content").text("Mời chọn câu hỏi (Khôi phục)...");
                }
            }

            // 4. Chuyển đến màn hình cũ
            if (data.currentScreen) {
                // Lưu ý: Gọi switchScreen ở đây sẽ kích hoạt saveGame lần nữa, không sao cả.
                GameUI.switchScreen(data.currentScreen);
            }

            return true;
        } catch (e) {
            console.error("Lỗi khi load game:", e);
            return false;
        }
    },

    // --- HÀM RESET GAME (XÓA DATA & RELOAD) ---
    resetGame: function() {
        GameUI.showConfirm("Bạn có chắc chắn muốn XÓA TOÀN BỘ dữ liệu và chơi lại từ đầu?", function () {
            localStorage.removeItem(GameLogic.saveKey);
            location.reload();
        });
    },

    startGame: function() {
        GameUI.playVideo(GameConfig.paths.introVideo, function() {
            GameUI.stopIntroVideo();
            GameUI.switchScreen("screen-players");
        });
    },

    onIntroFinish: function() {
        GameUI.stopIntroVideo();
        GameUI.switchScreen("screen-players");
    }
};


// js/game_logic.js

Object.assign(GameLogic, {
    // ... (Giữ nguyên các hàm khác) ...

    // --- LOGIC KẾT THÚC GAME ---
    transitionToSummary: function() {
        console.log("Kết thúc chương trình. Chuyển sang màn hình tổng kết.");

        var sortedPlayers = [...GameConfig.players].sort((a, b) => b.score - a.score);
        var winner = sortedPlayers[0];


        // 3. Hiển thị màn hình tổng kết
        GameUI.renderSummary(winner, sortedPlayers);
    }
});