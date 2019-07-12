<template>
  <div id="app">
    <Header />
    <MenuDrawer />
    <ContactDrawer />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MenuDrawer from "@/components/MenuDrawer.vue";
import ContactDrawer from "@/components/ContactDrawer.vue";

export default {
  components: {
    Header,
    MenuDrawer,
    ContactDrawer
  }
};
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 15px;
}
@media (min-width: 480px) {
  html {
    font-size: 18px;
  }
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  color: rgb(250, 250, 250);
  overflow-x: hidden; /* required for side panels */
}

canvas {
  left: 0;
  position: fixed;
  top: 0;
  z-index: -1;
}

#no-canvas-background {
  background: #000;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: -2;
}

main {
  align-items: center;
  background: rgba(0, 0, 0, 0);
  display: flex; /* prevents margin collapse */
  height: 100vh;
  justify-content: center;
}

.main-inner {
  height: calc(100vh - 62px);
  margin: 62px 0 0;
  width: 100vw;
}

@media (min-width: 960px) and (max-width: 1439px) {
  .main-inner {
    margin: 62px 48px 0;
  }
}

@media (min-width: 1440px) {
  .main-inner {
    margin: 62px 8em 0;
  }
}
</style>
