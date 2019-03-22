<template>
  <div id="contact-bar">
    <div id="contact-mail">
      <a href="mailto: david@davidlongwith.com">Email</a>
    </div>
    <div id="contact-linkedin">
      <a
        href="https://www.linkedin.com/in/davidlongwith"
        target="_blank"
        aria-label="LinkedIn"
      >
        <img src="img/linkedin/Logo-2CRev-128px-TM.png" />
      </a>
    </div>
    <div id="contact-github">
      <a
        href="https://github.com/davidlongwith"
        target="_blank"
        aria-label="GitHub"
      >
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
  background: rgb(25, 25, 25);
  display: flex;
  line-height: 3em;
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
  border-radius: 15px 0 0 15px;
  border-right: none;
  color: #fff;
  padding-left: 12px;
  padding-right: 3px;
  text-decoration: none;
  width: 100%;
}

img {
  vertical-align: middle;
  width: 100%;
}
</style>
