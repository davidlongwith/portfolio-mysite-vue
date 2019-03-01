<template>
  <div id="contact-bar">
    <ul>
      <li>
        <a href="/">🖂</a>
      </li>
      <li>
        <a href="/">
          <img src="img/github/Octocat.png" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src="img/linkedin/In-2CRev-128px-R.png" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact-bar {
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  text-align: center;
  width: 100%;
}

a {
  font-size: 50px;
}

#contact-bar li img {
  height: auto;
  width: 100px;
}
</style>
