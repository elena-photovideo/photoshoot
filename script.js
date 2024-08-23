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

if (window.location.pathname.includes("women6.html")) {
  images = [
    "women6_1.jpg", "women6_2.jpg",
    "women6_3.jpg", "women6_4.jpg",
    "women6_5.jpg", "women6_6.jpg",
    "women6_7.jpg", "women6_8.jpg",
    "women6_9.jpg"
  ];
}

if (window.location.pathname.includes("women7.html")) {
  images = [
    "women7_1.jpg", "women7_2.jpg",
    "women7_3.jpg", "women7_4.jpg",
    "women7_5.jpg", "women7_6.jpg",
    "women7_7.jpg", "women7_8.jpg",
    "women7_9.jpg"
  ];
}

if (window.location.pathname.includes("women8.html")) {
  images = [
    "women8_1.jpg", "women8_2.jpg",
    "women8_3.jpg", "women8_4.jpg",
    "women8_5.jpg", "women8_6.jpg",
    "women8_7.jpg", "women8_8.jpg",
    "women8_9.jpg"
  ];
}

if (window.location.pathname.includes("women9.html")) {
  images = [
    "women9_1.jpg", "women9_2.jpg",
    "women9_3.jpg"
  ];
}

if (window.location.pathname.includes("family1.html")) {
  images = [
    "family1_1.jpg", "family1_2.jpg",
    "family1_3.jpg", "family1_4.jpg",
    "family1_5.jpg", "family1_6.jpg"
  ];
}

if (window.location.pathname.includes("family2.html")) {
  images = [
    "family2_1.jpg", "family2_2.jpg",
    "family2_3.jpg", "family2_4.jpg",
    "family2_5.jpg", "family2_6.jpg",
    "family2_7.jpg", "family2_8.jpg",
    "family2_9.jpg"
  ];
}

if (window.location.pathname.includes("family3.html")) {
  images = [
    "family3_1.jpg", "family3_2.jpg",
    "family3_3.jpg", "family3_4.jpg",
    "family3_5.jpg", "family3_6.jpg"
  ];
}

if (window.location.pathname.includes("family4.html")) {
  images = [
    "family4_1.jpg", "family4_2.jpg",
    "family4_3.jpg", "family4_4.jpg",
    "family4_5.jpg", "family4_6.jpg",
    "family4_7.jpg", "family4_8.jpg",
    "family4_9.jpg"
  ];
}

if (window.location.pathname.includes("family5.html")) {
  images = [
    "family5_1.jpg", "family5_2.jpg",
    "family5_3.jpg", "family5_4.jpg",
    "family5_5.jpg", "family5_6.jpg",
    "family5_7.jpg", "family5_8.jpg",
    "family5_9.jpg"
  ];
}

if (window.location.pathname.includes("family6.html")) {
  images = [
    "family6_1.jpg", "family6_2.jpg",
    "family6_3.jpg", "family6_4.jpg",
    "family6_5.jpg", "family6_6.jpg",
    "family6_7.jpg", "family6_8.jpg",
    "family6_9.jpg"
  ];
}

if (window.location.pathname.includes("men1.html")) {
  images = [
    "men1_1.jpg", "men1_2.jpg",
    "men1_3.jpg", "men1_4.jpg",
    "men1_5.jpg", "men1_6.jpg",
    "men1_7.jpg", "men1_8.jpg",
    "men1_9.jpg"
  ];
}

if (window.location.pathname.includes("men2.html")) {
  images = [
    "men2_1.jpg", "men2_2.jpg",
    "men2_3.jpg"
  ];
}

if (window.location.pathname.includes("men3.html")) {
  images = [
    "men3_1.jpg", "men3_2.jpg",
    "men3_3.jpg", "men3_4.jpg",
    "men3_5.jpg", "men3_6.jpg",
    "men3_7.jpg", "men3_8.jpg",
    "men3_9.jpg"
  ];
}

if (window.location.pathname.includes("sports.html")) {
  images = [
    "sports1.jpg", "sports2.jpg",
    "sports3.jpg", "sports4.jpg",
    "sports5.jpg", "sports6.jpg",
    "sports7.jpg", "sports8.jpg",
    "sports9.jpg"
  ];
}

if (window.location.pathname.includes("animals.html")) {
  images = [
    "animals1.jpg", "animals2.jpg",
    "animals3.jpg", "animals4.jpg",
    "animals5.jpg", "animals6.jpg",
    "animals7.jpg", "animals8.jpg",
    "animals9.jpg"
  ];
}

if (window.location.pathname.includes("creative.html")) {
  images = [
    "creative1.jpg", "creative2.jpg",
    "creative3.jpg", "creative4.jpg",
    "creative5.jpg", "creative6.jpg"
  ];
}

if (window.location.pathname.includes("aboutme.html")) {
  images = [
    "I1.jpg", "I2.jpg",
    "I3.jpg", "I4.jpg",
    "I5.jpg", "I6.jpg"
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