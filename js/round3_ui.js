Object.assign(GameUI, {
    // 1. Intro (Giữ nguyên)
    renderTTIntroPlayers: function() {
        this.renderPlayersCommon("tt-player-summary");
    },

    // 2. Render Câu hỏi & Đáp án (SỬA LẠI)
    renderTTQuestion: function(q) {
        // Điền nội dung câu hỏi
        $("#tt-question-content").text(q.content);

        // Reset các phần khác
        $("#tt-answer-content").hide();
        $("#tt-scoring-area").hide();
        $("#tt-timer").text(GameConfig.rounds.tangToc.duration).removeClass("text-danger blink-mode");

        // --- SỬA LẠI: Render 4 đáp án vào khu vực riêng ---
        var optionsHtml = "";
        if(q.options && q.options.length >= 4) {
            optionsHtml = `
            <div class="row g-3">
                <div class="col-6"><div class="p-3 bg-white text-dark rounded fw-bold text-start h-100 shadow-sm border border-secondary">A. ${q.options[0]}</div></div>
                <div class="col-6"><div class="p-3 bg-white text-dark rounded fw-bold text-start h-100 shadow-sm border border-secondary">B. ${q.options[1]}</div></div>
                <div class="col-6"><div class="p-3 bg-white text-dark rounded fw-bold text-start h-100 shadow-sm border border-secondary">C. ${q.options[2]}</div></div>
                <div class="col-6"><div class="p-3 bg-white text-dark rounded fw-bold text-start h-100 shadow-sm border border-secondary">D. ${q.options[3]}</div></div>
            </div>`;
        }
        $("#tt-options-container").html(optionsHtml);
    },

    // 3. Timer (Giữ nguyên)
    updateTTTimer: function(seconds) {
        $("#tt-timer").text(seconds);
        if (seconds <= 5) $("#tt-timer").addClass("text-danger");
    },

    // 4. Show Answer (Giữ nguyên)
    showTTAnswer: function(answer) {
        $("#tt-answer-content").text("ĐÁP ÁN ĐÚNG: " + answer).fadeIn();
        $("#tt-scoring-area").fadeIn();
    },

    // 5. Scoring Buttons (Sửa lại chút CSS cho đẹp)
    renderTTScoringButtons: function() {
        var html = "";
        GameConfig.players.forEach((p, idx) => {
            html += `
            <div class="d-flex flex-column align-items-center" style="width: 150px;">
                <img src="${p.avatar}" width="50" height="50" class="rounded-circle border border-white mb-2" style="object-fit: cover;">
                <div class="text-white small fw-bold mb-2 text-truncate w-100 text-center">${p.name}</div>
                <button id="btn-tt-score-${idx}" class="btn btn-success btn-sm w-100 fw-bold py-2 shadow" 
                        onclick="GameLogic.awardTTPoints(${idx})">
                    +30 ĐIỂM
                </button>
            </div>`;
        });
        $("#tt-scoring-container").html(html);
    }
});