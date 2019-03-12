<template>
  <div id="contact-bar">
    <div id="contact-mail">
      <a href="mailto: david@davidlongwith.com">Email</a>
    </div>
    <div id="contact-linkedin">
      <a href="/">
        <img src="img/linkedin/Logo-2CRev-128px-TM.png" />
      </a>
    </div>
    <div id="contact-github">
      <a href="/">
        <img src="img/github/GitHub_Logo_White.png" />
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
  align-items: center;
  background: #000;
  border: 1px solid #fff;
  display: flex;
  height: 3.5em;
  justify-content: center;
  margin: 15px 0;
  padding: 0 5px 0 15px;
  width: 100%;
}

#contact-mail a {
  color: #fff;
  font-size: 1.8em;
  font-weight: bold;
  line-height: 100%;
  padding: 10px 12px;
}

a {
  color: #fff;
  text-decoration: none;
}

img {
  height: auto;
  width: 100%;
}
</style>
