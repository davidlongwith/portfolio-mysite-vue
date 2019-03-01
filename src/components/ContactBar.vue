<template>
  <div id="contact-bar">
    <div id="contact-mail">
      <button>🖂</button>
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
  align-items: center;
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

#contact-mail {
  align-items: center;
  display: flex;
  justify-content: center;
}

button {
  background: green;
  color: #fff;
  font-size: 75px;
  line-height: 100%;
}

a {
  color: #fff;
  font-size: 100px;
  text-decoration: none;
}

img {
  height: auto;
  width: 100%;
}

#contact-linkedin {
  padding: 20px;
}
</style>
