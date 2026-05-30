<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>

  <div class="locations-page">
    <!-- Красная шапка -->
    <div class="header">
      <h1 class="header-title">{{ $t('locations.title') }}</h1>
    </div>

    <!-- Основной контент -->
    <div class="content-wrapper">
      <div class="content-container">

        <!-- ЛЕВАЯ СТОРОНА: Список -->
        <div class="left-column">
          <!-- Секция 1 -->
          <div class="section">
            <h2 class="section-title">{{ $t('locations.main') }}</h2>
            <div class="links-group">
              <RouterLink to="/levels/gigakhrushch" class="link">
                {{ $t('locations.gigakhrushch') }}
              </RouterLink>

              <h3 class="sub-title">{{ $t('locations.elevator') }}</h3>
              <RouterLink to="/levels/elevator" class="link">{{ $t('locations.cage') }}</RouterLink>
            </div>
          </div>

          <!-- Секция 2 -->
          <div class="section">
            <h2 class="section-title">{{ $t('locations.floors') }}</h2>
            <div class="links-group">
              <RouterLink to="/levels/residential" class="link">{{ $t('locations.residentialBlock') }}</RouterLink>
              <RouterLink to="/levels/anomalous" class="link">{{ $t('locations.anomalousFloors') }}</RouterLink>
              <RouterLink to="/levels/shop" class="link">{{ $t('locations.shopFloor') }}</RouterLink>
              <RouterLink to="/levels/street" class="link">{{ $t('locations.street') }}</RouterLink>
            </div>
          </div>
        </div>

        <!-- ПРАВАЯ СТОРОНА: ??? -->
        <div class="right-column">
          <RouterLink to="/levels/secret" class="mystery-link">{{ $t('locations.mystery') }}</RouterLink>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.locations-page {
  width: 100%;
  background: #090909;
}

.header {
  background: linear-gradient(to right, #b30000, #4d0000);
  width: 100%;
  padding: 30px 0;
}

.header-title {
  color: white;
  font-size: 36px;
  font-weight: 700;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-wrapper {
  background: radial-gradient(#1e1e1e, #090909);
  padding: 40px 0 50px;
  width: 100%;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start; /* Выравнивание по левому краю */
  align-items: flex-start;
  width: 100%;
  position: relative;
}

/* Левая колонка: строго слева, без растягивания */
.left-column {
  width: 65%; /* Фиксируем ширину, чтобы не уезжало в центр */
  text-align: left;
}

.section {
  margin-bottom: 35px;
}

.section-title {
  color: white;
  font-size: 22px;
  margin: 0 0 6px 0; /* Минимальный отступ до первой ссылки */
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
}

.links-group {
  display: flex;
  flex-direction: column;
  gap: 3px; /* Ссылки прижаты друг к другу */
}

.sub-title {
  color: white;
  font-size: 22px;
  margin: 18px 0 6px 0;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
}

.link {
  color: #888;
  text-decoration: none;
  font-size: 16px;
  padding: 2px 0;
  transition: 0.2s;
  width: fit-content;
  display: block;
}

.link:hover {
  color: white;
  transform: translateX(4px);
  text-decoration: underline;
}

/* Правая колонка: ??? прижата вправо */
.right-column {
  position: absolute;
  right: 20px;
  top: 10px;
}

.mystery-link {
  color: rgba(255, 255, 255, 0.08);
  font-size: 60px;
  font-weight: 700;
  opacity: 0.5;
  text-decoration: none;
  user-select: none;
  letter-spacing: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.mystery-link:hover {
  color: rgba(179, 0, 0, 0.7);
  text-shadow: 0 0 20px rgba(179, 0, 0, 0.5);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .left-column { width: 100%; }
  .right-column { position: static; width: 100%; text-align: center; margin-top: 20px; }
  .mystery-link { font-size: 48px; }
}
</style>