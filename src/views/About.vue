<template lang="html">
  <div class="about">
    <div class="about-top">
      <h1>About Blog</h1>
    </div>
    <div class="about-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.about {
  background: white;
  margin-top: var(--margin);
  max-width: 800px;
  width: 95%;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
}
.about-top {
  text-align: center;
  background: var(--header-color);
  padding: var(--margin);
  color: var(--leading-text);
}
h1 {
  font-weight: 400;
}
.about-content {
  padding: var(--margin);
}
.about-content p {
  margin-bottom: var(--half-margin);
}
</style>
