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

    $(window).on("scroll", function () {
        
        if ($(".scroll-to-top").length) {
          var strickyScrollPos = 100;
          if ($(window).scrollTop() > strickyScrollPos) {
            $(".scroll-to-top").fadeIn(500);
          } else if ($(this).scrollTop() <= strickyScrollPos) {
            $(".scroll-to-top").fadeOut(500);
          }
        }
      });
});


document.addEventListener("DOMContentLoaded", () => {
    const scrollAmount = 300;   // 每次滾動的距離
    // 選取所有左右按鈕
    const leftButtons = document.querySelectorAll(".scroll-btn.left-btn");
    const rightButtons = document.querySelectorAll(".scroll-btn.right-btn");
    // 左側按鈕
    leftButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");   // 取得 data-id
            const container = document.querySelector(`.gameBox-img[data-id="${id}"]`);
            if (container) {
                container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        });
    });
    // 右側按鈕
    rightButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");   // 取得 data-id
            const container = document.querySelector(`.gameBox-img[data-id="${id}"]`);
            if (container) {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        });
    });
});

