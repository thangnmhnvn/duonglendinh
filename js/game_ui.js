var GameUI = {
    // Hàm chuyển đổi màn hình
    switchScreen: function(screenId) {
        $(".game-screen").hide(); // Ẩn tất cả
        $("#" + screenId).fadeIn(); // Hiện màn hình cần thiết
    },

    // Hàm điều khiển video
    playIntroVideo: function() {
        var video = document.getElementById("intro-video-player");
        this.switchScreen("screen-video");
        video.currentTime = 0;
        video.play().catch(e => console.log("Cần tương tác để phát video:", e));
    },

    stopIntroVideo: function() {
        var video = document.getElementById("intro-video-player");
        video.pause();
        this.switchScreen("screen-players"); // Chuyển sang màn giới thiệu
    },

    // Hàm hiển thị danh sách thí sinh
    renderPlayers: function() {
        var html = "";
        GameConfig.players.forEach(function(player, index) {
            // Nếu chưa có ảnh avatar thật thì dùng ảnh placeholder online
            var imgSrc = player.avatar;
            // Kiểm tra nếu không có file ảnh thì dùng ảnh tạm
            // imgSrc = "https://placehold.co/150x150?text=" + (index + 1);

            html += `
            <div class="col-md-3 col-sm-6">
                <div class="player-card">
                    <img src="${imgSrc}" class="player-avatar" alt="${player.name}" onerror="this.src='https://placehold.co/150?text=User'">
                    <h4 class="mt-3 text-warning">${player.name}</h4>
                    <p class="text-light small">${player.school}</p>
                    <h2 class="score-display bg-primary rounded p-1">0</h2>
                </div>
            </div>`;
        });
        $("#player-container").html(html);
    },

    playVideo: function(sourceUrl, onEndedCallback) {
        var video = document.getElementById("intro-video-player");
        var source = video.querySelector("source");

        // Thay đổi source video
        source.src = sourceUrl;
        video.load(); // Load lại video mới

        this.switchScreen("screen-video");

        // Xóa sự kiện cũ để tránh lặp
        $(video).off("ended");

        // Gán sự kiện khi video kết thúc
        $(video).on("ended", function() {
            if (onEndedCallback) onEndedCallback();
        });

        // Tự động play
        video.play().catch(e => console.log("Cần click để chạy video:", e));
    },

    // Hàm hiển thị màn hình chờ của thí sinh
    showPlayerReady: function(playerIndex) {
        var p = GameConfig.players[playerIndex];

        $("#current-player-avatar").attr("src", p.avatar);
        $("#current-player-name").text(p.name);
        $("#current-player-school").text(p.school);
        $("#current-player-score").text(p.score); // Lấy điểm từ config (nếu có cập nhật)

        this.switchScreen("screen-player-ready");
    }
};