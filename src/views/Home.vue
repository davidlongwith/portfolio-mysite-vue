<template>
  <div>
    <h1>
      <span class="home-intro-1">Hello, I'm David Longwith</span>
      <br />
      <span class="home-intro-2">Web Developer</span>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  font: 1rem Georgia, serif;
  text-align: center;
}
@media (min-width: 1200px) {
  div {
    font-size: 1.3rem;
  }
}
.home-intro-1 {
  font-size: 0.8em;
  text-shadow: 0px 1px 2px #000, 0 0 0.2em #fff;
}
.home-intro-2 {
  color: blue;
  font-size: 1.8em;
  text-shadow: 0px 1px 2px #fff, 0 0 1em blue, 0 0 0.2em blue;
}
</style>
