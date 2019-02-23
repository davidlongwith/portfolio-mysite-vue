<template>
  <nav>
    <router-link :to="{ name: 'event-list' }">List</router-link>
    <router-link :to="{ name: 'event-create' }">Create</router-link>
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
