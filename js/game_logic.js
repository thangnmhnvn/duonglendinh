var GameLogic = {
    currentPlayerIndex: 0,
    currentQueue: [], // Hàng đợi câu hỏi cho thí sinh hiện tại
    timer: null,
    timeLeft: 0,

    init: function() {
        GameUI.renderPlayers();
    },

    startGame: function() { GameUI.playIntroVideo(); },
    onIntroFinish: function() { GameUI.stopIntroVideo(); },

    startKhoiDong: function() {
        GameUI.playVideo(GameConfig.paths.khoiDongIntro, function() {
            GameLogic.preparePlayerTurn(0);
        });
    },

    preparePlayerTurn: function(playerIndex) {
        this.currentPlayerIndex = playerIndex;

        // 1. Lấy 6 câu hỏi từ ngân hàng câu hỏi (Trong thực tế cần lấy câu chưa ai trả lời)
        // Đây là ví dụ lấy 6 câu đầu tiên
        var allQuestions = GameConfig.rounds.khoiDong.questionsBank;
        this.currentQueue = allQuestions.slice(0, 6);

        GameUI.showPlayerReady(playerIndex);
    },

    startQuestions: function() {
        // Chuyển sang màn hình chơi game (chúng ta sẽ xây dựng UI này ở bước sau)
        // GameUI.switchScreen("screen-gameplay-kd");

        this.timeLeft = GameConfig.rounds.khoiDong.duration;
        this.nextQuestion();
        this.startTimer();
    },

    // Hàm lấy câu hỏi tiếp theo trong hàng đợi
    nextQuestion: function() {
        if (this.currentQueue.length === 0) {
            this.finishTurn(); // Hết câu hỏi
            return;
        }

        // Lấy câu hỏi đầu tiên ra khỏi hàng đợi
        var currentQ = this.currentQueue[0];

        // Gọi UI để hiện câu hỏi này (Bước sau sẽ làm)
        console.log("Hiện câu hỏi: " + currentQ.content);
        // GameUI.renderQuestion(currentQ);
    },

    // Xử lý khi người chơi chọn ĐÚNG
    handleCorrect: function() {
        // Cộng điểm
        GameConfig.players[this.currentPlayerIndex].score += GameConfig.rounds.khoiDong.points;
        GameUI.renderPlayers(); // Cập nhật điểm trên màn hình chờ

        // Xóa câu hỏi vừa trả lời xong khỏi hàng đợi (vĩnh viễn)
        this.currentQueue.shift();

        // Chuyển câu tiếp
        this.nextQuestion();
    },

    // Xử lý khi người chơi chọn SAI
    handleWrong: function() {
        // Không trừ điểm, xóa câu hỏi khỏi hàng đợi
        this.currentQueue.shift();
        this.nextQuestion();
    },

    // Xử lý khi người chơi BỎ QUA
    handleSkip: function() {
        // Lấy câu hỏi đầu tiên ra
        var skippedQ = this.currentQueue.shift();

        // Đẩy xuống cuối hàng đợi
        this.currentQueue.push(skippedQ);

        console.log("Đã bỏ qua, câu hỏi này sẽ quay lại sau.");
        this.nextQuestion();
    },

    startTimer: function() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeLeft--;
            console.log("Thời gian: " + this.timeLeft);
            // GameUI.updateTimer(this.timeLeft);

            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.finishTurn();
            }
        }, 1000);
    },

    finishTurn: function() {
        alert("Hết giờ hoặc hết câu hỏi!");
        // Logic chuyển sang người tiếp theo hoặc kết thúc vòng
    }
};