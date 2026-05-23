<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Динамический импорт изображений
const screenshots = [
  { id: 1, src: new URL('@/images/illustration/il1.png', import.meta.url).href, alt: 'Screenshot 1' },
  { id: 2, src: new URL('@/images/illustration/il2.png', import.meta.url).href, alt: 'Screenshot 2' },
  { id: 3, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 3' },
  { id: 4, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 4' },
  { id: 5, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 5' },
  { id: 6, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Screenshot 6' },
]

const artworks = [
  { id: 1, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Art 1' },
  { id: 2, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Art 2' },
  { id: 3, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Art 3' },
  { id: 4, src: new URL('@/images/levels/street.png', import.meta.url).href, alt: 'Art 4' },
]

const concepts = [
  { id: 1, src: new URL('@/images/illustration/concept1.png', import.meta.url).href, alt: 'Concept 1' },
  { id: 2, src: new URL('@/images/illustration/concept2.png', import.meta.url).href, alt: 'Concept 1' },
  { id: 3, src: new URL('@/images/illustration/concept3.png', import.meta.url).href, alt: 'Concept 1' },


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
            >
              <img :src="img.src" :alt="img.alt" class="gallery-image">
            </div>
          </div>
        </section>

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

/* Скроллбар для Webkit (Chrome, Safari) */
.gallery-scroll::-webkit-scrollbar {
  height: 8px;
}

.gallery-scroll::-webkit-scrollbar-track {
  background: #1a1a1a;
  border-radius: 4px;
}

.gallery-scroll::-webkit-scrollbar-thumb {
  background: #b30000;
  border-radius: 4px;
}

.gallery-scroll::-webkit-scrollbar-thumb:hover {
  background: #ff0000;
}

/* === Элемент галереи — фиксированный блок === */
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

/* === Картинка масштабируется под блок === */
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Заполняет блок, обрезая лишнее без искажений */
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

/* === Адаптивность (как было) === */
@media (max-width: 768px) {
  .page-title { font-size: 28px; }
  .section-title { font-size: 20px; }
  .gallery-item { width: 300px; height: 220px; }
}

@media (max-width: 480px) {
  .gallery-item { width: 260px; height: 180px; }
}
</style>