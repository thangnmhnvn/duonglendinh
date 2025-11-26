// js/game_init.js

$(document).ready(function() {
    // 1. Khởi tạo game
    GameLogic.init();

    // --- CÁC SỰ KIỆN CŨ (Giữ nguyên) ---
    $("#btn-start-game").click(function() { GameLogic.startGame(); });
    $("#btn-skip-video").click(function() { $("#intro-video-player").trigger("ended"); });
    $("#btn-go-khoidong").click(function() { GameLogic.startKhoiDong(); });
    $("#btn-start-turn").click(function() {
        GameLogic.startQuestions();
        GameUI.switchScreen("screen-gameplay");

        GameUI.playBgMusic(GameConfig.paths.audio.startQuestion, () => {
            GameUI.playBgMusic(GameConfig.paths.audio.bgRound, () => {});
        });
    });

    // --- CÁC SỰ KIỆN THANH NAV (ĐÃ SỬA ĐỔI) ---

    // Nút Intro: Về màn hình chào mừng
    $("#nav-intro").click(function() {
        // Dừng mọi video & đóng modal
        $("video").each(function() { this.pause(); });
        $(".modal").modal('hide');

        GameUI.switchScreen("screen-welcome");
    });

    // Nút Khởi Động: Chỉ về màn hình 4 thí sinh & Luật chơi (Chưa bắt đầu thi)
    $("#nav-khoidong").click(function() {
        $(".modal").modal('hide');
        $("video").each(function() { this.pause(); });

        // Vẽ lại danh sách thí sinh để đảm bảo điểm số cập nhật mới nhất
        GameUI.renderPlayers();

        // Chuyển sang màn hình chờ của Vòng 1
        GameUI.switchScreen("screen-players");
    });

    // Nút VCNV: Chỉ về màn hình Intro Vòng 2 (Chưa vào ma trận)
    $("#nav-vcnv").click(function() {
        $(".modal").modal('hide');
        $("video").each(function() { this.pause(); });

        // Reset lại lượt chơi vòng 2 (đề phòng đang chơi dở)
        GameLogic.vcCurrentTurnIndex = 0;

        // Vẽ lại danh sách thí sinh vòng 2
        GameUI.renderVCIntroPlayers();

        // Chuyển sang màn hình chờ của Vòng 2
        GameUI.switchScreen("screen-vc-intro");
    });

    $("#nav-tangtoc").click(function() {
        // 1. Dừng mọi thứ đang chạy
        $(".modal").modal('hide');
        $("video").each(function() { this.pause(); });

        // 2. Reset dữ liệu vòng Tăng Tốc (nếu cần)
        GameLogic.ttCurrentQIndex = 0;

        // 3. Vẽ lại danh sách thí sinh (để cập nhật điểm mới nhất từ vòng trước)
        GameUI.renderTTIntroPlayers();

        // 4. Chuyển sang màn hình Intro Tăng Tốc
        GameUI.switchScreen("screen-tt-intro");
    });

    $("#nav-vedich").click(function() {
        $(".modal").modal('hide');
        $("video").each(function() { this.pause(); });

        GameUI.renderVDIntroPlayers();
        GameUI.switchScreen("screen-vd-intro");
    });

    $(".game-reset").click(function() {
        GameLogic.resetGame();
    });
});