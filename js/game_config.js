var GameConfig = {
    players: [
        { name: "Thí sinh 1", score: 0 },
        { name: "Thí sinh 2", score: 0 },
        { name: "Thí sinh 3", score: 0 },
        { name: "Thí sinh 4", score: 0 }
    ],
    rounds: {
        khoiDong: {
            timePerQuestion: 10, // giây
            questions: [
                { content: "1 + 1 bằng mấy?", answer: "2" },
                { content: "Thủ đô của Việt Nam là gì?", answer: "Hà Nội" },
                { content: "Nước nào đông dân nhất thế giới (2023)?", answer: "Ấn Độ" }
                // Bạn copy thêm câu hỏi từ PPT vào đây
            ]
        }
        // Các vòng khác: vuotChuongNgaiVat, tangToc, veDich...
    }
};