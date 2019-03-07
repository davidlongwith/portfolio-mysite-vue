<template>
  <div id="contact-bar">
    <div id="contact-mail">
      <button>Email</button>
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
  padding: 5px 10px;
  text-align: center;
  width: 100%;
}

#contact-bar div {
  height: 5em;
  width: 100%;
}

#contact-mail,
#contact-linkedin,
#contact-github {
  align-items: center;
  display: flex;
  justify-content: center;
}

button {
  background: #004000;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-size: 1.5em;
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

#contact-linkedin {
}
</style>
