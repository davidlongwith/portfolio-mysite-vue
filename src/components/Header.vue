<template>
  <header>
    <button class="drawer-button-left" aria-label="Menu">
      <MenuIcon class="header-icons" />
    </button>
    <div id="header-brand">
      <router-link to="/" class="brand">davidlongwith.com</router-link>
    </div>
    <button class="drawer-button-right" aria-label="Contact">🖂</button>
    <!-- Back of Envelope - unicode number U+1F582 -->
  </header>
</template>

<script>
import MenuIcon from "../assets/trigram_for_heaven.svg";
export default {
  components: {
    MenuIcon
  }
};
</script>

<style scoped>
header {
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
  max-height: 62px;
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
  background: #fff;
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

.header-icons {
  height: 50px;
  width: 50px;
}
</style>
