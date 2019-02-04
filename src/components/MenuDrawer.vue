<template>
  <div>
    <div class="side-toggle">
      <button id="main-menu-toggle" class="menu-button">Menu</button>
    </div>
    <nav id="main-menu">
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*
 * Side Toggle Button
 */

.side-toggle {
  --buttonWidth: 171px;
  --buttonHeight: 55px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

#main-menu-toggle {
  height: var(--buttonHeight);
  position: relative;
  width: var(--buttonWidth);
}

#main-menu-toggle {
  /*
   * Vertical Side Drawer Button (left side):
   * Move x-axis "-(half the width - half the height)" then rotate 90 degrees counter-clockwise on center axis.
   */
  transform: translateX(
      calc(-1 * (((var(--buttonWidth)) / 2) - ((var(--buttonHeight)) / 2)))
    )
    rotate(-90deg);
}

@media (max-width: 960px), (min-width: 1440px) {
  .side-toggle {
    display: none;
  }
}

/*
 * Main Menu
 */

#main-menu {
  border: 1px solid red;
  position: fixed;
  top: 50%;
  transform: translate(-16em, -50%);
  transition: transform 0.3s ease;
  width: 16em;
}

#main-menu.open {
  transform: translate(0, -50%);
}

@media (min-width: 1441px) {
  #main-menu {
    transform: translate(0, -50%);
  }
}

#main-menu ul {
  padding: 0;
  text-align: center;
  list-style: none;
}
</style>
