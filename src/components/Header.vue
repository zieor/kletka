<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuth } from '@/utils/auth.js'

const { locale, t } = useI18n()
const router = useRouter()
const auth = useAuth()

// Состояние модального окна
const showModal = ref(false)
const isRegister = ref(false)
const form = ref({ email: '', password: '', username: '', confirm: '' })
const error = ref('')

// Переключение языка
const toggleLang = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
  localStorage.setItem('lang', locale.value)
}

// Открытие модалки вместо мгновенного входа
const handleAccountClick = () => {
  if (auth.isLoggedIn()) {
    router.push('/account')
  } else {
    isRegister.value = false
    form.value = { email: '', password: '', username: '', confirm: '' }
    error.value = ''
    showModal.value = true
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

// Обработка формы
const handleSubmit = () => {
  error.value = ''
  if (isRegister.value) {
    if (!form.value.email || !form.value.password || !form.value.username) {
      error.value = t('auth.fillAll')
      return
    }
    if (form.value.password !== form.value.confirm) {
      error.value = t('auth.passwordsMismatch')
      return
    }
    const res = auth.register(form.value.email, form.value.password, form.value.username)
    if (res.success) { closeModal(); router.push('/account') }
    else error.value = res.error
  } else {
    if (!form.value.email || !form.value.password) {
      error.value = t('auth.fillAll')
      return
    }
    const res = auth.login(form.value.email, form.value.password)
    if (res.success) { closeModal(); router.push('/account') }
    else error.value = res.error
  }
}

// Закрытие по Escape
const handleKeydown = (e) => { if (e.key === 'Escape') closeModal() }
</script>

<template>
  <!-- === ВАШ ХЕДЕР (БЕЗ ИЗМЕНЕНИЙ В СТРУКТУРЕ) === -->
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

  <!-- === МОДАЛЬНОЕ ОКНО ВХОДА/РЕГИСТРАЦИИ === -->
  <Transition name="modal">
    <div v-if="showModal" class="modal-overlay" @click="closeModal" @keydown="handleKeydown" tabindex="-1">
      <div class="modal-content auth-modal" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>

        <h3 class="modal-title">{{ isRegister ? $t('auth.registerTitle') : $t('auth.loginTitle') }}</h3>

        <form @submit.prevent="handleSubmit" class="auth-form">
          <div class="form-group">
            <label>{{ $t('auth.email') }} *</label>
            <input v-model="form.email" type="email" required :placeholder="$t('auth.emailPlaceholder')" class="form-input">
          </div>

          <div v-if="isRegister" class="form-group">
            <label>{{ $t('auth.username') }} *</label>
            <input v-model="form.username" type="text" required :placeholder="$t('auth.usernamePlaceholder')" class="form-input">
          </div>

          <div class="form-group">
            <label>{{ $t('auth.password') }} *</label>
            <input v-model="form.password" type="password" required :placeholder="$t('auth.passwordPlaceholder')" class="form-input">
          </div>

          <div v-if="isRegister" class="form-group">
            <label>{{ $t('auth.confirmPassword') }} *</label>
            <input v-model="form.confirm" type="password" required :placeholder="$t('auth.confirmPlaceholder')" class="form-input">
          </div>

          <p v-if="error" class="form-error">{{ error }}</p>

          <div class="auth-actions">
            <button type="button" class="btn-switch" @click="isRegister = !isRegister">
              {{ isRegister ? $t('auth.haveAccount') : $t('auth.noAccount') }}
            </button>
            <button type="submit" class="btn-submit">
              {{ isRegister ? $t('auth.registerBtn') : $t('auth.loginBtn') }}
            </button>
          </div>
        </form>

        <p class="auth-note">{{ $t('auth.demoNote') }}</p>
      </div>
    </div>
  </Transition>
</template>

<style>
/* === ВАШИ СТИЛИ ХЕДЕРА (ОСТАВЛЕНЫ БЕЗ ИЗМЕНЕНИЙ) === */
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

/* === СТИЛИ МОДАЛЬНОГО ОКНА (ДОБАВЛЕНЫ) === */
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

.auth-modal {
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
  line-height: 1;
}
.modal-close:hover { color: #b30000; }

.modal-title {
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 25px;
  text-align: center;
}

.auth-form {
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
.form-input::placeholder { color: #666; }

.form-error {
  color: #ff6b6b;
  font-size: 13px;
  margin: -10px 0 5px;
  text-align: center;
}

.auth-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

.btn-switch {
  background: none;
  border: none;
  color: #888;
  font-size: 13px;
  cursor: pointer;
  text-decoration: underline;
}
.btn-switch:hover { color: #fff; }

.btn-submit {
  background: #b30000;
  border: 2px solid #b30000;
  color: #fff;
  padding: 14px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-submit:hover { background: #900; }

.auth-note {
  color: #666;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
}

.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

@media (max-width: 480px) {
  .auth-modal { padding: 25px 20px; }
}
</style>