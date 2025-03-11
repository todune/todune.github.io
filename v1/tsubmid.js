document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".wpcf7-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn reload trang

        let form = this;
        let submitButton = form.querySelector(".wpcf7-submit");
        
        // Đổi trạng thái nút gửi
        submitButton.value = "Đang gửi...";
        submitButton.disabled = true;

        // Lấy dữ liệu từ form
        let formData = new FormData(form);
        let message = "📩 *Thông tin liên hệ mới!*\n";
        formData.forEach((value, key) => {
            message += `📌 *${key}*: ${value}\n`;
        });

        // Thay token và chat_id của bạn vào đây
        const TOKEN = "7286174425:AAGNGPGE18Lr65ZDy-I4oTvf89ajkLVMA7w";  // Thay bằng token bot Telegram của bạn
        const CHAT_ID = "7363187130";  // Thay bằng chat ID của bạn

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        const data = {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
        };

        // Gửi dữ liệu đến Telegram bằng Fetch API
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.ok) {
                alert("✅ Gửi thành công!");
                form.reset(); // Reset lại form
                submitButton.value = "COMPLETE"; // Đặt lại trạng thái nút
                submitButton.disabled = false;
            } else {
                alert("❌ Gửi thất bại! Vui lòng thử lại.");
                submitButton.value = "COMPLETE";
                submitButton.disabled = false;
            }
        })
        .catch(error => {
            console.error("Lỗi:", error);
            alert("⚠ Đã xảy ra lỗi, vui lòng thử lại.");
            submitButton.value = "COMPLETE";
            submitButton.disabled = false;
        });
    });
});
