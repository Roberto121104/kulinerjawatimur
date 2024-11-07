// JavaScript untuk slider gambar
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    // Reset semua slide
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Menampilkan slide yang sesuai
    currentSlide = (slideIndex + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Navigasi slide berikutnya atau sebelumnya
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-slide dengan interval 5 detik
setInterval(() => changeSlide(1), 5000);

// Efek interaktif untuk makanan
const foodItems = document.querySelectorAll('.food-item');

foodItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s';
        item.style.backgroundColor = '#f4e0c9';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.backgroundColor = '';
    });
});

// Animasi button navigasi slider
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('mouseover', () => {
    prevButton.style.transform = 'scale(1.2)';
    prevButton.style.transition = 'transform 0.3s';
});
prevButton.addEventListener('mouseout', () => {
    prevButton.style.transform = 'scale(1)';
});

nextButton.addEventListener('mouseover', () => {
    nextButton.style.transform = 'scale(1.2)';
    nextButton.style.transition = 'transform 0.3s';
});
nextButton.addEventListener('mouseout', () => {
    nextButton.style.transform = 'scale(1)';
});
