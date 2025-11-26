var GameConfig = {
    // Đường dẫn video và ảnh
    paths: {
        introVideo: "media/intro.mp4",
        khoiDongIntro: "media/media4.mp4",
        vcIntro: "media/media15.mp4", // Intro vòng 2
        ttIntro: "media/media21.mp4",  // <-- THÊM MỚI: Intro vòng 3 (Bạn nhớ đổi tên file cho đúng)
        vdIntro: "media/media17.mp4", // <-- THÊM MỚI: Intro vòng 4
        endGameVideo: "media/media4.mp4", // <-- THÊM MỚI (Nhạc chiến thắng)
        audio: {
            bgAudio1: "media/media2.mp3",
            bgAudio2: "media/media3.mp3",
            bgRound: "media/media13.mp3",
            c5giay: "media/media34.mp3",
            startRound: "media/media6.mp3",
            finishRound: "media/media9.mp3",
            startQuestion: "media/media7.mp3",
            correct: "media/audio4.wav",
            inCorrect: "media/audio3.wav",
        }
    },

    // Danh sách 4 thí sinh
    players: [
        { id: 1, name: "Thí sinh A", school: "THPT Chuyên Hà Nội", avatar: "images/player1.jpg", score: 0 },
        { id: 2, name: "Thí sinh B", school: "THPT Lê Quý Đôn", avatar: "images/player2.jpg", score: 0 },
        { id: 3, name: "Thí sinh C", school: "THPT Năng Khiếu", avatar: "images/player3.jpg", score: 0 },
        { id: 4, name: "Thí sinh D", school: "THPT Quốc Học", avatar: "images/player4.jpg", score: 0 }
    ],

    // Cấu hình các vòng thi
    rounds: {
        khoiDong: {
            duration: 100,        // 60 giây
            points: 10,          // 10 điểm/câu

            // BỘ CÂU HỎI TRẮC NGHIỆM ĐẦY ĐỦ CHO 4 THÍ SINH
            questionSets: {
                // --- THÍ SINH 1 (A) ---
                0: [
                    { content: "1 + 1 = ?", answer: "2", options: ["1", "2", "3", "4"] },
                    { content: "Thủ đô của Việt Nam?", answer: "Hà Nội", options: ["TP.HCM", "Đà Nẵng", "Hà Nội", "Cần Thơ"] },
                    { content: "Mặt trời mọc hướng nào?", answer: "Đông", options: ["Đông", "Tây", "Nam", "Bắc"] },
                    { content: "H2O là gì?", answer: "Nước", options: ["Nước", "Khí", "Lửa", "Đất"] },
                    { content: "5 x 5 = ?", answer: "25", options: ["20", "25", "30", "35"] },
                    { content: "Con gì kêu gâu gâu?", answer: "Chó", options: ["Mèo", "Gà", "Chó", "Lợn"] }
                ],
                // --- THÍ SINH 2 (B) ---
                1: [
                    { content: "2 + 2 = ?", answer: "4", options: ["2", "4", "6", "8"] },
                    { content: "Thủ đô của Mỹ?", answer: "Washington D.C", options: ["New York", "Washington D.C", "California", "Texas"] },
                    { content: "Mặt trời lặn hướng nào?", answer: "Tây", options: ["Đông", "Tây", "Nam", "Bắc"] },
                    { content: "CO2 là gì?", answer: "Khí Carbonic", options: ["Oxy", "Nitơ", "Khí Carbonic", "Hidro"] },
                    { content: "6 x 6 = ?", answer: "36", options: ["30", "36", "42", "48"] },
                    { content: "Con gì kêu meo meo?", answer: "Mèo", options: ["Mèo", "Gà", "Chó", "Lợn"] }
                ],
                // --- THÍ SINH 3 (C) - Đã thêm dữ liệu ---
                2: [
                    { content: "10 - 5 = ?", answer: "5", options: ["2", "5", "8", "0"] },
                    { content: "Thủ đô của Pháp?", answer: "Paris", options: ["London", "Berlin", "Paris", "Rome"] },
                    { content: "Sông nào dài nhất VN?", answer: "Sông Đồng Nai", options: ["Sông Hồng", "Sông Cửu Long", "Sông Đồng Nai", "Sông Đà"] },
                    { content: "NaCl là gì?", answer: "Muối ăn", options: ["Đường", "Muối ăn", "Bột ngọt", "Giấm"] },
                    { content: "7 x 7 = ?", answer: "49", options: ["47", "49", "51", "53"] },
                    { content: "Con gì kêu cục tác?", answer: "Gà mái", options: ["Gà trống", "Gà mái", "Vịt", "Ngan"] }
                ],
                // --- THÍ SINH 4 (D) - Đã thêm dữ liệu ---
                3: [
                    { content: "100 / 10 = ?", answer: "10", options: ["1", "10", "100", "0.1"] },
                    { content: "Thủ đô của Nhật Bản?", answer: "Tokyo", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"] },
                    { content: "Đỉnh núi cao nhất VN?", answer: "Fansipan", options: ["Fansipan", "Pu Si Lung", "Bạch Mộc", "Tây Côn Lĩnh"] },
                    { content: "O2 là gì?", answer: "Oxy", options: ["Oxy", "Nitơ", "Clo", "Heli"] },
                    { content: "9 x 9 = ?", answer: "81", options: ["81", "72", "90", "99"] },
                    { content: "Con gì kêu ụt ịt?", answer: "Heo", options: ["Heo", "Bò", "Dê", "Cừu"] }
                ]
            }
        },

        // --- CẤU HÌNH VÒNG 2: VƯỢT CHƯỚNG NGẠI VẬT ---
        vuotChuongNgaiVat: {
            pointsCorrect: 20,
            pointsWrong: 0,
            stealCorrect: 20,
            stealWrong: -10,

            // Tự động sinh 60 câu hỏi TRẮC NGHIỆM mẫu
            questions: Array.from({ length: 60 }, (_, i) => {
                // Tạo logic fake đáp án để test
                var num1 = i + 1;
                var num2 = 10;
                var realAns = num1 + num2;

                return {
                    id: i + 1,
                    content: `Câu hỏi ${i + 1}: ${num1} + ${num2} = ?`,
                    answer: `${realAns}`,
                    // Tạo 4 đáp án, trong đó có 1 đáp án đúng
                    options: [
                        `${realAns}`,
                        `${realAns + 1}`,
                        `${realAns - 1}`,
                        `${realAns + 10}`
                    ].sort(() => Math.random() - 0.5), // Xáo trộn ngẫu nhiên
                    isOpened: false
                };
            })
        },

        // --- CẬP NHẬT VÒNG 3: TĂNG TỐC ---
        tangToc: {
            duration: 30, // 30 giây suy nghĩ
            points: 30,   // Trả lời đúng được 30 điểm

            // 6 CÂU HỎI TRẮC NGHIỆM
            questions: [
                {
                    id: 1,
                    content: "Câu 1: Hình nào còn thiếu trong quy luật sau?",
                    answer: "A",
                    options: ["Hình A", "Hình B", "Hình C", "Hình D"]
                },
                {
                    id: 2,
                    content: "Câu 2: Sắp xếp các chữ cái thành từ có nghĩa: H, C, N, I, M, I, O.",
                    answer: "Minh Chí",
                    options: ["Hồ Chí Minh", "Chí Minh", "Minh Trí", "Chính Minh"]
                },
                {
                    id: 3,
                    content: "Câu 3: Ai là người đầu tiên bay vào vũ trụ?",
                    answer: "Gagarin",
                    options: ["Armstrong", "Gagarin", "Phạm Tuân", "Buzz Aldrin"]
                },
                {
                    id: 4,
                    content: "Câu 4: Công thức hóa học của Axit Sunfuric?",
                    answer: "H2SO4",
                    options: ["HCl", "H2SO4", "HNO3", "NaOH"]
                },
                {
                    id: 5,
                    content: "Câu 5: Biển báo nào cấm rẽ trái?",
                    answer: "Biển 1",
                    options: ["Biển 1", "Biển 2", "Biển 3", "Cả 3 biển"]
                },
                {
                    id: 6,
                    content: "Câu 6: Đội tuyển nào vô địch World Cup 2022?",
                    answer: "Argentina",
                    options: ["Pháp", "Brazil", "Argentina", "Đức"]
                }
            ]
        },
        // --- CẤU HÌNH VÒNG 4: VỀ ĐÍCH ---
        veDich: {
            duration: 20, // Thời gian suy nghĩ trung bình (có thể chỉnh theo câu)

            // Bộ câu hỏi cho 4 thí sinh (Mỗi người 3 câu)
            questionSets: {
                0: [ // Thí sinh 1
                    { id: 1, points: 20, content: "VD-P1 Câu 1 (20đ): ...", answer: "A" },
                    { id: 2, points: 20, content: "VD-P1 Câu 2 (20đ): ...", answer: "B" },
                    { id: 3, points: 30, content: "VD-P1 Câu 3 (30đ): ...", answer: "C" }
                ],
                1: [ // Thí sinh 2
                    { id: 1, points: 20, content: "VD-P2 Câu 1 (20đ): ...", answer: "A" },
                    { id: 2, points: 20, content: "VD-P2 Câu 2 (20đ): ...", answer: "B" },
                    { id: 3, points: 30, content: "VD-P2 Câu 3 (30đ): ...", answer: "C" }
                ],
                // Copy tương tự cho thí sinh 2 và 3...
                2: [
                    { id: 1, points: 20, content: "VD-P3 Câu 1 (20đ): ...", answer: "A" },
                    { id: 2, points: 20, content: "VD-P3 Câu 2 (20đ): ...", answer: "B" },
                    { id: 3, points: 30, content: "VD-P3 Câu 3 (30đ): ...", answer: "C" }
                ],
                3: [
                    { id: 1, points: 20, content: "VD-P4 Câu 1 (20đ): ...", answer: "A" },
                    { id: 2, points: 20, content: "VD-P4 Câu 2 (20đ): ...", answer: "B" },
                    { id: 3, points: 30, content: "VD-P4 Câu 3 (30đ): ...", answer: "C" }
                ]
            }
        }
    }
};