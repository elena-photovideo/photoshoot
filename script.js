const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.close-lightbox');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryLinks = document.querySelectorAll('.gallery-row a');
let currentImageIndex = 0;

// Объявляем images глобально
let images = [];

// Заполняем images  в зависимости от пути
if (window.location.pathname.includes("women1.html")) {
  images = [
    "women1_1.jpg", "women1_2.jpg",
    "women1_3.jpg", "women1_4.jpg",
    "women1_5.jpg", "women1_6.jpg",
    "women1_7.jpg", "women1_8.jpg",
    "women1_9.jpg"
  ];
}

if (window.location.pathname.includes("women2.html")) {
  images = [
    "women2_1.jpg", "women2_2.jpg",
    "women2_3.jpg", "women2_4.jpg",
    "women2_5.jpg", "women2_6.jpg",
    "women2_7.jpg", "women2_8.jpg",
    "women2_9.jpg"
  ];
}

if (window.location.pathname.includes("women3.html")) {
  images = [
    "women3_1.jpg", "women3_2.jpg",
    "women3_3.jpg", "women3_4.jpg",
    "women3_5.jpg", "women3_6.jpg",
    "women3_7.jpg", "women3_8.jpg",
    "women3_9.jpg"
  ];
}

if (window.location.pathname.includes("women4.html")) {
  images = [
    "women4_1.jpg", "women4_2.jpg",
    "women4_3.jpg", "women4_4.jpg",
    "women4_5.jpg", "women4_6.jpg"
  ];
}

if (window.location.pathname.includes("women5.html")) {
  images = [
    "women5_1.jpg", "women5_2.jpg",
    "women5_3.jpg", "women5_4.jpg",
    "women5_5.jpg", "women5_6.jpg",
    "women5_7.jpg", "women5_8.jpg",
    "women5_9.jpg"
  ];
}



// Открытие Lightbox
galleryLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    currentImageIndex = Array.from(galleryLinks).indexOf(link);
    lightboxImage.src = images[currentImageIndex];
    lightbox.style.display = 'flex';
  });
});

// Закрытие Lightbox
closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Предыдущее изображение
prevButton.addEventListener('click', () => {
  showPreviousImage();
});

// Следующее изображение
nextButton.addEventListener('click', () => {
  showNextImage();
});

// Обработчик нажатия клавиш
document.addEventListener('keydown', (event) => {
  if (lightbox.style.display === 'flex') {
    if (event.key === 'ArrowLeft') {
      showPreviousImage();
    } else if (event.key === 'ArrowRight') {
      showNextImage();
    } else if (event.key === 'Escape') {
      lightbox.style.display = 'none';
    }
  }
});

// Функции для переключения изображений
function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
  }
  lightboxImage.src = images[currentImageIndex];
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
  }
  lightboxImage.src = images[currentImageIndex];
}

// Скрываем Lightbox при загрузке страницы
lightbox.style.display = 'none'; 