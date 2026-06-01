<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/utils/auth.js'

const router = useRouter()
const auth = useAuth()

const showEditModal = ref(false)
const editForm = ref({
  username: auth.user()?.username || '',
  email: auth.user()?.email || ''
})

if (!auth.isLoggedIn()) {
  router.push('/')
}

const handleLogout = () => {
  auth.logout()
  router.push('/')
}

const openEditModal = () => {
  editForm.value = {
    username: auth.user()?.username || '',
    email: auth.user()?.email || ''
  }
  showEditModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeEditModal = () => {
  showEditModal.value = false
  document.body.style.overflow = ''
}

const saveProfile = () => {
  if (!editForm.value.username || !editForm.value.email) {
    alert('Заполните все поля')
    return
  }

  const result = auth.updateProfile({
    username: editForm.value.username,
    email: editForm.value.email
  })

  if (result.success) {
    closeEditModal()
  } else {
    alert('Ошибка при сохранении')
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') closeEditModal()
}
</script>

<template>
  <div class="account-page">
    <div class="page-header">
      <h1 class="page-title">{{ $t('account.title') }}</h1>
    </div>

    <div class="page-content">
      <div class="profile-card">
        <div class="avatar-wrapper">
          <span class="avatar-placeholder">{{ auth.user()?.username?.[0]?.toUpperCase() || 'U' }}</span>
          <span class="steam-badge">{{ $t('account.registered') }}</span>
        </div>

        <h2 class="username">{{ auth.user()?.username }}</h2>
        <p class="user-email">{{ auth.user()?.email }}</p>
        <p class="status">{{ $t('account.online') }}</p>

        <div class="profile-actions">
          <button class="edit-btn" @click="openEditModal">{{ $t('account.editProfile') }}</button>
          <button class="logout-btn" @click="handleLogout">{{ $t('account.logout') }}</button>
        </div>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="showEditModal" class="modal-overlay" @click="closeEditModal" @keydown="handleKeydown" tabindex="-1">
        <div class="modal-content edit-modal" @click.stop>
          <button class="modal-close" @click="closeEditModal">&times;</button>

          <h3 class="modal-title">{{ $t('account.editProfile') }}</h3>

          <form @submit.prevent="saveProfile" class="edit-form">
            <div class="form-group">
              <label>{{ $t('auth.username') }}</label>
              <input v-model="editForm.username" type="text" required class="form-input">
            </div>

            <div class="form-group">
              <label>{{ $t('auth.email') }}</label>
              <input v-model="editForm.email" type="email" required class="form-input">
            </div>

            <div class="edit-actions">
              <button type="button" class="btn-cancel" @click="closeEditModal">Отмена</button>
              <button type="submit" class="btn-save">Сохранить</button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.account-page {
  width: 100%;
  background: #090909;
  min-height: 100vh;
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
  text-align: center;
  text-transform: uppercase;
}

.page-content {
  background: radial-gradient(#1e1e1e, #090909);
  padding: 60px 20px;
  display: flex;
  justify-content: center;
}

.profile-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.avatar-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #b30000, #4d0000);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
  font-weight: 700;
  border: 3px solid rgba(255,255,255,0.1);
}

.steam-badge {
  position: absolute;
  bottom: 0; right: 0;
  background: #1a1a1a;
  color: #b30000;
  font-size: 11px;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid #b30000;
}

.username {
  color: white;
  font-size: 28px;
  margin: 0 0 5px;
}

.user-email {
  color: #888;
  font-size: 14px;
  margin: 0 0 15px;
}

.status {
  color: #4caf50;
  font-size: 15px;
  margin: 0 0 30px;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.edit-btn, .logout-btn {
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-btn {
  background: transparent;
  border: 2px solid #666;
  color: #ccc;
}
.edit-btn:hover { border-color: #fff; color: #fff; }

.logout-btn {
  background: transparent;
  border: 2px solid #b30000;
  color: #b30000;
}
.logout-btn:hover { background: #b30000; color: white; }


.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
}

.edit-modal {
  background: #141414;
  border: 1px solid rgba(179, 0, 0, 0.4);
  border-radius: 6px;
  max-width: 420px;
  width: 100%;
  padding: 35px 30px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px; right: 20px;
  background: none; border: none;
  color: #fff; font-size: 32px;
  cursor: pointer; width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  transition: color 0.2s;
}
.modal-close:hover { color: #b30000; }

.modal-title {
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 25px;
  text-align: center;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.form-input {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 12px 15px;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}
.form-input:focus { border-color: #b30000; }

.edit-actions {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.btn-cancel, .btn-save {
  flex: 1;
  padding: 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: transparent;
  border: 2px solid #666;
  color: #ccc;
}
.btn-cancel:hover { border-color: #fff; color: #fff; }

.btn-save {
  background: #b30000;
  border: 2px solid #b30000;
  color: #fff;
}
.btn-save:hover { background: #900; }

.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

@media (max-width: 480px) {
  .profile-card { padding: 30px 20px; }
  .username { font-size: 24px; }
  .edit-modal { padding: 25px 20px; }
}
</style>