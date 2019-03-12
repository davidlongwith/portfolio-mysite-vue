<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'projects' }">Projects</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  text-align: center;
  width: 100%;
}

nav a {
  background: #000;
  border-top: 1px solid #fff;
  color: #fff;
  font-family: "Trykker", cursive, sans-serif;
  font-size: 1.3em;
  font-weight: 700;
  line-height: 5em;
  text-decoration: none;
}

nav a:nth-child(1) {
  border-top: none;
}

nav a.router-link-exact-active {
  background: #fff;
  color: rgb(0, 25, 0);
}
</style>
