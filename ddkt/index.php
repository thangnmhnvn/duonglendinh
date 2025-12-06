<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>🐥 Đường Đua Kiến Thức 🏁</title>
    <link rel="stylesheet" href="css/style.css">

    <script>
        const data = {
            "tenlop": "Lớp 6E",
            "students": ["Nguyễn Trường An", "Lê Nhật Anh", "Nguyễn Lê Hoài Anh", "Vũ Thiên Ân", "Nguyễn Băng Băng", "Vũ Quỳnh Chi", "Nguyễn Quỳnh Chi", "Nguyễn Nhân Chinh", "Nguyễn Trọng Đạt", "Nguyễn Duy Đông", "Nguyễn Minh Đức", "Lê Tiến Dũng", "Trần Thị Thu Hà", "Đặng An Khang", "Vũ Tử Khánh", "Bùi Đình Tùng Lâm", "Trần Bảo Lâm", "Nguyễn Khánh Linh", "Nguyễn Vũ Minh", "Nguyễn Tuệ Minh", "Vũ Duy Nam", "Ng. Thị Kim Ngân", "Hoàng Trọng Nghĩa", "Nguyễn Thị Thảo Nguyên", "Nguyễn Tuệ Nhi", "Nguyễn Quỳnh Phương", "Nguyễn Như Quỳnh", "Vương Băng Tâm", "Nguyễn Minh Tùng", "Nguyễn Thảo Vân", "Nguyễn Nhật Vy", "Trần Hà Vy"],
            "questions": [
                { "q": "Từ nào sau đây là từ láy hoàn toàn?", "opts": ["Xanh xao", "Xinh xắn", "Mặt mũi", "Thăm thẳm"], "answer": 3 },
                { "q": "Trong câu 'Em làm bài tập về nhà.', bộ phận nào là chủ ngữ?", "opts": ["Em", "làm bài tập", "về nhà", "bài tập"], "answer": 0 }
            ]
        };
    </script>
    <script src="<?= $data['media_url'] ?>js/jquery-3.7.1.min.js"></script>
    <script src="<?= $data['media_url'] ?>js/createjs.min.js"></script>
    <script src="<?= $data['media_url'] ?>js/ducks.js"></script>
    <script src="<?= $data['media_url'] ?>js/script.js"></script>
</head>
<body>

<div id="controls">
    <div id="raceTimer"></div>
    <div class="buton_dk">
        <button id="setupBtn" class="btn-overlay"><img src="<?= $data['media_url'] ?>button-bg.png" alt=""><span>Chơi tiếp</span></button>
        <button id="startBtn" class="btn-overlay" disabled><img src="<?= $data['media_url'] ?>button-bg.png" alt=""><span>Bắt đầu</span></button>
    </div>
    <div class="menu">
        <h2 id="lopname"></h2>
        <button id="menuBtn" class="menu-btn">🏅Menu</button>
    </div>
    <div id="winnerMenu" class="winner-menu show">
        <div class="menu-container">
            <div class="wrapper">
                <div class="setup">
                    <div class="col">
                        <h3>🎯 Cấu hình</h3>
                        <label>
                            <input type="checkbox" id="excludeWinners" checked> Loại người chiến thắng khỏi các vòng tiếp theo
                        </label>
                        <br>
                        <label>
                            ⏱️ Thời gian đua:
                            <input type="number" id="thoigiandua" value="10" min="5" max="30" style="width:60px;"> giây
                        </label>
                        <label style="display: none">
                            <input type="checkbox" id="hoatanh"> Hoạt ảnh cao
                        </label>
                    </div>

                    <div class="col">
                        <h3>🧠 Câu hỏi sau khi thắng</h3>
                        <label><input type="checkbox" id="hstraloicauhoi">Cho học sinh trả lời</label>
                        <label><input type="number" id="numQ" value="3" min="1" max="20" style="width:50px"> câu hỏi</label> <br>
                        <label><input type="checkbox" id="chtgtl"> Thời gian trả lời câu hỏi</label>
                        <label id="numbertgtlch" ><input type="number" id="thoigiantraloi" value="15" min="6" max="30" style="width:50px"></label><br>
                        <label><input type="checkbox" id="chkLoai"> Loại học sinh nếu trả lời sai</label>
                        <label id="dangcauhoi" style="display: none"></label>
                    </div>
                    <div class="col">
                        <h3>🎯 Chọn loại cuộc đua:</h3>

                        <div class="option">
                            <label><input type="radio" name="race" value="duck" checked> 🦆 Đua vịt</label>
                        </div>
                        <div class="option">
                            <label><input type="radio" name="race" value="boat"> 🚣‍♂️ Đua thuyền</label>
                        </div>
                        <div class="option">
                            <label><input type="radio" name="race" value="bird" > 🐧 Đua chim cánh cụt</label>
                        </div>
                        <div class="option">
                            <label><input type="radio" name="race" value="animal" > 🦁 Đua động vật</label>
                        </div>
                    </div>
                    <h3>Nhạc nền</h3>
                    <div id="musicControl" style="display: flex; align-items: center; gap: 10px; padding: 6px; border-radius: 10px; width: fit-content;">
                        <button id="toggleMusic">🔊 Bật nhạc</button>
                        <label style="display: flex; align-items: center; gap: 5px;">
                            Âm lượng:
                            <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="0.5" style="width: 200px;">
                        </label>
                    </div>
                </div>

                <div class="danhsach">
                    <h3>🏆 Học sinh đã chiến thắng</h3>
                    <div id="winnerList"></div>
                    <div id="soluonghs"></div>


                </div>

                <div class="btn-actions">
                    <button id="resetGame" class="btn-overlay"><img src="<?= $data['media_url'] ?>button_tl.png" alt=""><span>Reset Game</span></button>
                    <button id="closeMenu" class="btn-overlay"><img src="<?= $data['media_url'] ?>button_tl.png" alt=""><span>OK</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="pond-container">
    <div id="vachxuatphat" class="xuatphat"></div>
    <div id="bank"></div>
    <div id="bo" class="bo"></div>
    <div id="startLine" class="start-line"></div>
    <div id="finishLine" class="finish-line"></div>
    <div id="pond"></div>
    <div id="countdown"></div>
    <div id="vachvedich" class="vedich hidden"></div>
</div>

<div class="traloicauhoi">
    <button id="traloi" class="btn-overlay"><img src="<?= $data['media_url'] ?>button_tl.png" alt=""><span>Trả lời câu hỏi</span></button>
</div>

<div id="result"></div>



</body>
</html>