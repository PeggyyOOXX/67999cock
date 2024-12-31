document.addEventListener("DOMContentLoaded", function () {
    // 跑馬燈
    const broadcast = document.querySelector('.Broadcast');
    if (broadcast) {
        const items = broadcast.querySelectorAll('li');
        if (items.length > 0) {
            const itemHeight = items[0].offsetHeight;
            let currentIndex = 0;
            broadcast.innerHTML += broadcast.innerHTML; // 將內容複製一份到列表末尾，無縫滾動

            function scroll() {
                currentIndex++;
                broadcast.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
                broadcast.style.transition = 'transform 0.5s ease-in-out';

                if (currentIndex >= items.length) {
                    setTimeout(() => {
                        broadcast.style.transition = 'none';
                        broadcast.style.transform = 'translateY(0)';
                        currentIndex = 0;
                    }, 500);
                }
            }
            setInterval(scroll, 5000); // 滾動間隔時間
        }
    }

    // 遊戲區塊左右滑動
    const scrollAmount = 300; // 每次滾動的距離
    const leftButtons = document.querySelectorAll(".scroll-btn.left-btn");
    const rightButtons = document.querySelectorAll(".scroll-btn.right-btn");

    leftButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            const container = document.querySelector(`.gameBox-img[data-id="${id}"]`);
            if (container) {
                container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        });
    });

    rightButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            const container = document.querySelector(`.gameBox-img[data-id="${id}"]`);
            if (container) {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        });
    });

    // 回頂部按鈕
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (scrollToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                scrollToTopButton.classList.add("show");
            } else {
                scrollToTopButton.classList.remove("show");
            }
        });

        scrollToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 切換眼睛圖標
    const passwordInput = document.getElementById("Password_input");
    const eyeIcon = document.getElementById("eyeIcon");
    if (passwordInput && eyeIcon) {
        eyeIcon.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text"; // 顯示密碼
                eyeIcon.src = "./assets/img/icon/png/eye.png"; // 變更眼睛圖標為隱藏
            } else {
                passwordInput.type = "password"; // 隱藏密碼
                eyeIcon.src = "./assets/img/icon/png/eye-off.png"; // 變更眼睛圖標為顯示
            }
        });
    }

    // 浮動按鈕顯示/隱藏RecordMenu
    const recordMenu = document.querySelector(".RecordMenu");
    const toggleButton = document.getElementById("show_RecordMenu");
    const toggleImage = toggleButton.querySelector("img");
    toggleButton.addEventListener("click", function () {
        recordMenu.classList.toggle("active");
        if (recordMenu.classList.contains("active")) {   //切換箭頭圖片
            toggleImage.src = "./assets/img/icon/png/arrow-left-primary.png";
        } else {
            toggleImage.src = "./assets/img/icon/png/arrow-right-primary.png";
        }
    });




    const TxnitemBtn = document.querySelectorAll(".Txn-item .nav-link"); // 選取所有按鈕
    const Txntitle = document.querySelectorAll(".Txn-title"); // 選取所有標題

    TxnitemBtn.forEach((button) => {
        button.addEventListener("click", function () {
            // 隱藏所有標題
            Txntitle.forEach((title) => title.style.display = "none");

            // 顯示對應標題
            const targetId = button.getAttribute("data-bs-target").replace("#pill-", "") + "-title";
            const targetTitle = document.getElementById(targetId);
            if (targetTitle) {
                targetTitle.style.display = "block";
            }
        });
    });
});