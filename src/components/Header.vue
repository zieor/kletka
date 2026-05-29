<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuth } from '@/utils/auth.js'

const { locale } = useI18n()
const router = useRouter()
const auth = useAuth()

const toggleLang = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
  localStorage.setItem('lang', locale.value)
}

const handleAccountClick = () => {
  if (!auth.isLoggedIn()) {
    auth.login()
  }
  router.push('/account')
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
      <button class="lang-btn" @click="toggleLang">
        {{ locale === 'ru' ? 'EN' : 'RU' }}
      </button>

      <button class="account-btn" @click="handleAccountClick">
        {{ auth.isLoggedIn() ? `${$t('nav.hello')}, ${auth.username()}` : $t('nav.account') }}
      </button>
    </div>
  </div>
</template>

<style>
/* Твои старые стили хедера остаются без изменений */
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

/* Стили для кнопки аккаунта */
.account-btn {
  background: none;
  border: none;
  color: #B00100;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: opacity 0.2s ease;
}

.account-btn:hover {
  opacity: 0.8;
}
</style>