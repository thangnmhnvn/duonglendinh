var GameConfig = {
    paths: {
        introVideo: "media/intro.mp4",
        khoiDongIntro: "media/media4.mp4"
    },

    players: [
        { id: 1, name: "Nguyễn Văn A", school: "THPT Chuyên Hà Nội", avatar: "images/player1.jpg", score: 0 },
        { id: 2, name: "Trần Thị B", school: "THPT Lê Quý Đôn", avatar: "images/player2.jpg", score: 0 },
        { id: 3, name: "Lê Văn C", school: "THPT Năng Khiếu", avatar: "images/player3.jpg", score: 0 },
        { id: 4, name: "Phạm Thị D", school: "THPT Quốc Học", avatar: "images/player4.jpg", score: 0 }
    ],

    rounds: {
        khoiDong: {
            duration: 30,        // 30 giây
            maxQuestions: 6,     // 6 câu hỏi
            points: 10,          // 10 điểm/câu
            // Dữ liệu mẫu 6 câu hỏi (Sau này bạn cần khoảng 24 câu cho 4 người)
            questionsBank: [
                { id: 1, content: "1 + 1 = ?", answer: "2", type: "MC" }, // MC: Multiple Choice
                { id: 2, content: "Thủ đô VN?", answer: "Hà Nội", type: "MC" },
                { id: 3, content: "Mặt trời mọc hướng nào?", answer: "Đông", type: "MC" },
                { id: 4, content: "H2O là gì?", answer: "Nước", type: "MC" },
                { id: 5, content: "5 x 5 = ?", answer: "25", type: "MC" },
                { id: 6, content: "Đỉnh Everest nằm ở đâu?", answer: "Nepal", type: "MC" },
                { id: 7, content: "Con vật nào kêu gâu gâu?", answer: "Chó", type: "MC" }
            ]
        }
    }
};