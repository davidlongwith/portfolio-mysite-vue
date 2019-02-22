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
const leftDrawerButtons = document.querySelectorAll(".drawer-button-left");
const leftDrawer = document.querySelector("#drawer-left");

const rightDrawerButtons = document.querySelectorAll(".drawer-button-right");
const rightDrawer = document.querySelector("#drawer-right");

// click button(s) to show left side drawer
for (let i = 0; i < leftDrawerButtons.length; i++) {
  leftDrawerButtons[i].addEventListener("click", function(e) {
    leftDrawer.classList.toggle("open");
    e.stopPropagation();
  });
}

// click button(s) to show right side drawer
for (let i = 0; i < rightDrawerButtons.length; i++) {
  rightDrawerButtons[i].addEventListener("click", function(e) {
    rightDrawer.classList.toggle("open");
    e.stopPropagation();
  });
}

// click anywhere to close
window.addEventListener("click", function() {
  leftDrawer.classList.remove("open");
  rightDrawer.classList.remove("open");
});
