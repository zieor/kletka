<script setup>
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
</script>

<template>
  <div class="news-section">
    <!-- Верхний блок -->
    <div class="news1">
      <div class="news-box">
        <p class="news-text">{{ $t('news.title') }}</p>
      </div>
    </div>

    <!-- Нижний блок с карточками -->
    <div class="news-body">
      <div class="news-cards">
        <div
            v-for="(news, idx) in tm('news.cards')"
            :key="idx"
            class="news-card"
        >
          <img src="@/images/mainHome/news1.png" :alt="news.title" class="card-image" />
          <div class="card-meta">
            <span class="card-tag">{{ $t('news.tag') }}</span>
            <span class="card-divider">|</span>
            <span class="card-date">01.01.1990</span>
          </div>
          <h3 class="card-title">{{ news.title }}</h3>
          <p class="card-subtitle">{{ news.subtitle }}</p>
        </div>
      </div>
    </div>
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
  margin-right: 16px;
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
</style>