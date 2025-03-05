document.addEventListener("DOMContentLoaded", function () {
    // Lấy danh sách form cho cả tour trong nước & nước ngoài
    const forms = document.querySelectorAll('form[action="https://v1/tim-tour"]');

    forms.forEach(form => {
        const destinationSelect = form.querySelector('select[name="diem-den"]'); // Lấy dropdown điểm đến
        const tourType = form.querySelector('input[name="type"]').value; // Xác định loại tour (trong nước/ nước ngoài)

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Ngăn form gửi request mặc định

            const destination = destinationSelect.value; // Lấy giá trị điểm đến

            if (destination !== "all") {
                let baseUrl = "https://vietnamhiddencharm.me/v1/danh-muc/";

                if (tourType === "trong-nuoc") {
                    // Nếu là tour trong nước
                    window.location.href = `${baseUrl}du-lich-${destination}/index.html`;
                } else if (tourType === "nuoc-ngoai") {
                    // Nếu là tour nước ngoài
                    window.location.href = `${baseUrl}du-lich-${destination}/index.html`;
                }
            } else {
                alert("Vui lòng chọn điểm đến!");
            }
        });
    });
});
