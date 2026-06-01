<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="location-detail-page">

    <div class="page-header">
      <h1 class="page-title">{{ $t('residential.title') }}</h1>
    </div>


    <div class="page-content">
      <div class="content-container">


        <section class="info-section">
          <h2 class="section-title center">{{ $t('residential.infoTitle') }}</h2>
          <div class="info-body">
            <div class="info-text">
              <p>{{ $t('residential.infoDesc1') }}</p>
              <p>{{ $t('residential.infoDesc2') }}</p>
            </div>
            <div class="info-image">
              <img src="../../../public/images/levels/res1.png" width="552" height="311" alt="Residential Info">
            </div>
          </div>
        </section>


        <section class="info-section">
          <h2 class="section-title">{{ $t('residential.regularTitle') }}</h2>
          <div class="info-text-full">
            <p>{{ $t('residential.regularDesc1') }}</p>
            <p>{{ $t('residential.regularDesc2') }}</p>
          </div>
        </section>

        <section class="info-section">
          <h2 class="section-title">{{ $t('residential.floodTitle') }}</h2>
          <div class="info-text-full">
            <p>{{ $t('residential.floodDesc1') }}</p>
          </div>
        </section>

        <section class="info-section">
          <h2 class="section-title">{{ $t('residential.schizoTitle') }}</h2>
          <div class="info-body">
            <div class="info-text">
              <p>{{ $t('residential.schizoDesc1') }}</p>
              <p class="quote-text">Из записей в игре: {{ $t('residential.schizoQuote') }}</p>
            </div>
            <div class="info-image">
              <img src="../../../public/images/levels/res2.png" width="552" height="311" alt="Schizophasia">
            </div>
          </div>
        </section>

        <section class="info-section">
          <h2 class="section-title">{{ $t('residential.thunderTitle') }}</h2>
          <div class="info-text-full">
            <p>{{ $t('residential.thunderDesc1') }}</p>
            <p class="quote-text">Из записей в игре: {{ $t('residential.thunderQuote') }}</p>
          </div>
        </section>

        <section class="info-section">
          <h2 class="section-title">{{ $t('residential.antigravTitle') }}</h2>
          <div class="info-text-full">
            <p>{{ $t('residential.antigravDesc1') }}</p>
            <p class="quote-text">Из записей в игре: {{ $t('residential.antigravQuote') }}</p>
          </div>
        </section>

        <section class="info-section">
          <h2 class="section-title">{{ $t('residential.postTitle') }}</h2>
          <div class="info-text-full">
            <p v-html="$t('residential.postDesc1')"></p>
            <p class="quote-text">Из записей в игре: <span v-html="$t('residential.postQuote')"></span></p>
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
  max-width: 550px;
}

.info-text-full {
  max-width: 900px;
}

.info-text p,
.info-text-full p {
  color: #a8a8a8;
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 15px 0;
}

.info-text p:last-child,
.info-text-full p:last-child {
  margin-bottom: 0;
}

.quote-text {
  color: #777;
  font-size: 13px;
  margin-top: 15px;
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
  .info-text p,
  .info-text-full p { font-size: 14px; }
  .quote-text { font-size: 12px; }
}
</style>