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
});


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".gameBox-img");
    const leftBtn = document.querySelector(".scroll-btn.left-btn");
    const rightBtn = document.querySelector(".scroll-btn.right-btn");

    const scrollAmount = 300; // 每次滾動的距離

    leftBtn.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});