<template>
  <div>
    <div class="side-button-div">
      <button id="side-button-left" class="drawer-button-left">
        Click Me&#33;
      </button>
    </div>
    <div id="drawer-left"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*
 * Left Side Button
 */

.side-button-div {
  --buttonWidth: 171px;
  --buttonHeight: 55px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 960px), (min-width: 1440px) {
  .side-button-div {
    display: none;
  }
}

#side-button-left {
  background: none;
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
  background: #000;
  border: 1px solid red;
  height: 65%;
  position: fixed;
  top: 50%;
  transform: translate(-16em, -50%);
  transition: transform 0.3s ease;
  width: 16em;
}

#drawer-left.open {
  transform: translate(0, -50%);
}

@media (min-width: 1441px) {
  #drawer-left {
    transform: translate(0, -50%);
  }
}
</style>
