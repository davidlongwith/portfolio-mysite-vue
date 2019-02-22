<template>
  <header>
    <button class="drawer-button-left">☰</button>
    <!-- Trigram for Heaven - unicode number U+2630 -->
    <div id="header-logo">
      <router-link to="/">davidlongwith.com</router-link>
    </div>
    <button class="drawer-button-right">🖂</button>
    <!-- Back of Envelope - unicode number U+1F582 -->
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}

#header-logo a {
  text-decoration: none;
}

header button {
  background: none;
  border: none;
  color: #fff;
  font-size: 3.5em;
  margin: 0;
  padding: 0 18px;
}

@media (min-width: 960px) {
  header {
    justify-content: center;
    position: fixed;
  }
  header > button {
    display: none;
  }
}
</style>
