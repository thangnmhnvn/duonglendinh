Object.assign(GameUI, {
    // 1. Render intro (Giữ nguyên)
    renderVCIntroPlayers: function() { this.renderPlayersCommon("vc-player-summary"); },

    // 2. Render Ma trận (Giữ nguyên)
    renderMatrix: function() {
        var html = "";
        GameConfig.rounds.vuotChuongNgaiVat.questions.forEach((q, idx) => {
            var cls = q.isOpened ? "btn-secondary opacity-25" : "btn-outline-warning";
            var dis = q.isOpened ? "disabled" : "";
            // Tăng kích thước nút lên một chút cho đẹp vì giờ không gian rộng hơn
            html += `<button class="btn ${cls} fw-bold m-1 shadow-sm" style="width: 70px; height: 60px; font-size: 1.2rem;" ${dis} onclick="GameLogic.openVCQuestion(${idx})">${idx + 1}</button>`;
        });
        $("#matrix-container").html(html);
    },

    // 3. Show Modal (Giữ nguyên)
    showVCModal: function(q, pName) {
        $("#vc-modal-title").text("Câu hỏi số " + q.id);
        $("#vc-question-content").text(q.content);
        $("#vc-current-player-name").text(pName).removeClass("text-danger").addClass("text-warning");

        $("#vc-answer-options").show();
        $("#vc-feedback-area, #vc-steal-controls, #btn-close-vc").hide();
        $(".vc-option-btn").removeClass("btn-success btn-danger opacity-25").addClass("btn-outline-light").prop("disabled", false);

        if (q.options) {
            q.options.forEach((opt, i) => $("#vc-opt-" + i).text("ABCD"[i] + ". " + opt));
        }
        $("#vc-timer").text("15").removeClass("text-secondary").addClass("text-danger").show();

        new bootstrap.Modal(document.getElementById('modalVCQuestion')).show();
    },

    // Hàm cập nhật số giây (MỚI)
    updateVCTimer: function(seconds) {
        $("#vc-timer").text(seconds);
        if (seconds <= 5) {
            $("#vc-timer").addClass("animate-pulse"); // Thêm hiệu ứng nháy nếu muốn
        } else {
            $("#vc-timer").removeClass("animate-pulse");
        }
    },

    // Hàm ẩn đồng hồ khi trả lời xong (MỚI)
    hideVCTimer: function() {
        $("#vc-timer").hide();
    },

    // 4. Feedback (Giữ nguyên)
    showVCAnswerFeedback: function(idx, isCorrect, isSteal) {
        var btn = $("#vc-opt-" + idx);
        var msg = "";

        if (isCorrect) {
            btn.removeClass("btn-outline-light").addClass("btn-success");
            msg = isSteal ? "CƯỚP LƯỢT THÀNH CÔNG!" : "CHÍNH XÁC!";
            $("#vc-answer-text").text(msg).addClass("text-success").removeClass("text-danger");
            $("#btn-close-vc").show();
            $(".vc-option-btn").prop("disabled", true);
        } else {
            btn.removeClass("btn-outline-light").addClass("btn-danger").prop("disabled", true);
            if (!isSteal) {
                $("#vc-answer-text").text("SAI RỒI! MỜI CƯỚP LƯỢT").addClass("text-danger");
            } else {
                $("#vc-answer-text").text("CƯỚP LƯỢT THẤT BẠI (-10Đ)").addClass("text-danger");
                $("#btn-close-vc").show();
                $(".vc-option-btn").prop("disabled", true);
            }
        }
        $("#vc-feedback-area").show();
    },

    // 5. Steal Options (Giữ nguyên)
    showStealOptions: function(excludeIdx) {
        $("#vc-answer-options").css("opacity", "0.5");
        $("#vc-steal-controls").show();

        // --- CẬP NHẬT MỚI: Reset đồng hồ cho lượt cướp ---
        $("#vc-timer").text("15").show(); // Hiện lại đồng hồ 15s

        var html = "";
        GameConfig.players.forEach((p, idx) => {
            if (idx !== excludeIdx) {
                html += `<button class="btn btn-outline-info mx-1" onclick="GameLogic.handleVCSteal(${idx})">${p.name}</button>`;
            }
        });
        $("#vc-steal-buttons").html(html);
    },

    // 6. Close Modal (Đã xóa lệnh gọi renderVCSidebar)
    closeVCModal: function() {
        $("#modalVCQuestion").modal('hide');
        this.renderMatrix();
        // Không gọi this.renderVCSidebar() nữa
        GameLogic.onVCModalClosed();
    },
});