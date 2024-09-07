// Script for students slider

var slides = document.querySelectorAll(".students-slide");
        var currentSlide = 0;

        function showSlide(n) {
            if (n < 0) {
                currentSlide = 0;
            } else if (n >= 5) {
                currentSlide = 5;
            } else {
                currentSlide = n;
            }
            updateSlidePosition();
        }

        function updateSlidePosition() {
            var slideWidth = slides[0].clientWidth;
            document.querySelector('.students-slider-main').style.transform = `translateX(-${slideWidth * currentSlide}px)`;
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        updateSlidePosition();
