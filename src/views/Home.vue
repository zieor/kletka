<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t, tm } = useI18n()
const mainNews = computed(() => {
  const allNews = tm('news.cards')
  return allNews.slice(0, 3)
})
const getImageUrl = (path) => {
  if (!path) return ''
  return new URL(path.replace('@/', '/src/'), import.meta.url).href
}

const activeTab = ref('windows')
const selectedNews = ref(null)
const showPaymentModal = ref(false)
const paymentStep = ref('form')
const paymentMethod = ref('steam')

const openModal = (news) => {
  selectedNews.value = news
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  selectedNews.value = null
  document.body.style.overflow = ''
}
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    closeModal()
    closePayment()
  }
}

const openPayment = () => {
  showPaymentModal.value = true
  paymentStep.value = 'form'
  document.body.style.overflow = 'hidden'
}
const closePayment = () => {
  showPaymentModal.value = false
  paymentStep.value = 'form'
  document.body.style.overflow = ''
}
const submitPayment = () => {
  paymentStep.value = 'success'
  setTimeout(() => { closePayment() }, 3000)
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

const sysRequirements = computed(() => ({
  windows: {
    min: [
      { label: '', value: t('sysdata.arch') },
      { label: t('sysdata.os'), value: t('sysdata.win10') },
      { label: t('sysdata.cpu'), value: t('sysdata.i5') },
      { label: t('sysdata.ram'), value: t('sysdata.ram6') },
      { label: t('sysdata.gpu'), value: t('sysdata.gtx650') },
      { label: t('sysdata.dx'), value: t('sysdata.dx12') },
      { label: t('sysdata.storage'), value: t('sysdata.disk3') }
    ],
    rec: [
      { label: '', value: t('sysdata.arch') },
      { label: t('sysdata.os'), value: t('sysdata.win10') },
      { label: t('sysdata.cpu'), value: t('sysdata.i7') },
      { label: t('sysdata.ram'), value: t('sysdata.ram8') },
      { label: t('sysdata.gpu'), value: t('sysdata.gtx1080') },
      { label: t('sysdata.dx'), value: t('sysdata.dx12') },
      { label: t('sysdata.storage'), value: t('sysdata.disk4') }
    ],
    note: t('sysreq.note')
  },
  linux: {
    min: [
      { label: t('sysdata.os'), value: t('sysdata.ubuntu') },
      { label: t('sysdata.cpu'), value: t('sysdata.i5') },
      { label: t('sysdata.ram'), value: t('sysdata.ram6') },
      { label: t('sysdata.gpu'), value: t('sysdata.gtx650') },
      { label: t('sysdata.network'), value: t('sysdata.broadband') },
      { label: t('sysdata.storage'), value: t('sysdata.disk3') }
    ],
    rec: [
      { label: t('sysdata.os'), value: t('sysdata.ubuntu') },
      { label: t('sysdata.cpu'), value: t('sysdata.i7') },
      { label: t('sysdata.ram'), value: t('sysdata.ram8') },
      { label: t('sysdata.gpu'), value: t('sysdata.gtx1080') },
      { label: t('sysdata.network'), value: t('sysdata.broadband') },
      { label: t('sysdata.storage'), value: t('sysdata.disk4') }
    ]
  }
}))

const renderReqItem = (item) => {
  if (!item.label) return item.value
  return `<span>${item.label}:</span> ${item.value}`
}
</script>

<template>
  <div class="main">
    <div class="hero">
      <div class="hero-buttons">
        <a href="https://store.steampowered.com/app/1699480/KLET/">
          <button class="btn hero-btn">{{ $t('hero.demo') }}</button>
        </a>
        <button class="btn hero-btn" @click="openPayment">{{ $t('hero.buy') }}</button>
      </div>
    </div>

    <div class="news">
      <div class="news-container">
        <div class="news-header">
          <h2 class="news-title">{{ $t('news.title') }}</h2>
          <RouterLink to="/news" class="news-link">
            {{ $t('nav.newsLink') }}
            <span class="arrow"><img src="/images/mainHome/newsline.svg" alt="arrow"></span>
          </RouterLink>
        </div>
        <div class="news-cards">
          <div
              v-for="(news, idx) in mainNews"
              :key="idx"
              class="news-card"
              @click="openModal(news)"
          >
            <img :src="getImageUrl(news.image)" :alt="news.title" class="card-image" />
            <div class="card-meta">
              <span class="card-tag">{{ $t('news.tag') }}</span>
              <span class="card-divider">|</span>
              <span class="card-date">{{ news.date }}</span>
            </div>
            <h3 class="card-title">{{ news.title }}</h3>
            <p class="card-subtitle">{{ news.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-game">
      <div class="container">
        <h2 class="section-title">{{ $t('about.title') }}</h2>
        <div class="content-block">
          <h4 class="block-title">{{ $t('about.void') }}</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="/images/mainHome/void.png" alt="Void" />
            </div>
            <div class="block-text">
              <p>{{ $t('about.voidText') }}</p>
            </div>
          </div>
        </div>
        <div class="content-block">
          <h4 class="block-title">{{ $t('about.home') }}</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="/images/mainHome/home.png" alt="Home" />
            </div>
            <div class="block-text">
              <p>{{ $t('about.homeText') }}</p>
            </div>
          </div>
        </div>
        <div class="content-block">
          <h4 class="block-title">{{ $t('about.die') }}</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="/images/mainHome/die.png" alt="Die" />
            </div>
            <div class="block-text">
              <p>{{ $t('about.dieText') }}</p>
            </div>
          </div>
        </div>
        <div class="content-block">
          <h4 class="block-title">{{ $t('about.friend') }}</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="/images/mainHome/friend.png" alt="Friend" />
            </div>
            <div class="block-text">
              <p>{{ $t('about.friendText') }}</p>
            </div>
          </div>
        </div>

        <div class="sys-req-container">
          <h3 class="section-title">{{ $t('sysreq.title') }}</h3>
          <div class="tabs-header">
            <button
                v-for="platform in ['windows', 'linux']"
                :key="platform"
                class="tab-btn"
                :class="{ active: activeTab === platform }"
                @click="activeTab = platform"
            >
              {{ platform === 'windows' ? $t('sysreq.windows') : $t('sysreq.linux') }}
            </button>
          </div>
          <Transition name="fade" mode="out-in">
            <div :key="activeTab" class="tab-content active">
              <div class="req-columns">
                <div class="column min-req">
                  <div class="col-title">{{ $t('sysreq.min') }}</div>
                  <div
                      v-for="(item, idx) in sysRequirements[activeTab].min"
                      :key="idx"
                      class="req-item"
                      v-html="renderReqItem(item)"
                  ></div>
                </div>
                <div class="column rec-req">
                  <div class="col-title">{{ $t('sysreq.rec') }}</div>
                  <div
                      v-for="(item, idx) in sysRequirements[activeTab].rec"
                      :key="idx"
                      class="req-item"
                      v-html="renderReqItem(item)"
                  ></div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <div class="footer-text">
          <p v-html="$t('about.welcome')"></p>
        </div>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="selectedNews" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">&times;</button>
          <div class="modal-header">
            <span class="modal-tag">{{ $t('news.tag') }}</span>
            <span class="modal-date">{{ selectedNews.date }}</span>
          </div>
          <h2 class="modal-title">{{ selectedNews.title }}</h2>
          <div class="modal-image-wrapper">
            <img :src="getImageUrl(selectedNews.image)" :alt="selectedNews.title" class="modal-image">
          </div>
          <div class="modal-body" v-html="selectedNews.content"></div>
          <div class="modal-footer">
            <button class="back-btn" @click="closeModal">← Назад</button>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="modal">
      <div v-if="showPaymentModal" class="modal-overlay" @click="closePayment">
        <div class="modal-content payment-modal" @click.stop>
          <button class="modal-close" @click="closePayment">&times;</button>

          <template v-if="paymentStep === 'form'">
            <h3 class="modal-title">{{ $t('payment.title') }}</h3>
            <p class="payment-price">{{ $t('payment.price') }}</p>

            <form @submit.prevent="submitPayment" class="payment-form">
              <div class="form-group">
                <label>{{ $t('payment.email') }} *</label>
                <input type="email" required placeholder="name@gmail.com" class="form-input">
              </div>

              <div class="form-group">
                <label>{{ $t('payment.method') }}</label>
                <div class="payment-methods">
                  <label class="method-option">
                    <input type="radio" name="method" value="steam" v-model="paymentMethod">
                    <span>Steam</span>
                  </label>
                  <label class="method-option">
                    <input type="radio" name="method" value="card" v-model="paymentMethod">
                    <span>{{ $t('payment.card') }}</span>
                  </label>
                </div>
              </div>

              <div v-if="paymentMethod === 'card'" class="card-fields">
                <div class="form-group">
                  <label>{{ $t('payment.cardNumber') }}</label>
                  <input type="text" placeholder="0000 0000 0000 0000" class="form-input" maxlength="19">
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>{{ $t('payment.expiry') }}</label>
                    <input type="text" placeholder="MM/YY" class="form-input" maxlength="5">
                  </div>
                  <div class="form-group">
                    <label>{{ $t('payment.cvv') }}</label>
                    <input type="text" placeholder="123" class="form-input" maxlength="3">
                  </div>
                </div>
              </div>

              <div class="payment-actions">
                <button type="button" class="btn-cancel" @click="closePayment">
                  {{ $t('payment.cancel') }}
                </button>
                <button type="submit" class="btn-pay">
                  {{ $t('payment.confirm') }}
                </button>
              </div>
            </form>
          </template>

          <template v-else-if="paymentStep === 'success'">
            <div class="payment-success">
              <div class="success-icon">✓</div>
              <h3 class="modal-title">{{ $t('payment.successTitle') }}</h3>
              <p>{{ $t('payment.successText') }}</p>
              <p class="success-note">{{ $t('payment.successNote') }}</p>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
* { box-sizing: border-box; }
.main { margin: 0 auto; width: 100%; }

.hero {
  width: 100%;
  max-width: 1920px;
  height: 748px;
  background-image: url('/images/mainHome/hero1.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 120px;
}

.hero-buttons {
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
}

.btn {
  border: 2px solid transparent;
  outline: none;
  background-color: #4b333347;
  color: #b00100;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.9);
  width: 300px;
  height: 80px;
  font-size: 22px;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  font-weight: bold;
}

.btn:hover {
  border-color: #b00100;
  background-color: #4b333366;
}

.btn:focus-visible {
  outline: 2px solid #b00100;
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .hero {
    height: 500px;
    padding-bottom: 60px;
  }

  .hero-buttons {

    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 0 20px;
  }

  .btn {margin-top: 150px;
    width: 100%;
    max-width: 320px;
    height: 65px;
    font-size: 18px;
  }
}
.news { background: linear-gradient(to right, #b30000, #4d0000); min-height: 535px; padding: 40px 0 60px; display: flex; justify-content: center; }
.news-container { width: 100%; max-width: 1400px; padding: 0 40px; }
.news-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.news-title { color: #fff; font-weight: 700; font-size: 34px; letter-spacing: 1px; margin-left: 20px; }
.news-link { color: #fff; font-size: 16px; text-decoration: none; display: flex; align-items: center; gap: 6px; transition: opacity 0.2s ease; margin-right: 30px; }
.news-link:hover { opacity: 0.8; }
.arrow { display: inline-block; font-size: 14px; transition: transform 0.2s ease; }
.news-link:hover .arrow { transform: translateX(4px); }
.news-cards { display: flex; gap: 60px; }
.news-card { flex: 1; max-width: 360px; cursor: pointer; transition: transform 0.2s ease, opacity 0.2s ease; }
.news-card:hover { transform: translateY(-4px); opacity: 0.9; }
.card-image { width: 100%; height: 210px; object-fit: cover; display: block; filter: grayscale(100%) contrast(1.1); transition: filter 0.3s ease; }
.news-card:hover .card-image { filter: grayscale(80%) contrast(1.15); }
.card-meta { display: flex; align-items: center; gap: 8px; margin-top: 16px; margin-bottom: 8px; margin-right: 60px; }
.card-tag { font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: black; font-size: 16px; }
.card-divider { color: #fff; font-size: 13px; }
.card-date { color: #fff; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
.card-title { color: #fff; font-size: 17px; font-weight: 700; margin: 0 0 4px 0; line-height: 1.3; }
.card-subtitle { color: #fff; font-size: 14px; font-weight: 400; margin: 0; line-height: 1.4; opacity: 0.9; }

.about-game { color: white; background: radial-gradient(#1e1e1e, #090909); padding: 39px 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.section-title { font-size: 32px; font-weight: 700; margin: 0 0 30px 0; color: #fff; }
.content-block { margin-bottom: 60px; }
.block-title { font-size: 22px; font-weight: 700; margin: 0 0 20px 0; color: #fff; text-transform: uppercase; }
.block-body { display: flex; gap: 40px; }
.block-image { width: 50%; flex-shrink: 0; }
.block-image img { width: 100%; height: auto; display: block; border-radius: 4px; }
.block-text { flex: 1; display: flex; align-items: center; }
.block-text p { font-size: 16px; line-height: 1.6; color: #ccc; margin: 0; }
.footer-text { text-align: center; margin-top: 60px; padding-top: 40px; border-top: 1px solid #333; }
.footer-text p { font-size: 18px; font-weight: 600; color: #fff; margin: 0; }
:deep(.highlight) { color: #b30000; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(8px); }
@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

.tab-btn { background: transparent; border: none; color: #8f98a0; padding: 10px 20px; cursor: pointer; font-size: 14px; font-weight: bold; text-transform: uppercase; transition: all 0.2s; border-bottom: 3px solid transparent; margin-bottom: 30px; }
.tab-btn:hover { color: #ffffff; background-color: rgba(255, 255, 255, 0.05); }
.tab-btn.active { color: #b30000; border-bottom: 3px solid #b40000; background-color: rgba(0, 0, 0, 0.1); }
.tab-content { animation: fadeIn 0.3s; }
.req-columns { display: flex; gap: 40px; margin-bottom: 20px; }
.column { flex: 1; }
.col-title { color: #ffffff; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; font-size: 13px; letter-spacing: 1px; }
.req-item { margin-bottom: 5px; color: #b8b6b4; }
.req-item span:first-child { color: #acb2b8; font-weight: bold; display: inline-block; width: 180px; }

.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.92); display: flex; justify-content: center;
  align-items: center; z-index: 9999; padding: 20px; overflow-y: auto;
}
.modal-content {
  background: #141414; border: 1px solid rgba(179, 0, 0, 0.4);
  border-radius: 6px; max-width: 800px; width: 100%; max-height: 90vh;
  overflow-y: auto; padding: 40px; position: relative;
  box-shadow: 0 10px 40px rgba(0,0,0,0.7);
}
.modal-close {
  position: absolute; top: 15px; right: 20px; background: none; border: none;
  color: #fff; font-size: 32px; cursor: pointer; width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  transition: color 0.2s; line-height: 1;
}
.modal-close:hover { color: #b30000; }
.modal-header { display: flex; gap: 15px; margin-bottom: 20px; align-items: center; }
.modal-tag { background: #b30000; color: white; padding: 4px 10px; border-radius: 3px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
.modal-date { color: #888; font-size: 13px; }
.modal-title { color: white; font-size: 26px; font-weight: 700; margin: 0 0 25px; line-height: 1.3; }
.modal-image-wrapper { margin-bottom: 25px; border-radius: 4px; overflow: hidden; border: 1px solid #333; }
.modal-image { width: 100%; height: auto; display: block; }
.modal-body { color: #ccc; font-size: 15px; line-height: 1.7; margin-bottom: 30px; }
.modal-body :deep(p) { margin: 0 0 15px; }
.modal-body :deep(ul) { margin: 0 0 15px 20px; padding: 0; }
.modal-body :deep(li) { margin: 5px 0; }
.modal-body :deep(b) { color: #fff; }
.modal-footer { padding-top: 20px; border-top: 1px solid #333; }
.back-btn {
  background: transparent; border: 2px solid #b30000; color: #b30000;
  padding: 10px 24px; font-weight: 600; font-size: 14px; border-radius: 4px;
  cursor: pointer; transition: all 0.2s;
}
.back-btn:hover { background: #b30000; color: white; }
.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.payment-modal { max-width: 650px; padding: 35px; }
.payment-price { color: #b30000; font-size: 28px; font-weight: 700; margin: -10px 0 25px; text-align: center; }
.payment-form { display: flex; flex-direction: column; gap: 18px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { color: #fff; font-size: 14px; font-weight: 600; }
.form-input {
  background: #1a1a1a; border: 1px solid #333; border-radius: 4px;
  padding: 12px 15px; color: #fff; font-size: 14px; outline: none;
  transition: border-color 0.2s; width: 100%; box-sizing: border-box;
}
.form-input:focus { border-color: #b30000; }
.form-input::placeholder { color: #666; }
.form-row { display: flex; gap: 20px; }
.form-row .form-group { flex: 1; min-width: 0; }
.payment-methods { display: flex; gap: 15px; }
.method-option {
  flex: 1; display: flex; align-items: center; gap: 10px;
  padding: 14px 18px; background: #1a1a1a; border: 2px solid #333;
  border-radius: 4px; cursor: pointer; transition: all 0.2s;
  color: #ccc; font-size: 14px; justify-content: center;
}
.method-option:hover { border-color: #666; }
.method-option:has(input:checked) { border-color: #b30000; background: rgba(179, 0, 0, 0.1); color: #fff; }
.method-option input { display: none; }
.method-icon { font-size: 20px; }
.card-fields { background: rgba(179, 0, 0, 0.08); border: 1px solid rgba(179, 0, 0, 0.3); border-radius: 4px; padding: 20px; margin-top: -5px; }
.payment-actions { display: flex; gap: 15px; margin-top: 10px; }
.btn-cancel, .btn-pay {
  flex: 1; padding: 14px; border-radius: 4px; font-weight: 600;
  font-size: 15px; cursor: pointer; transition: all 0.2s;
}
.btn-cancel { background: transparent; border: 2px solid #666; color: #ccc; }
.btn-cancel:hover { border-color: #fff; color: #fff; }
.btn-pay { background: #b30000; border: 2px solid #b30000; color: #fff; }
.btn-pay:hover { background: #900; }
.payment-success { text-align: center; padding: 20px 0; }
.success-icon {
  width: 80px; height: 80px; margin: 0 auto 25px;
  background: rgba(76, 175, 80, 0.15); border: 2px solid #4caf50;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  color: #4caf50; font-size: 40px; font-weight: bold;
}
.payment-success .modal-title { margin-bottom: 15px; }
.payment-success > p { color: #ccc; font-size: 15px; margin-bottom: 10px; }
.success-note { color: #888; font-size: 13px; margin-top: 20px; }




@media (max-width: 1024px) {
  .hero { height: 600px; gap: 40px; padding-bottom: 80px; }
  .btn { width: 240px; height: 70px; font-size: 18px; margin: 0 20px; }

  .news-container { padding: 0 25px; }
  .news-title { font-size: 28px; margin-left: 10px; }
  .news-link { margin-right: 10px; font-size: 14px; }
  .news-cards { gap: 30px; }
  .news-card { max-width: 300px; }

  .section-title { font-size: 28px; }
  .block-title { font-size: 20px; }
  .block-body { gap: 25px; }
  .block-text p { font-size: 15px; }

  .req-columns { gap: 25px; }
  .req-item span:first-child { width: 150px; }
}


@media (max-width: 768px) {
  .hero {
    height: 500px;
    gap: 20px;
    padding-bottom: 60px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 0 20px;
  }

  .btn {
    width: 100%;
    max-width: 320px;
    height: 65px;
    font-size: 18px;
    margin: 0;
  }

  .news { padding: 30px 0 40px; min-height: auto; }
  .news-container { padding: 0 20px; }

  .news-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .news-title {
    font-size: 26px;
    margin-left: 0;
    text-align: center;
    width: 100%;
  }

  .news-link {
    margin-right: 0;
    font-size: 14px;
    align-self: center;
  }

  .news-cards {
    flex-direction: column;
    gap: 25px;
    align-items: center;
  }

  .news-card {
    max-width: 100%;
    width: 100%;
  }

  .card-meta { margin-right: 0; }
  .card-image { height: 200px; }

  .container { padding: 0 15px; }
  .section-title { font-size: 24px; text-align: center; }
  .content-block { margin-bottom: 40px; }
  .block-title { font-size: 18px; text-align: center; }

  .block-body {
    flex-direction: column;
    gap: 20px;
  }

  .block-image {
    width: 100%;
  }

  .block-text {
    width: 100%;
  }

  .block-text p {
    font-size: 15px;
    text-align: left;
  }

  .tabs-header {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .tab-btn {
    padding: 8px 15px;
    font-size: 13px;
  }

  .req-columns {
    flex-direction: column;
    gap: 25px;
  }

  .req-item span:first-child {
    width: 130px;
    font-size: 13px;
  }

  .footer-text {
    margin-top: 40px;
    padding-top: 25px;
  }

  .footer-text p {
    font-size: 16px;
  }


  .modal-overlay { padding: 10px; }
  .modal-content {
    padding: 25px 20px;
    max-height: 95vh;
  }
  .modal-close {
    top: 10px;
    right: 15px;
    font-size: 28px;
    width: 35px;
    height: 35px;
  }
  .modal-title { font-size: 22px; }
  .modal-header { gap: 10px; }


  .payment-modal {
    max-width: 95vw;
    padding: 25px 15px;
  }

  .payment-price { font-size: 24px; }

  .payment-methods {
    flex-direction: column;
    gap: 10px;
  }

  .method-option {
    padding: 12px;
    font-size: 13px;
  }

  .card-fields { padding: 15px; }

  .form-row {
    flex-direction: column;
    gap: 15px;
  }

  .payment-actions {
    flex-direction: column;
    gap: 10px;
  }

  .btn-cancel, .btn-pay {
    padding: 12px;
    font-size: 14px;
  }

  .success-icon {
    width: 70px;
    height: 70px;
    font-size: 36px;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 450px;
    padding-bottom: 50px;
  }

  .btn {
    height: 60px;
    font-size: 16px;
  }

  .news-title { font-size: 22px; }
  .card-image { height: 180px; }
  .card-tag { font-size: 14px; }
  .card-title { font-size: 16px; }
  .card-subtitle { font-size: 13px; }

  .section-title { font-size: 20px; }
  .block-title { font-size: 16px; }
  .block-text p { font-size: 14px; line-height: 1.5; }

  .tab-btn {
    padding: 6px 12px;
    font-size: 12px;
    margin-bottom: 20px;
  }

  .col-title { font-size: 12px; }
  .req-item { font-size: 13px; }
  .req-item span:first-child { width: 110px; }

  .footer-text p { font-size: 14px; }

  .modal-content { padding: 20px 15px; }
  .modal-title { font-size: 20px; }
  .modal-body { font-size: 14px; }

  .payment-price { font-size: 22px; }
  .form-group label { font-size: 13px; }
  .form-input { padding: 10px 12px; font-size: 13px; }
}


@media (max-width: 360px) {
  .hero { height: 400px; }
  .btn { font-size: 14px; height: 55px; }
  .news-title { font-size: 20px; }
  .section-title { font-size: 18px; }
  .req-item span:first-child { width: 100px; font-size: 12px; }
}
</style>