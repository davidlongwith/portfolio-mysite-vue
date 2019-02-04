<template>
  <div>
    <div class="side-toggle side-toggle-right">
      <button id="contact-toggle" class="contact-button">Contact</button>
    </div>
    <div id="contact-div"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.side-toggle {
  --buttonWidth: 171px;
  --buttonHeight: 55px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

.side-toggle-right {
  right: 0;
}

#contact-toggle {
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

@media (max-width: 960px), (min-width: 1440px) {
  .side-toggle {
    display: none;
  }
}

/*
 * Contact
 */

#contact-div {
  /* test styles... */
  border: 1px solid red;
  height: 10em;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(16em, -50%);
  transition: transform 0.3s ease;
  width: 16em;
}

#contact-div.open {
  transform: translate(0, -50%);
}

@media (min-width: 90em) {
  #contact-div {
    transform: translate(0, -50%);
  }
}
</style>
