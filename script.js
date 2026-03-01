let slideIndex = 1;
    let timer;

    showSlides(slideIndex);
    autoSlide();

    function plusSlides(n) {
        clearInterval(timer); // Stop auto-slide when user interacts
        showSlides(slideIndex += n);
        autoSlide(); // Restart auto-slide
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }

    function autoSlide() {
        timer = setInterval(() => {
            plusSlides(1);
        }, 6000); // Slide changes every 6 seconds
    }