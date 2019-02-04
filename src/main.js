import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/*
 *
 * Side Drawers
 *
 */

// Get buttons and drawers
const menuBttn = document.querySelectorAll(".menu-button");
const menu = document.querySelector("#main-menu");

const contactBttn = document.querySelectorAll(".contact-button");
const contactDiv = document.querySelector("#contact-div");

const main = document.getElementsByTagName("main")[0];

// click button(s) to show menu
for (let i = 0; i < menuBttn.length; i++) {
  menuBttn[i].addEventListener("click", function(e) {
    menu.classList.toggle("open");
    e.stopPropagation();
  });
}

// click button(s) to show contact form
for (let i = 0; i < contactBttn.length; i++) {
  contactBttn[i].addEventListener("click", function(e) {
    contactDiv.classList.toggle("open");
    e.stopPropagation();
  });
}

// click outside to close
main.addEventListener("click", function() {
  menu.classList.remove("open");
  contactDiv.classList.remove("open");
});
