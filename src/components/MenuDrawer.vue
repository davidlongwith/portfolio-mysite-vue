<template>
  <div>
    <div class="side-button-div">
      <button id="side-button-left" class="drawer-button-left">Menu</button>
    </div>
    <div id="drawer-left">
      <MenuBar />
    </div>
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";

export default {
  components: {
    MenuBar
  }
};
</script>

<style scoped>
/*
 * Left Side Button
 */

.side-button-div {
  --buttonWidth: 144px;
  --buttonHeight: 48px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 960px), (min-width: 1439px) {
  .side-button-div {
    display: none;
  }
}

#side-button-left {
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  border-top: none;
  color: #fff;
  font-size: 1.2em;
  height: var(--buttonHeight);
  position: relative;
  /*
   * Vertical Side Drawer Button (left side):
   * Move x-axis "-(half the width - half the height)" then rotate 90 degrees counter-clockwise on center axis.
   */
  transform: translateX(
      calc(-1 * (((var(--buttonWidth)) / 2) - ((var(--buttonHeight)) / 2)))
    )
    rotate(-90deg);
  width: var(--buttonWidth);
}

/*
 * Left Side Drawer
 */

#drawer-left {
  background: none;
  border: 1px solid #fff;
  border-left: none;
  height: auto;
  position: fixed;
  top: 50%;
  transform: translate(-16em, -50%);
  transition: transform 0.3s ease;
  width: 8em;
}

#drawer-left.open {
  transform: translate(0, -50%);
}

@media (min-width: 1440px) {
  #drawer-left {
    transform: translate(0, -50%);
  }
}
</style>
