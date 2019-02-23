<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
