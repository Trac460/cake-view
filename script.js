let slideIndex = 1;
    let timer;

    showSlides(slideIndex);
    autoSlide();

    function plusSlides(n) {
        clearInterval(timer); 
        showSlides(slideIndex += n);
        autoSlide();
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
        }, 6000);
    }