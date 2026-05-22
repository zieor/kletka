<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="location-detail-page">
    <!-- Красная шапка -->
    <div class="page-header">
      <h1 class="page-title">{{ $t('gigakhrushch.title') }}</h1>
    </div>

    <!-- Контент -->
    <div class="page-content">
      <div class="content-container">

        <!-- Секция Общая информация -->
        <section class="info-section">
          <h2 class="section-title">{{ $t('gigakhrushch.infoTitle') }}</h2>

          <div class="info-body">
            <div class="info-text">
              <p>{{ $t('gigakhrushch.p1') }}</p>
              <p>{{ $t('gigakhrushch.p2') }}</p>
              <p>{{ $t('gigakhrushch.p3') }}</p>
            </div>

            <div class="info-image">
              <!-- Замените src на путь к вашему изображению -->
              <img
                  src="@/images/locations/gigakhrushch_info.png"
                  :alt="$t('gigakhrushch.title')"
              >
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* === Обёртка страницы === */
.location-detail-page {
  width: 100%;
  background: #090909;
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

/* === Секция информации === */
.info-section {
  margin-bottom: 40px;
}

.section-title {
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 25px 0;
  text-transform: uppercase;
}

/* Тело секции: текст слева, картинка справа */
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

/* Изображение справа */
.info-image {
  flex-shrink: 0;
  width: 450px;
  height: 250px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: contrast(1.1) brightness(0.9);
}

/* === Адаптивность === */
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
}

@media (max-width: 768px) {
  .page-title { font-size: 28px; }
  .section-title { font-size: 19px; }
  .info-text p { font-size: 14px; }
}
</style>