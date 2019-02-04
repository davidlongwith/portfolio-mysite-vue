<template>
  <div id="app">
    <Header />
    <Menu />
    <Contact />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/MenuDrawer.vue";
import Contact from "@/components/ContactDrawer.vue";

export default {
  components: {
    Header,
    Menu,
    Contact
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

a {
  color: #fff;
  text-decoration: none;
}

html {
  font-size: 18px;
}

html,
body,
#app,
main {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

body {
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
}

main {
  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-content: center;
}
</style>
