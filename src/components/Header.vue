<template>
  <header>
    <button class="menu-button">☰</button>
    <!-- Trigram for Heaven - unicode number U+2630 -->
    <div id="header-logo">
      <router-link to="/">davidlongwith.com</router-link>
    </div>
    <button class="contact-button">🖂</button>
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
  font-size: 1.5rem;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}

header button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1em;
  margin: 0;
  padding: 0;
  width: 2em;
}

#header-logo a {
  text-decoration: none;
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
