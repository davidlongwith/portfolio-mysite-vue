<template>
  <div>
    <div class="side-button-div side-button-div-right">
      <button id="side-button-right" class="drawer-button-right">
        Contact
      </button>
    </div>
    <div id="drawer-right">
      <ContactBar />
    </div>
  </div>
</template>

<script>
import ContactBar from "@/components/ContactBar.vue";

export default {
  components: {
    ContactBar
  }
};
</script>

<style scoped>
/*
 * Right Side Button
 */

.side-button-div {
  --buttonWidth: 171px;
  --buttonHeight: 55px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

.side-button-div-right {
  right: 0;
}

@media (max-width: 960px), (min-width: 1440px) {
  .side-button-div {
    display: none;
  }
}

#side-button-right {
  background: none;
  border-top: none;
  color: #fff;
  font-size: 1.2em;
  height: var(--buttonHeight);
  position: relative;
  /*
   * Vertical Side Drawer Button (right side):
   * Move x-axis "(half the width - half the height)" then rotate 90 degrees clockwise on center axis.
   */
  transform: translateX(
      calc(((var(--buttonWidth)) / 2) - ((var(--buttonHeight)) / 2))
    )
    rotate(90deg);
  width: var(--buttonWidth);
}

/*
 * Right Side Drawer
 */

#drawer-right {
  background: #000;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;
  border-right: none;
  height: auto;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(16em, -50%);
  transition: transform 0.3s ease;
  width: 8em;
}

#drawer-right.open {
  transform: translate(0, -50%);
}

@media (min-width: 90em) {
  #drawer-right {
    transform: translate(0, -50%);
  }
}
</style>
