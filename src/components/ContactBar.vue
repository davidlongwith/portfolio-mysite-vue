<template>
  <div id="contact-bar">
    <div>
      <a href="/">🖂</a>
    </div>
    <div id="contact-linkedin">
      <a href="/">
        <img src="img/linkedin/In-2CRev-128px-R.png" />
      </a>
    </div>
    <div>
      <a href="/">
        <img src="img/github/Octocat.png" />
      </a>
    </div>
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

#contact-bar div {
  height: 150px;
  width: 150px;
}

#contact-bar a {
  color: #fff;
  font-size: 100px;
  text-decoration: none;
}

#contact-bar img {
  height: auto;
  width: 100%;
}

#contact-linkedin {
  padding: 20px;
}
</style>
