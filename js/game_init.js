$(document).ready(function() {
    // 1. Khởi tạo logic game
    GameLogic.init();

    // 2. Sự kiện: Bấm nút BẮT ĐẦU ở màn hình Welcome
    $("#btn-start-game").click(function() {
        GameLogic.startGame();
    });

    // 3. Sự kiện: Khi Video Intro chạy hết (ended event)
    $("#intro-video-player").on("ended", function() {
        console.log("Video intro finished");
        GameLogic.onIntroFinish();
    });

    // Nút chuyển sang Khởi Động (Ở màn hình giới thiệu 4 thí sinh)
    $("#btn-go-khoidong").click(function() {
        GameLogic.startKhoiDong(); // Chạy intro Khởi Động -> Hiện thí sinh 1
    });

    // Nút "Bỏ qua video" (Dùng chung cho mọi video)
    $("#btn-skip-video").click(function() {
        // Trigger luôn sự kiện ended để chạy callback
        $("#intro-video-player").trigger("ended");
    });

    // Nút "BẮT ĐẦU TÍNH GIỜ" (Màn hình Player Ready)
    $("#btn-start-turn").click(function() {
        GameLogic.startQuestions();
    });
});