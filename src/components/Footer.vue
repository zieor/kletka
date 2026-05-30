<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Состояние модальных окон
const activeModal = ref(null)
const showCookieBanner = ref(false)

const openModal = (type) => {
  activeModal.value = type
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = ''
}

const handleKeydown = (e) => {
  if (e.key === 'Escape') closeModal()
}

// Cookie: проверка согласия
onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    showCookieBanner.value = true
  }
})

const acceptCookies = (type) => {
  localStorage.setItem('cookieConsent', type)
  showCookieBanner.value = false
}
</script>

<template>
  <footer class="footer">
    <!-- Контейнер только для контента, фон на весь экран -->
    <div class="footer-content">
      <div class="avtors">
        <img src="../images/imageForFooter/avtor.png" height="80" width="80" alt="Author" />
        <p class="avtor">Callback <br> ln404</p>
      </div>

      <div class="prava">
        <p class="prava1">{{ $t('footer.copyright') }}</p>
      </div>

      <div class="polit">
        <button class="polit-btn" @click="openModal('privacy')">{{ $t('footer.privacy') }}</button>
        <button class="polit-btn" @click="openModal('terms')">{{ $t('footer.terms') }}</button>
        <button class="polit-btn" @click="openModal('cookies')">{{ $t('footer.cookies') }}</button>
      </div>

      <div class="polit2">
        <a href="https://youtube.com" target="_blank" rel="noopener">
          <img src="../images/imageForFooter/youtube.svg" height="42" width="42" alt="YouTube" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener">
          <img src="../images/imageForFooter/discord.svg" height="42" width="42" alt="Discord" />
        </a>
        <a href="https://store.steampowered.com/app/1699480/KLETKA/" target="_blank" rel="noopener">
          <img src="../images/imageForFooter/steam.svg" height="42" width="42" alt="Steam" />
        </a>
      </div>
    </div>

    <!-- === МОДАЛЬНЫЕ ОКНА === -->
    <Transition name="modal">
      <div v-if="activeModal" class="modal-overlay" @click="closeModal" @keydown="handleKeydown" tabindex="-1">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">&times;</button>

          <h3 class="modal-title">
            {{ activeModal === 'privacy' ? $t('footerModals.privacy.title') :
              activeModal === 'terms' ? $t('footerModals.terms.title') :
                  $t('footerModals.cookies.title') }}
          </h3>

          <div class="modal-body">
            <template v-if="activeModal === 'privacy'">
              <p>{{ $t('footerModals.privacy.p1') }}</p>
              <p>{{ $t('footerModals.privacy.p2') }}</p>
              <p>{{ $t('footerModals.privacy.p3') }}</p>
            </template>

            <template v-else-if="activeModal === 'terms'">
              <p>{{ $t('footerModals.terms.p1') }}</p>
              <p>{{ $t('footerModals.terms.p2') }}</p>
              <p>{{ $t('footerModals.terms.p3') }}</p>
            </template>

            <template v-else>
              <p>{{ $t('footerModals.cookies.desc') }}</p>

              <div class="cookie-options">
                <label class="cookie-option">
                  <input type="checkbox" checked disabled>
                  <span>{{ $t('footerModals.cookies.necessary') }}</span>
                </label>
                <label class="cookie-option">
                  <input type="checkbox" id="analyticsCookie">
                  <span>{{ $t('footerModals.cookies.analytics') }}</span>
                </label>
              </div>

              <div class="cookie-actions">
                <button class="cookie-btn reject" @click="acceptCookies('minimal')">
                  {{ $t('footerModals.cookies.reject') }}
                </button>
                <button class="cookie-btn accept" @click="acceptCookies('all')">
                  {{ $t('footerModals.cookies.accept') }}
                </button>
              </div>
            </template>
          </div>

          <div class="modal-footer">
            <button class="back-btn" @click="closeModal">← {{ $t('footerModals.back') }}</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- === BANNER ДЛЯ COOKIE === -->
    <Transition name="slide">
      <div v-if="showCookieBanner" class="cookie-banner">
        <div class="cookie-banner-content">
          <p class="cookie-banner-text">
            {{ $t('footerModals.banner.text') }}
            <button class="cookie-banner-link" @click="openModal('cookies')">
              {{ $t('footerModals.banner.details') }}
            </button>
          </p>
          <div class="cookie-banner-actions">
            <button class="cookie-banner-btn accept" @click="acceptCookies('all')">
              {{ $t('footerModals.banner.accept') }}
            </button>
            <button class="cookie-banner-btn settings" @click="openModal('cookies')">
              {{ $t('footerModals.banner.settings') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </footer>
</template>

<style scoped>
/* === ФУТЕР НА ВСЮ ШИРИНУ === */
.footer {
  width: 100%;
  background: #0a0a0a;
  color: #fff;
  padding: 40px 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Контент центрирован, но не на всю ширину */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.avtors {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 10px;
}

.avtors img {
  flex-shrink: 0;
  border-radius: 50%;
}

.avtor {
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  color: #fff;
}

.prava {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  text-align: center;
  max-width: 800px;
  margin: 0;
}

.prava1 {
  margin: 0;
  line-height: 1.6;
}

.polit {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin: 10px 0;
}

.polit-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  transition: color 0.2s;
}

.polit-btn:hover {
  color: #b30000;
}

.polit2 {
  display: flex;
  gap: 25px;
  padding: 15px 0;
}

.polit2 a {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.polit2 a:hover {
  opacity: 1;
}

/* === МОДАЛЬНЫЕ ОКНА === */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
  outline: none;
}

.modal-content {
  background: #1a1a1a;
  border: 1px solid rgba(179, 0, 0, 0.4);
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 30px;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  line-height: 1;
}

.modal-close:hover {
  color: #b30000;
}

.modal-title {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-body {
  color: #ccc;
  font-size: 14px;
  line-height: 1.6;
}

.modal-body p {
  margin: 0 0 12px;
}

.cookie-options {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cookie-option {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.cookie-option input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cookie-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: flex-end;
}

.cookie-btn {
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.cookie-btn.reject {
  background: transparent;
  border: 2px solid #666;
  color: #ccc;
}

.cookie-btn.reject:hover {
  border-color: #fff;
  color: #fff;
}

.cookie-btn.accept {
  background: #b30000;
  border: 2px solid #b30000;
  color: #fff;
}

.cookie-btn.accept:hover {
  background: #900;
}

.modal-footer {
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.back-btn {
  background: transparent;
  border: 2px solid #b30000;
  color: #b30000;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.back-btn:hover {
  background: #b30000;
  color: #fff;
}

/* === BANNER ДЛЯ COOKIE === */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #141414;
  border-top: 1px solid rgba(179, 0, 0, 0.3);
  padding: 12px 20px;
  z-index: 9998;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.4);
}

.cookie-banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0 20px;
}

.cookie-banner-text {
  color: #ccc;
  font-size: 13px;
  margin: 0;
  line-height: 1.4;
}

.cookie-banner-link {
  background: none;
  border: none;
  color: #b30000;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  font: inherit;
}

.cookie-banner-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.cookie-banner-btn {
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

.cookie-banner-btn.accept {
  background: #b30000;
  border: 2px solid #b30000;
  color: #fff;
}

.cookie-banner-btn.accept:hover {
  background: #900;
}

.cookie-banner-btn.settings {
  background: transparent;
  border: 2px solid #666;
  color: #ccc;
}

.cookie-banner-btn.settings:hover {
  border-color: #fff;
  color: #fff;
}

/* Анимации */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}

/* Адаптивность */
@media (max-width: 768px) {
  .polit {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .cookie-banner-content {
    flex-direction: column;
    text-align: center;
  }

  .cookie-banner-actions {
    width: 100%;
    justify-content: center;
  }

  .modal-content {
    padding: 25px 20px;
  }

  .cookie-actions {
    flex-direction: column;
    width: 100%;
  }

  .cookie-btn {
    width: 100%;
  }
}


</style>