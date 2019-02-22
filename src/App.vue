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
import MenuDrawer from "@/components/LeftSideDrawer.vue";
import ContactDrawer from "@/components/RightSideDrawer.vue";

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
body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  background-color: #000;
  overflow-x: hidden;
}

.side-button-div {
  --buttonWidth: 171px;
  --buttonHeight: 55px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

.side-button-div-right {
  right: 0;
}

@media (max-width: 960px), (min-width: 1440px) {
  .side-button-div {
    display: none;
  }
}
</style>
