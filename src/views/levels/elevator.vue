<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="location-detail-page">

    <div class="page-header">
      <h1 class="page-title">{{ $t('elevator.title') }}</h1>
    </div>


    <div class="page-content">
      <div class="content-container">


        <section class="info-section">
          <h2 class="section-title center">{{ $t('elevator.kletTitle') }}</h2>

          <div class="info-body">
            <div class="info-text">
              <p>{{ $t('elevator.kletDesc1') }}</p>
              <p>{{ $t('elevator.kletDesc2') }}</p>
              <p>{{ $t('elevator.kletDesc3') }}</p>
              <p>{{ $t('elevator.kletDesc4') }}</p>
              <p>{{ $t('elevator.kletDesc5') }}</p>
            </div>

            <div class="info-image">
              <img
                  src="../../../public/images/levels/elevator.png"
                  :alt="$t('elevator.kletTitle')"
              >
            </div>
          </div>
        </section>


        <section class="info-section facts-section">
          <h2 class="section-title">{{ $t('elevator.factsTitle') }}</h2>

          <div class="facts-list">
            <p class="fact-text">{{ $t('elevator.fact1') }}</p>
            <p class="fact-text">{{ $t('elevator.fact2') }}</p>
            <p class="fact-text">{{ $t('elevator.fact3') }}</p>
            <p class="fact-text">{{ $t('elevator.fact4') }}</p>
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
  text-align: left;
}


.section-title.center {
  text-align: center;
}


.info-body {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.info-text {
  flex: 1;
  max-width: 600px;
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


.info-image {
  flex-shrink: 0;
  width: 450px;
  height: 280px;
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


.facts-section {
  margin-top: 40px;
}

.facts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 900px;
}

.fact-text {
  color: #a8a8a8;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  text-align: left;
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
  .info-text p { font-size: 14px; }
  .fact-text { font-size: 14px; }
}
</style>