<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t, tm } = useI18n()
const selectedNews = ref(null)


const openModal = (news) => {
  selectedNews.value = news
  document.body.style.overflow = 'hidden'
}


const closeModal = () => {
  selectedNews.value = null
  document.body.style.overflow = ''
}


const handleKeydown = (e) => {
  if (e.key === 'Escape') closeModal()
}
const getImageUrl = (path) => {
  if (!path) return ''
  return new URL(path.replace('@/', '/src/'), import.meta.url).href
}
</script>

<template>
  <div class="news-section">
    <div class="news1">
      <div class="news-box">
        <p class="news-text">{{ $t('news.title') }}</p>
      </div>
    </div>

    <div class="news-body">
      <div class="news-cards">
        <div
            v-for="news in tm('news.cards')"
            :key="news.id"
            class="news-card"
            @click="openModal(news)"
        >
          <img :src="getImageUrl(news.image)" :alt="news.title" class="card-image" />
          <div class="card-meta">
            <span class="card-tag">{{ $t('news.tag') }}</span>
            <span class="card-divider">|</span>
            <span class="card-date">{{ news.date }}</span>
          </div>
          <h3 class="card-title">{{ news.title }}</h3>
          <p class="card-subtitle">{{ news.subtitle }}</p>
        </div>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="selectedNews" class="modal-overlay" @click="closeModal" @keydown="handleKeydown" tabindex="-1">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">&times;</button>

          <div class="modal-header">
            <span class="modal-tag">{{ $t('news.tag') }}</span>
            <span class="modal-date">{{ selectedNews.date }}</span>
          </div>

          <h2 class="modal-title">{{ selectedNews.title }}</h2>

          <div class="modal-image-wrapper">
            <img :src="getImageUrl(selectedNews.image)" :alt="selectedNews.title" class="modal-image">
          </div>

          <div class="modal-body" v-html="selectedNews.content"></div>

          <div class="modal-footer">
            <button class="back-btn" @click="closeModal">← {{ $t('news.back') || 'Назад' }}</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.news-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.news1 {
  background: linear-gradient(to right, #b30000, #4d0000);
  width: 100%;
  padding: 30px 0;
}

.news-box {
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.news-text {
  color: white;
  font-weight: bold;
  font-size: 36px;
  margin: 0;
}

.news-body {
  width: 100%;
  background: radial-gradient(#1e1e1e, #090909);
  padding: 50px 0;
  display: flex;
  justify-content: center;
}

.news-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.news-card {
  flex: 1 1 300px;
  max-width: 360px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  opacity: 0.9;
}

.card-image {
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
  filter: grayscale(100%) contrast(1.1);
  transition: filter 0.3s ease;
}

.news-card:hover .card-image {
  filter: grayscale(80%) contrast(1.15);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-right: 70px;
}

.card-tag {
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  font-size: 13px;

}

.card-divider {
  color: #fff;
  font-size: 13px;
}

.card-date {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
}

.card-title {
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.card-subtitle {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  opacity: 0.9;
}

/* === МОДАЛЬНОЕ ОКНО === */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
  outline: none; /* Убираем стандартную обводку фокуса */
}

.modal-content {
  background: #141414;
  border: 1px solid rgba(179, 0, 0, 0.4);
  border-radius: 6px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 40px;
  position: relative;
  box-shadow: 0 10px 40px rgba(0,0,0,0.7);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  line-height: 1;
}

.modal-close:hover {
  color: #b30000;
}

.modal-header {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
}

.modal-tag {
  background: #b30000;
  color: white;
  padding: 4px 10px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.modal-date {
  color: #888;
  font-size: 13px;
}

.modal-title {
  color: white;
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 25px;
  line-height: 1.3;
}

.modal-image-wrapper {
  margin-bottom: 25px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #333;
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
}

.modal-body {
  color: #ccc;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 30px;
}

.modal-body :deep(p) { margin: 0 0 15px; }
.modal-body :deep(ul) { margin: 0 0 15px 20px; padding: 0; }
.modal-body :deep(li) { margin: 5px 0; }
.modal-body :deep(b) { color: #fff; }

.modal-footer {
  padding-top: 20px;
  border-top: 1px solid #333;
}

.back-btn {
  background: transparent;
  border: 2px solid #b30000;
  color: #b30000;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.back-btn:hover {
  background: #b30000;
  color: white;
}

/* Анимация появления/исчезновения */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Адаптивность */
@media (max-width: 768px) {
  .modal-content { padding: 25px; }
  .modal-title { font-size: 22px; }
  .modal-image { max-height: 250px; object-fit: cover; }
}

@media (max-width: 480px) {
  .modal-content { padding: 20px; }
  .card-meta { margin-right: 0; }
}
</style>