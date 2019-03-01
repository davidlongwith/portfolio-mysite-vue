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
  height: 120px;
  width: 120px;
}

#contact-mail,
#contact-linkedin {
  align-items: center;
  display: flex;
  justify-content: center;
}

button {
  background: green;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 55px;
  line-height: 100%;
  padding: 10px;
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
  padding: 18px;
}
</style>
