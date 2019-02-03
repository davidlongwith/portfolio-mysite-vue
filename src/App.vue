<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
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
  height: 100vh;
  justify-content: center;
  min-height: calc(100vh - 3em); /* full height minus padding-top */
  padding-top: 3em; /* allow space for fixed header */
  width: 100vw;
}
</style>
