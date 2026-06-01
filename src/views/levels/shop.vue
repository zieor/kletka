<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <div class="location-detail-page">
    <div class="page-header">
      <h1 class="page-title">{{ $t('shop.title') }}</h1>
    </div>

    <div class="page-content">
      <div class="content-container">

        <section class="info-section">
          <h2 class="section-title">{{ $t('shop.subtitle') }}</h2>

          <div class="info-body">
            <div class="info-text">
              <p>{{ $t('shop.description') }}</p>

              <h3 class="list-title">{{ $t('shop.itemsTitle') }}</h3>
              <ul class="items-list">
                <li v-for="(item, index) in tm('shop.items')" :key="index">
                  {{ item }}
                </li>
              </ul>

              <p class="facts-text">{{ $t('shop.facts') }}</p>
            </div>

            <div class="info-image">
              <img src="../../../public/images/levels/shop_bottle.png" width="552" height="311" alt="Shop Floor">
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
.location-detail-page {
  width: 100%;
  background: #090909;
}

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

.info-section {
  margin-bottom: 50px;
}

.section-title {
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 25px 0;
  text-transform: uppercase;
  text-align: center;
}

.info-body {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.info-text {
  flex: 1;
  max-width: 550px;
}

.info-text p {
  color: #a8a8a8;
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 15px 0;
}

.info-text p:last-child {
  margin-bottom: 0;
}

.list-title {
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
}

.items-list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 15px 0;
}

.items-list li {
  color: #a8a8a8;
  font-size: 15px;
  line-height: 1.8;
  position: relative;
  padding-left: 15px;
}

.items-list li::before {
  content: "-";
  position: absolute;
  left: 0;
  color: #a8a8a8;
}

.facts-text {
  color: #999;
  font-size: 13px;
  margin-top: 20px;
  font-style: italic;
}

.info-image {
  flex-shrink: 0;
  width: 552px;
  height: 311px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  .info-body {
    flex-direction: column;
  }
  .info-text {
    max-width: 100%;
  }
  .info-image {
    width: 100%;
    height: auto;
  }
  .page-title { font-size: 28px; }
  .section-title { font-size: 19px; }
}

@media (max-width: 768px) {
  .page-title { font-size: 24px; }
  .section-title { font-size: 18px; }
  .info-text p, .items-list li { font-size: 14px; }
  .facts-text { font-size: 12px; }
}
</style>