document.addEventListener("DOMContentLoaded", function () {
    //跑馬燈
    const broadcast = document.querySelector('.Broadcast');
    const items = broadcast.querySelectorAll('li');
    const itemHeight = items[0].offsetHeight;
    let currentIndex = 0;
    broadcast.innerHTML += broadcast.innerHTML;   //將內容複製一份到列表末尾，無縫滾動

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
    setInterval(scroll, 5000);   //滾動間隔時間

    //遊戲區塊左右滑動
    const scrollAmount = 300;   //每次滾動的距離
    const leftButtons = document.querySelectorAll(".scroll-btn.left-btn");   //選取所有左右按鈕
    const rightButtons = document.querySelectorAll(".scroll-btn.right-btn");
    
    leftButtons.forEach((button) => {   //左側按鈕
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");   //取得 data-id
            const container = document.querySelector(`.gameBox-img[data-id="${id}"]`);
            if (container) {
                container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        });
    });
    rightButtons.forEach((button) => {   //右側按鈕
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");   //取得 data-id
            const container = document.querySelector(`.gameBox-img[data-id="${id}"]`);
            if (container) {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        });
    });

    //回頂部按鈕
    const scrollToTopButton = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {   //監聽滾動事件
        if (window.scrollY > 100) {   //當滾動超過100px
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });
    scrollToTopButton.addEventListener("click", (e) => {   //點擊按鈕滾動回頂部
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});



