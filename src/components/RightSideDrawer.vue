<template>
  <div>
    <div class="side-button-div side-button-div-right">
      <button id="side-button-right" class="drawer-button-right">
        Click Me&#33;
      </button>
    </div>
    <div id="drawer-right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*
 * Right Side Drawer
 */

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

#drawer-right {
  background: #000;
  border: 1px solid red;
  height: 65%;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(16em, -50%);
  transition: transform 0.3s ease;
  width: 16em;
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
