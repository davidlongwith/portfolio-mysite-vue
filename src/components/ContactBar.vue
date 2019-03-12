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
  background: rgb(1, 48, 22);
  display: flex;
  line-height: 4em;
  margin: 20px 0;
  width: 100%;
}

#contact-mail a {
  color: #fff;
  font-size: 2em;
  font-weight: bold;
}

a {
  border: 1px solid #fff;
  color: #fff;
  padding-left: 12px;
  padding-right: 3px;
  text-decoration: none;
  width: 100%;
}

img {
  height: ;
  vertical-align: middle;
  width: 100%;
}
</style>
