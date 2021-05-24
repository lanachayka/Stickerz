(function() {
    const images = [
        'img/baby-yoda.svg',
        'img/banana.svg',
        'img/girl.svg',
        'img/viking.svg'
    ];

    let currentIdx = 0;

    function showCurrentSlide() {
        const slide1Container = document.querySelector('.two-products-carousel .product-one');
        slide1Container.src = images[currentIdx];
        const slide2Container = document.querySelector('.two-products-carousel .product-two');
        const product2Idx = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        slide2Container.src = images[product2Idx];
    }

    function nextSlide() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentIdx--;
        if (currentIdx <= 0) currentIdx = images.length - 1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 2000);

    document.querySelector('.two-products-carousel .slide-prev').addEventListener('click', prevSlide);
    document.querySelector('.two-products-carousel .slide-next').addEventListener('click', nextSlide);
})();