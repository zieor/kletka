<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const toggleLang = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
  localStorage.setItem('lang', locale.value)
}
</script>

<template>
  <div class="url-but">
    <div class="nav-center">
      <RouterLink to="/illustrations" class="navigation">{{ $t('nav.illustrations') }}</RouterLink>
      <RouterLink to="/" class="navigation">
        <img src="../images/header/header_icon.svg" height="34" width="34" alt="logo"/>
      </RouterLink>
      <RouterLink to="/levels" class="navigation">{{ $t('nav.levels') }}</RouterLink>
    </div>

    <div class="right-section">
      <!-- Кнопка переключения языка -->
      <button class="lang-btn" @click="toggleLang">
        {{ locale === 'ru' ? 'EN' : 'RU' }}
      </button>
      <RouterLink to="#" class="navigation" id="account">{{ $t('nav.account') }}</RouterLink>
    </div>
  </div>
</template>



<style>
.url-but {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
}

.nav-center {
  grid-column: 2;
  display: flex;
  gap: 40px;
  align-items: center;
}

.right-section {
  grid-column: 3;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 21px;
}

.lang-btn {
  background: transparent;
  border: 2px solid #B00100;
  color: #B00100;
  padding: 6px 16px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.lang-btn:hover {
  background: #B00100;
  color: white;
}

.navigation {
  text-decoration: none;
  cursor: pointer;
  color: #B00100;
}

.navigation:hover {
  opacity: 0.8;
}

</style>