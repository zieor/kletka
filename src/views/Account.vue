<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '@/utils/auth.js'

const router = useRouter()
const auth = useAuth()

if (!auth.isLoggedIn()) {
  router.push('/')
}

const handleLogout = () => {
  auth.logout()
  router.push('/')
}
</script>

<template>
  <div class="account-page">
    <div class="page-header">
      <!-- ✅ Теперь заголовок берётся из JSON -->
      <h1 class="page-title">{{ $t('account.title') }}</h1>
    </div>

    <div class="page-content">
      <div class="profile-card">
        <div class="avatar-wrapper">
          <img
              src="https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"
              alt="Steam Avatar"
              class="avatar"
          >
          <span class="steam-badge">Steam</span>
        </div>

        <h2 class="username">{{ auth.username() }}</h2>
        <p class="steam-id">Steam ID: 00000000000000001</p>
        <p class="status">{{ $t('account.online') }}</p>

        <button class="logout-btn" @click="handleLogout">{{ $t('account.logout') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили остались прежними, добавь их если не копируешь весь файл */
.account-page
{ width: 100%;
  background: #090909;
 }
.page-header { background: linear-gradient(to right, #b30000, #4d0000); width: 100%; padding: 30px 0; }
.page-title { color: white; font-size: 36px; font-weight: 700; max-width: 1200px; margin: 0 auto; padding: 0 20px; text-align: center; text-transform: uppercase; }
.page-content { background: radial-gradient(#1e1e1e, #090909); padding: 60px 20px; display: flex; justify-content: center; }
.profile-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 40px; text-align: center; max-width: 400px; width: 100%; }
.avatar-wrapper { position: relative; width: 120px; height: 120px; margin: 0 auto 20px; }
.avatar { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 3px solid #b30000; }
.steam-badge { position: absolute; bottom: 0; right: 0; background: #1b2838; color: #66c0f4; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 4px; border: 1px solid #66c0f4; }
.username { color: white; font-size: 28px; margin: 0 0 10px; }
.steam-id { color: #777; font-size: 14px; margin: 0 0 8px; font-family: monospace; }
.status { color: #4caf50; font-size: 15px; margin: 0 0 30px; }
.logout-btn { background: transparent; border: 2px solid #b30000; color: #b30000; padding: 10px 24px; font-weight: bold; font-size: 15px; border-radius: 4px; cursor: pointer; transition: all 0.2s ease; }
.logout-btn:hover { background: #b30000; color: white; }
</style>