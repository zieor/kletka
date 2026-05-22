<script setup>
</script>

<template>
  <div class="container">
    <div class="avtors">
      <img src="../images/imageForFooter/avtor.png" height="80" width="80" />
      <p class="avtor">Callback <br> ln404</p>
    </div>

    <div class="prava">
      <p class="prava1">{{ $t('footer.copyright') }}</p>
    </div>

    <div class="polit">
      <p class="polit1">{{ $t('footer.privacy') }}</p>
      <p class="polit1">{{ $t('footer.terms') }}</p>
      <p class="polit1">{{ $t('footer.cookies') }}</p>
    </div>

    <div class="polit2">
      <img src="../images/imageForFooter/youtube.svg" height="42" width="42" />
      <img src="../images/imageForFooter/discord.svg" height="42" width="42" />
      <img src="../images/imageForFooter/steam.svg" height="42" width="42" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.avtors {
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 34px;
}

.avtors img {
  flex-shrink: 0;
}

.avtor {
  margin: 0;
  line-height: 1.4;
}

.prava {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  text-align: center;
  max-width: 800px;
}

.prava1 {
  margin: 0;
  line-height: 1.6;
}

.polit {
  display: flex;
  flex-direction: row;
  gap: 38px;
  color: white;
  font-size: 14px;
}

.polit1 {
  margin: 0;
  white-space: nowrap;
}

.polit2 {
  display: flex;
  flex-direction: row;
  gap: 38px;
  color: white;
  padding-top: 12px;
  padding-bottom: 34px;
}
</style>