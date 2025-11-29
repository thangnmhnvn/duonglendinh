var GameUI = {
    // --- QUẢN LÝ MÀN HÌNH ---
    switchScreen: function(screenId) {
        this.stopBgMusic();

        $(".game-screen").hide();
        $("#" + screenId).fadeIn();

        // 1. Xử lý Flexbox (Giữ nguyên logic cũ)
        if(["screen-welcome", "screen-player-ready", "screen-players", "screen-vc-intro", "screen-tt-intro", "screen-vd-intro", "screen-summary"].includes(screenId)) {
            $("#" + screenId).css("display", "flex");
        }

        // 2. Xử lý Sidebar (Giữ nguyên logic cũ)
        if (["screen-gameplay", "screen-vc-play", "screen-tt-play", "screen-vd-play"].includes(screenId)) {
            $("#side-scoreboard").addClass('active');
            $("body").addClass('show-side-scoreboard');
            this.renderSideScoreboard();
            if(screenId !== "screen-tt-play") GameUI.highlightSidePlayer(GameLogic.currentPlayerIndex);
            GameUI.playBgMusic({'url':GameConfig.paths.audio.startQuestion,'startOn': 0, 'endOn': 4, 'volume': 0.3}, () => {
                GameUI.playBgMusic({'url':GameConfig.paths.audio.bgRound}, () => {});
            });
        } else {
            $("#side-scoreboard").removeClass('active');
            $("body").removeClass('show-side-scoreboard');
        }

        // 3. XỬ LÝ NHẠC NỀN (MỚI THÊM)
        // Nếu vào màn hình 4 thí sinh -> Chơi nhạc
        if(["screen-players", "screen-vc-intro", "screen-tt-intro", "screen-vd-intro"].includes(screenId)) {
            this.playBgMusic({'url':GameConfig.paths.audio.bgAudio1}, function () {
                GameUI.playBgMusic({'url':GameConfig.paths.audio.bgAudio2, 'loop': true}, () => {});
            });
        }

        // 4. Auto-save (Giữ nguyên logic cũ)
        if (typeof GameLogic !== 'undefined' && GameLogic.saveGame) {
            setTimeout(function() { GameLogic.saveGame(); }, 100);
        }
    },

    playMusic: function({
                            url = '',
                            loop = false
                        } = {}, onEndedCallback) {
        var audio = document.getElementById("music-player");
        if (audio) {
            $(audio).find("source").attr("src", url);
            audio.load();
            audio.loop = loop;
            audio.play().catch(e => console.log("Cần tương tác để phát nhạc:", e));

            $(audio).off("ended").on("ended", function() {
                audio.pause();
                audio.currentTime = 0; // Tua về đầu
                if (onEndedCallback) onEndedCallback();
            });
        }
    },

    stopMusic: function () {
        var audio = document.getElementById("music-player");
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Tua về đầu
        }
    },

    playBgMusic: function(args = {}, onEndedCallback) {
        const defaults = {
            url: '',
            startOn: 0,
            endOn: false,
            volume: 0.5,
            loop: false
        };
        args = { ...defaults, ...args };


        this.stopAllMedia();

        var audio = document.getElementById("bg-music-player");
        if (audio) {
            $(audio).find("source").attr("src", args.url);
            audio.load();
            audio.currentTime = args.startOn; // Tua về đầu
            audio.loop = args.loop;
            audio.volume = args.volume;
            audio.play().catch(e => console.log("Cần tương tác để phát nhạc:", e));

            $(audio).off("ended").on("ended", function() {
                GameUI.stopAllMedia();
                if (onEndedCallback) onEndedCallback();
            });

            if(args.endOn) {
                setTimeout(function () {
                    $(audio).trigger("ended");
                }, (args.endOn - args.startOn) * 1000);
            }

        }
    },

    stopBgMusic: function() {
        this.stopAllMedia();
    },

    // --- VIDEO PLAYER ---
    playVideo: function(sourceUrl, onEndedCallback) {
        this.stopAllMedia();
        var video = document.getElementById("intro-video-player");
        $(video).find("source").attr("src", sourceUrl);
        video.load();

        this.switchScreen("screen-video");
        $(video).off("ended").on("ended", function() {
            GameUI.stopAllMedia();
            if (onEndedCallback) onEndedCallback();
        });
        video.play().catch(e => console.log("Cần click để chạy video:", e));
    },

    stopIntroVideo: function() {
        this.stopAllMedia();
    },

    stopAllMedia: function () {
        var video = document.getElementById("intro-video-player");
        if (video) {
            video.pause();
            video.currentTime = 0; // Tua về đầu
        }
        var audio = document.getElementById("bg-music-player");
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // Tua về đầu
        }
    },

    // --- SIDEBAR ĐIỂM SỐ ---
    renderSideScoreboard: function() {
        var html = "";
        GameConfig.players.forEach((p, idx) => {
            html += `
            <div id="mini-card-${idx}" class="mini-player-card">
                <img src="${p.avatar}" class="mini-avatar" onerror="this.src='https://placehold.co/50'">
                <div class="mini-name">${p.name}</div>
                <div id="mini-score-${idx}" class="mini-score">${p.score}</div>
            </div>`;
        });
        $("#side-scoreboard").html(html);
    },

    updateSideScore: function(playerIndex, newScore) {
        $(`#mini-score-${playerIndex}`).text(newScore).css("background", "red");
        setTimeout(() => $(`#mini-score-${playerIndex}`).css("background", "#0d6efd"), 500);

        GameLogic.saveGame(); // Lưu điểm số ngay lập tức
    },

    highlightSidePlayer: function(playerIndex) {
        $(".mini-player-card").removeClass("active");
        if (playerIndex !== null) $(`#mini-card-${playerIndex}`).addClass("active");
    },

    // --- RENDER THÍ SINH (Dùng chung cho màn hình chờ các vòng) ---
    renderPlayersCommon: function(targetId) {
        var html = "";
        GameConfig.players.forEach(p => {
            html += `
            <div class="col-md-3 col-sm-6">
                <div class="player-card">
                    <img src="${p.avatar}" class="player-avatar" onerror="this.src='https://placehold.co/150?text=User'">
                    <h4 class="mt-3 text-warning">${p.name}</h4>
                    <p class="text-light small">${p.school}</p>
                    <h2 class="score-display bg-primary rounded p-1">${p.score}</h2>
                </div>
            </div>`;
        });
        $("#" + targetId).html(html);
    },

    // Wrapper để giữ tương thích code cũ
    renderPlayers: function() {
        this.renderPlayersCommon("player-container");
    },

    // --- THÊM HÀM MỚI CHO VÒNG 3 ---
    renderTTIntroPlayers: function() {
        this.renderPlayersCommon("tt-player-summary");
    }
};


Object.assign(GameUI, {
    // --- HÀM MỚI: RENDER MÀN HÌNH TỔNG KẾT ---
    renderSummary: function(winner, allPlayersSorted) {
        GameUI.playMusic({'url':GameConfig.paths.audio.endGame}, () => {});
        this.switchScreen("screen-summary");

        // 1. Hiển thị Quán quân
        $("#winner-avatar").attr("src", winner.avatar);
        $("#winner-name").text(winner.name);
        $("#winner-score").text(winner.score);

        // 2. Hiển thị danh sách các thí sinh còn lại (Á quân, Quý quân...)
        var html = "";
        allPlayersSorted.forEach((p, index) => {
            // Bỏ qua quán quân (đã hiện to ở trên rồi)
            if (index === 0) return;

            var rankTitle = (index === 1) ? "🥈 Á Quân" : (index === 2 ? "🥉 Quý Quân 1" : "🥉 Quý Quân 2");
            var cardColor = (index === 1) ? "border-secondary" : "border-dark";

            html += `
            <div class="col-md-3 col-6 mb-3">
                <div class="card bg-dark text-white ${cardColor} h-100 shadow">
                    <div class="card-body text-center">
                        <img src="${p.avatar}" width="80" height="80" class="rounded-circle mb-2 border border-white">
                        <h5 class="card-title text-truncate">${p.name}</h5>
                        <h3 class="text-warning">${p.score}</h3>
                        <span class="badge bg-secondary">${rankTitle}</span>
                    </div>
                </div>
            </div>`;
        });
        $("#summary-scoreboard").html(html);
    }
});

Object.assign(GameUI, {
    // Hàm thay thế GameUI.showNotification()
    // callback: Hàm sẽ chạy sau khi người dùng bấm nút "ĐÃ HIỂU"
    showNotification: function(message, callback) {
        $("#notify-content").html(message); // Dùng html để có thể xuống dòng <br>

        var modal = new bootstrap.Modal(document.getElementById('modalNotify'));
        modal.show();

        // Xử lý sự kiện bấm nút
        $("#btn-confirm-notify").off("click").on("click", function() {
            modal.hide();
            if (callback) callback();
        });
    },

    // Hàm thay thế GameUI.showConfirm()
    showConfirm: function(message, onYes) {
        $("#confirm-content").html(message);
        var modal = new bootstrap.Modal(document.getElementById('modalConfirm'));
        modal.show();

        $("#btn-yes-confirm").off("click").on("click", function() {
            modal.hide();
            if (onYes) onYes();
        });
    }
});