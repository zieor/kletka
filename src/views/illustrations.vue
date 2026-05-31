<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

// Состояние для открытой картинки (null = закрыто)
const selectedImage = ref(null)

// Функция открытия
const openImage = (img) => {
  selectedImage.value = img
  document.body.style.overflow = 'hidden' // Блокируем скролл страницы
}

// Функция закрытия
const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = '' // Возвращаем скролл
}

// Данные для галереи
const screenshots = [
  { id: 1, src: new URL('@/images/illustration/il1.png', import.meta.url).href, alt: 'Screenshot 1' },
  { id: 2, src: new URL('@/images/illustration/il2.png', import.meta.url).href, alt: 'Screenshot 2' },
  { id: 3, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 3' },
  { id: 4, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 4' },
  { id: 5, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 5' },
  { id: 6, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 6' },
]

const artworks = [
  { id: 1, src: new URL('@/images/illustration/il1.png', import.meta.url).href, alt: 'Art 1'},
  { id: 2, src: new URL('@/images/illustration/il2.png', import.meta.url).href, alt: 'Art 2' },
  { id: 3, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Art 3' },
  { id: 4, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Art 4' },
]

const concepts = [
  { id: 1, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Concept 1' },
  { id: 2, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Concept 2' },
  { id: 3, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Concept 3' },
]
</script>

<template>
  <div class="illustrations-page">
    <!-- Красная шапка -->
    <div class="page-header">
      <h1 class="page-title">{{ $t('illustrations.title') }}</h1>
    </div>

    <!-- Контент -->
    <div class="page-content">
      <div class="content-container">

        <!-- Секция: Скриншоты -->
        <section class="gallery-section">
          <h2 class="section-title">{{ $t('illustrations.screenshots') }}</h2>
          <div class="gallery-scroll">
            <div
                v-for="img in screenshots"
                :key="img.id"
                class="gallery-item"
                @click="openImage(img)"
            >
              <img :src="img.src" :alt="img.alt" class="gallery-image">
            </div>
          </div>
        </section>

        <!-- Секция: Иллюстрации -->
        <section class="gallery-section">
          <h2 class="section-title">{{ $t('illustrations.artworks') }}</h2>
          <div class="gallery-scroll">
            <div
                v-for="img in artworks"
                :key="img.id"
                class="gallery-item"
                @click="openImage(img)"
            >
              <img :src="img.src" :alt="img.alt" class="gallery-image">
            </div>
          </div>
        </section>

        <!-- Секция: Концепт-арты -->
        <section class="gallery-section">
          <h2 class="section-title">{{ $t('illustrations.concepts') }}</h2>
          <div class="gallery-scroll">
            <div
                v-for="img in concepts"
                :key="img.id"
                class="gallery-item"
                @click="openImage(img)"
            >
              <img :src="img.src" :alt="img.alt" class="gallery-image">
            </div>
          </div>
        </section>

      </div>
    </div>

    <!-- === МОДАЛЬНОЕ ОКНО (ЛАЙТБОКС) БЕЗ АНИМАЦИИ === -->
    <div v-if="selectedImage" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <!-- Крестик закрытия -->
        <button class="close-btn" @click="closeLightbox">&times;</button>
        <img
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="lightbox-image"
        >
      </div>
    </div>

  </div>
</template>

<style scoped>
/* === Обёртка страницы === */
.illustrations-page {
  width: 100%;
  background: #090909;
  min-height: 100vh;
}

/* === Красная шапка === */
.page-header {
  background: linear-gradient(to right, #b30000, #4d0000);
  width: 100%;
  padding: 30px 0;
}

.page-title {
  color: white;
  font-size: 36px;
  font-weight: 700;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-transform: uppercase;
}

/* === Контент === */
.page-content {
  background: radial-gradient(#1e1e1e, #090909);
  padding: 40px 0 60px;
  width: 100%;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* === Секция галереи === */
.gallery-section {
  margin-bottom: 60px;
}

.section-title {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 30px 0;
  text-transform: uppercase;
  padding-bottom: 10px;
  border-bottom: 2px solid #b30000;
}

/* === Горизонтальная прокручиваемая область === */
.gallery-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 5px;
  scrollbar-width: thin;
  scrollbar-color: #b30000 #1a1a1a;
}

.gallery-scroll::-webkit-scrollbar { height: 8px; }
.gallery-scroll::-webkit-scrollbar-track { background: #1a1a1a; border-radius: 4px; }
.gallery-scroll::-webkit-scrollbar-thumb { background: #b30000; border-radius: 4px; }
.gallery-scroll::-webkit-scrollbar-thumb:hover { background: #ff0000; }

/* === Элемент галереи  */
.gallery-item {
  flex-shrink: 0;
  width: 400px;
  height: 280px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  border-color: rgba(179, 0, 0, 0.6);
  box-shadow: 0 8px 25px rgba(179, 0, 0, 0.4);
  transform: translateY(-3px);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

/* === МОДАЛЬНОЕ ОКНО (ЛАЙТБОКС) === */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 40px 20px;
}

.lightbox-content {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 0 60px rgba(179, 0, 0, 0.5);
  border: 2px solid rgba(179, 0, 0, 0.3);
}

/* === КРЕСТИК ЗАКРЫТИЯ === */
.close-btn {
  position: absolute;
  top: -45px;
  right: 0;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s ease;
  z-index: 10000;
}

.close-btn:hover {
  color: #b30000;
}

/* === Адаптивность === */
@media (max-width: 768px) {
  .page-title { font-size: 28px; }
  .section-title { font-size: 20px; }
  .gallery-item { width: 300px; height: 220px; }

  .lightbox-image { max-height: 75vh; }
  .close-btn { top: -40px; font-size: 36px; }
}

@media (max-width: 480px) {
  .gallery-item { width: 260px; height: 180px; }
  .lightbox-overlay { padding: 20px 10px; }
}
</style>