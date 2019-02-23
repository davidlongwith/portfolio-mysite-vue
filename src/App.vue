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
  font-size: 16px;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body,
main {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  background-color: #000;
  overflow-x: hidden;
}

main {
  color: #fff;
  display: flex; /* prevents margin collapse */
}
</style>
