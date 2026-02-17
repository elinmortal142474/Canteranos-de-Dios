const slides = document.querySelectorAll('.slide');
const arrows = {
    prev: document.querySelector('.slider-arrow.left'),
    next: document.querySelector('.slider-arrow.right')
};

let currentSlide = 0;

const changeSlide = (index) => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
};

arrows.next.addEventListener('click', () => changeSlide(currentSlide + 1));
arrows.prev.addEventListener('click', () => changeSlide(currentSlide - 1));

// Adaptación responsive
const adjustSlidesLayout = () => {
    slides.forEach(slide => {
        if (window.innerWidth <= 768) {
            slide.classList.add('mobile-layout');
            slide.classList.remove('desktop-layout');
            slide.style.gridTemplateColumns = '1fr';
        } else {
            slide.classList.add('desktop-layout');
            slide.classList.remove('mobile-layout');
            slide.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
    });
};

// Llama a la función al cargar y cuando la ventana cambia de tamaño
adjustSlidesLayout();
window.addEventListener('resize', adjustSlidesLayout);
