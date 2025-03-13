document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search-field'); // Ô tìm kiếm
    const searchForm = document.querySelector('.searchform'); // Form tìm kiếm
    const resultBox = document.querySelector('.live-search-results'); // Khu vực hiển thị kết quả

    // Danh sách điểm đến từ danh sách <option>
    const destinations = [
        // Trong nước
        { value: "ha-noi", name: "Ha Noi Tours" },
        { value: "sapa", name: "Sapa Tours" },
        { value: "mai-chau", name: "Mai Chau Tours" },
        { value: "ninh-binh", name: "Ninh Binh Tours" },
        { value: "cao-bang", name: "Cao Bang Tours" },
        { value: "phu-tho", name: "Phu Tho Tours" },
        { value: "bac-kan", name: "Bac Kan Tours" },
        { value: "dien-bien", name: "Dien Bien Tours" },
        { value: "hai-phong", name: "Hai Phong Tours" },
        { value: "vinh-phuc", name: "Vinh Phuc Tours" },
        { value: "quang-ninh", name: "Quang Ninh Tours" },
        { value: "lang-son", name: "Lang Son Tours" },
        { value: "moc-chau", name: "Moc Chau Tours" },
        { value: "bac-ninh", name: "Bac Ninh Tours" },
        { value: "ha-giang", name: "Ha Giang Tours" },
        { value: "nghe-an", name: "Nghe An Tours" },
        { value: "ha-tinh", name: "Ha Tinh Tours" },
        { value: "hue", name: "Hue Tours" },
        { value: "da-nang", name: "Da Nang Tours" },
        { value: "da-lat", name: "Da Lat Tours" },
        { value: "nha-trang", name: "Nha Trang Tours" },
        { value: "quy-nhon", name: "Quy Nhon Tours" },
        { value: "phu-yen", name: "Phu Yen Tours" },
        { value: "ninh-thuan", name: "Ninh Thuan Tours" },
        { value: "quang-binh", name: "Phong Nha Tours" },
        { value: "quang-tri", name: "Quang Tri Tours" },
        { value: "tay-nguyen", name: "Tay Nguyen Tours" },
        { value: "thanh-hoa", name: "Thanh Hoa Tours" },
        { value: "hoi-an", name: "Hoi An Tours" },
        { value: "phan-thiet", name: "Phan Thiet Tours" },
        { value: "phu-quoc", name: "Phu Quoc Tours" },
        { value: "thanh-pho-ho-chi-minh", name: "Ho Chi Minh City Tours" },
        { value: "can-tho", name: "Can Tho Tours" },
        { value: "vung-tau", name: "Vung Tau Tours" },
        { value: "ca-mau", name: "Ca Mau Tours" },
        { value: "long-an", name: "Long An Tours" },
        { value: "nam-du", name: "Nam Du Tours" },
        { value: "soc-trang", name: "Soc Trang Tours" },
        { value: "bac-lieu", name: "Bac Lieu Tours" },
        { value: "ben-tre", name: "Ben Tre Tours" },
        { value: "kien-giang", name: "Kien Giang Tours" },
        { value: "ha-tien", name: "Ha Tien Tours" },
        { value: "con-dao", name: "Con Dao Tours" },
        { value: "my-tho", name: "My Tho Tours" },
        { value: "dong-thap", name: "Dong Thap Tours" },
        { value: "an-giang", name: "An Giang Tours" },
        { value: "chau-doc", name: "Chau Doc Tours" },
    
        // Quốc tế
        { value: "ai-cap", name: "Egypt Tours" },
        { value: "an-do", name: "India Tours" },
        { value: "anh", name: "United Kingdom Tours" },
        { value: "ao", name: "Austria Tours" },
        { value: "bhutan", name: "Bhutan Tours" },
        { value: "bi", name: "Belgium Tours" },
        { value: "brazil", name: "Brazil Tours" },
        { value: "brunei", name: "Brunei Tours" },
        { value: "campuchia", name: "Cambodia Tours" },
        { value: "cuba", name: "Cuba Tours" },
        { value: "czech", name: "Czech Republic Tours" },
        { value: "dai-loan", name: "Taiwan Tours" },
        { value: "dubai", name: "Dubai Tours" },
        { value: "duc", name: "Germany Tours" },
        { value: "ha-lan", name: "Netherlands Tours" },
        { value: "han-quoc", name: "South Korea Tours" },
        { value: "hong-kong", name: "Hong Kong Tours" },
        { value: "hungary", name: "Hungary Tours" },
        { value: "hy-lap", name: "Greece Tours" },
        { value: "indonesia", name: "Indonesia Tours" },
        { value: "lao", name: "Laos Tours" },
        { value: "madilves", name: "Maldives Tours" },
        { value: "malaysia", name: "Malaysia Tours" },
        { value: "maroc", name: "Morocco Tours" },
        { value: "monaco", name: "Monaco Tours" },
        { value: "mong-co", name: "Mongolia Tours" },
        { value: "my", name: "United States Tours" },
        { value: "nam-phi", name: "South Africa Tours" },
        { value: "new-zealand", name: "New Zealand Tours" },
        { value: "nga", name: "Russia Tours" },
        { value: "nhat-ban", name: "Japan Tours" },
        { value: "phan-lan", name: "Finland Tours" },
        { value: "phap", name: "France Tours" },
        { value: "philippines", name: "Philippines Tours" },
        { value: "scotland", name: "Scotland Tours" },
        { value: "singapore", name: "Singapore Tours" },
        { value: "thai-lan", name: "Thailand Tours" },
        { value: "tho-nhi-ky", name: "Turkey Tours" },
        { value: "thuy-dien", name: "Sweden Tours" },
        { value: "thuy-sy", name: "Switzerland Tours" },
        { value: "trung-quoc", name: "China Tours" },
        { value: "uc", name: "Australia Tours" },
        { value: "y", name: "Italy Tours" }
    ];
    

    // Lắng nghe khi người dùng nhập vào ô tìm kiếm
    searchInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase(); // Lấy giá trị tìm kiếm, chuyển thành chữ thường
        resultBox.innerHTML = ""; // Xóa kết quả cũ

        if (query.length === 0) return; // Không hiển thị nếu không có từ khóa

        // Lọc các điểm đến theo từ khóa
        const filtered = destinations.filter(dest => dest.name.toLowerCase().includes(query));

        if (filtered.length > 0) {
            filtered.forEach(dest => {
                const item = document.createElement("div");
                item.classList.add("search-suggestion");
                item.textContent = dest.name;
                item.dataset.value = dest.value;
                
                // Khi bấm vào một gợi ý, điều hướng sang trang tương ứng
                item.addEventListener("click", function () {
                    window.location.href = `https://vietnamhiddencharm.me/v1/danh-muc/du-lich-${this.dataset.value}/index.html`;
                });

                resultBox.appendChild(item);
            });
        } else {
            resultBox.innerHTML = "<div class='search-suggestion'>No results found</div>";
        }
    });

    // Ngăn form gửi request mặc định
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    
});
