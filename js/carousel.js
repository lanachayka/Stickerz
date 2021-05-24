(function() {
    const images = [
        'img/baby-yoda.svg',
        'img/banana.svg',
        'img/girl.svg',
        'img/viking.svg'
    ];
    
    let currentIdx = 0;
    
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.products-carousel img');
        slideContainer.src = images[currentIdx];
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
    
    document.querySelector('.products-carousel .slide-prev').addEventListener('click', prevSlide);
    document.querySelector('.products-carousel .slide-next').addEventListener('click', nextSlide);
})();