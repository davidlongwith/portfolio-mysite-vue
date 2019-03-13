<template>
  <header>
    <button class="drawer-button-left">☰</button>
    <!-- Trigram for Heaven - unicode number U+2630 -->
    <div id="header-brand">
      <router-link to="/" class="brand">davidlongwith.com</router-link>
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
  font-size: 1.25rem;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}

@media (min-width: 479px) {
  header {
    font-size: 1.75rem;
  }
}

#header-brand {
  padding: 10px 0;
}

.brand {
  color: #fff;
  font-family: "Trykker", cursive, sans-serif;
  font-size: 1.05em;
  font-weight: 700;
  text-decoration: none;
}

header button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4em;
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
