<template>
  <nav aria-label="Main Menu" role="navigation">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </li>
    </ul>
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

ul {
  margin: 0;
  padding: 0;
}

li {
  border-top: 1px solid #fff;
}

li:nth-child(1) {
  border-top: none;
}

a {
  background: rgb(25, 25, 25);
  color: #fff;
  display: block;
  font-family: "Trykker", cursive, sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 4.5em;
  text-decoration: none;
}

a.router-link-exact-active {
  background: #fff;
  color: rgb(25, 25, 25);
}
</style>
