$(document).ready(function() {
    // Khởi tạo game
    GameLogic.init();

    // Sự kiện nút bắt đầu
    $("#btn-start-kd").click(function() {
        GameLogic.startKhoiDong();
    });

    // Sự kiện hiện đáp án
    $("#btn-show-ans").click(function() {
        GameLogic.showAnswer();
    });

    // Sự kiện câu tiếp theo
    $("#btn-next").click(function() {
        GameLogic.nextQuestion();
    });
});