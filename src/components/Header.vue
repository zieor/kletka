<template>
  <div class="url-but">
    <div class="nav-center">
      <RouterLink to="#" class="navigation">Иллюстрации</RouterLink>
      <RouterLink to="/" class="navigation">
        <img src="../images/header/header_icon.svg" height="34" width="34" />
      </RouterLink>
      <RouterLink to="Page1" class="navigation">Достижения</RouterLink>
    </div>

    <RouterLink to="#" class="navigation" id="account">Войти в аккаунт</RouterLink>
  </div>
</template>

<style scoped>
.url-but {
  display: grid;
  /* Три колонки: левая (пустая), центр (по контенту), правая (под кнопку) */
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
}

.nav-center {
  grid-column: 2; /* Помещаем в центральную колонку */
  display: flex;
  gap: 40px;
  align-items: center;
}

#account {
  grid-column: 3; /* Помещаем в правую колонку */
  justify-self: end;
  margin-right: 21px;
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