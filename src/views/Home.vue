<script setup>
</script>

<template>
  <div class="main">
    <div class="hero">
      <button class="btn hero-btn">ПОПРОБУЙ DEMO</button>
      <button class="btn hero-btn">КУПИТЬ СЕЙЧАС</button>
    </div>

    <div class="news">
      <div class="news-container">
        <div class="news-header">
          <h2 class="news-title">ПОСЛЕДНИЕ НОВОСТИ</h2>
          <a href="/news" class="news-link">ПЕРЕЙТИ НА СТРАНИЦУ С НОВОСТЯМИ
            <span class="arrow"><img src="@/images/mainHome/newsline.svg" alt="банан"></span>
          </a>
        </div>

        <div class="news-cards">
          <div class="news-card">
            <img src="@/images/mainHome/news1.png" alt="КЛЕТЬ: обновление 1.1.1" class="card-image" />
            <div class="card-meta">
              <span class="card-tag">НОВОСТЬ ОБ ИГРЕ</span>
              <span class="card-divider">|</span>
              <span class="card-date">01.01.1990</span>
            </div>
            <h3 class="card-title">КЛЕТЬ: обновление 1.1.1</h3>
            <p class="card-subtitle">Баг фикс</p>
          </div>

          <div class="news-card">
            <img src="@/images/mainHome/news1.png" alt="КЛЕТЬ: обновление 1.1.0" class="card-image" />
            <div class="card-meta">
              <span class="card-tag">НОВОСТЬ ОБ ИГРЕ</span>
              <span class="card-divider">|</span>
              <span class="card-date">01.01.1990</span>
            </div>
            <h3 class="card-title">КЛЕТЬ: обновление 1.1.0</h3>
            <p class="card-subtitle">Обновление "СИНГУЛЯРНОСТЬ"</p>
          </div>

          <div class="news-card">
            <img src="@/images/mainHome/news1.png" alt="КЛЕТЬ: бета-тест обновления 1.1.0" class="card-image" />
            <div class="card-meta">
              <span class="card-tag">НОВОСТЬ ОБ ИГРЕ</span>
              <span class="card-divider">|</span>
              <span class="card-date">01.01.1990</span>
            </div>
            <h3 class="card-title">КЛЕТЬ: бета-тест обновления 1.1.0</h3>
            <p class="card-subtitle">Закрытый бета-тест скорого обновления</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-game">
      <div class="container">
        <h2 class="section-title">Об этой игре</h2>

        <div class="content-block">
          <h4 class="block-title">В САМУЮ ГЛУБЬ</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="@/images/mainHome/void.png" alt="Гигахрущёвка" />
            </div>
            <div class="block-text">
              <p>В мире бесконечно перестраивающего себя здания нет места морали, законам и сантиментам. Попав в немилость местной администрации, Вас и ещё нескольких «счастливчиков» отправили на верную сме... миссию искупления! Сумеете ли вы найти выход из Гигахрущёвки и спасти свои бренные тела?</p>
            </div>
          </div>
        </div>

        <div class="content-block">
          <h4 class="block-title">ГИГАХРУЩЁВКА</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="@/images/mainHome/void.png" alt="Гигахрущёвка" />
            </div>
            <div class="block-text">
              <p>Это здание распласталось на бесконечные километры в ширь и глубь, а его коридоры наполнены аномалиями и смертельными ловушками. Тщательно подбирайте этажи, на которых хотите остановиться, чтобы не попасть впросак.</p>
            </div>
          </div>
        </div>

        <div class="content-block">
          <h4 class="block-title">САМОСБОР</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="@/images/mainHome/void.png" alt="Самосбор" />
            </div>
            <div class="block-text">
              <p>Никто и никогда Вам не расскажет подробности этого загадочного события, периодически происходящего на этажах. Почему? Потому что ни один из свидетелей не остался в живых. Может, Вам удастся взглянуть на последствия Самосбора хотя бы одним глазком?</p>
            </div>
          </div>
        </div>

        <div class="content-block">
          <h4 class="block-title">ВМЕСТЕ</h4>
          <div class="block-body">
            <div class="block-image">
              <img src="@/images/mainHome/void.png" alt="Вместе" />
            </div>
            <div class="block-text">
              <p>Удивительно, но Вы не единственный, на кого пал гневный взор администрации Гигахрущёвки. Объединитесь в команду до 6 человек, чтобы не дать опасностям этого здания поглотить вас поодиночке.</p>
            </div>
          </div>
        </div>

        <div class="footer-text">
          <p>ДОБРО ПОЖАЛОВАТЬ И УДАЧНОЙ ПОЕЗДКИ В ГЛУБЬ <span class="highlight">ХРУЩА</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.main {
  margin: 0 auto;
  width: 100%;
}

.hero {
  width: 100%;
  max-width: 1920px;
  height: 748px;
  background-image: url('@/images/mainHome/hero1.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 87px;
  padding-bottom: 120px;
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
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  margin: 0 50px;
}

.btn:hover {
  border-color: #b00100;
  background-color: #4b333366;
}

.btn:focus-visible {
  outline: 2px solid #b00100;
  outline-offset: 4px;
}

.news {
  background: linear-gradient(to right, #b30000, #4d0000);
  min-height: 535px;
  padding: 40px 0 60px;
  display: flex;
  justify-content: center;
}

.news-container {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.news-title {
  color: #fff;
  font-weight: 700;
  font-size: 34px;
  letter-spacing: 0.5px;
  margin-left: 20px;
}

.news-link {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s ease;
  margin-right: 30px;
}

.news-link:hover {
  opacity: 0.8;
}

.arrow {
  display: inline-block;
  font-size: 14px;
  transition: transform 0.2s ease;

}

.news-link:hover .arrow {
  transform: translateX(4px);
}

.news-cards {
  display: flex;
  gap: 60px;
}

.news-card {
  flex: 1;
  max-width: 360px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  opacity: 0.9;
}

.card-image {
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
  filter: grayscale(100%) contrast(1.1);
  transition: filter 0.3s ease;
}

.news-card:hover .card-image {
  filter: grayscale(80%) contrast(1.15);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-right: 70px;
}

.card-tag {
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: black;
  font-size: 16px;
}

.card-divider {
  color: #fff;
  font-size: 13px;
}

.card-date {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
}

.card-title {
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.card-subtitle {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  opacity: 0.9;
}

@media (max-width: 900px) {
  .news-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .news-cards {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .news-card {
    max-width: 100%;
    width: 100%;
  }

  .card-image {
    height: 180px;
  }
}

@media (max-width: 600px) {
  .news-title {
    font-size: 24px;
  }

  .news-container {
    padding: 0 20px;
  }

  .news-cards {
    gap: 24px;
  }
}

.about-game{
  color: white;
  background: radial-gradient(#1e1e1e, #090909);
  padding: 39px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 30px 0;
  color: #fff;
}

.content-block {
  margin-bottom: 60px;
}

.block-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #fff;
  text-transform: uppercase;
}

.block-body {
  display: flex;
  gap: 40px;
}

.block-image {
  width: 50%;
  flex-shrink: 0;
}

.block-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.block-text {
  flex: 1;
  display: flex;
  align-items: center;
}

.block-text p {
  font-size: 16px;
  line-height: 1.6;
  color: #ccc;
  margin: 0;
}

.footer-text {
  text-align: center;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #333;
}

.footer-text p {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.highlight {
  color: #b30000;
}


</style>