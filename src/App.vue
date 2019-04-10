<template lang="html">
  <div class="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style lang="css">
:root {
  --header-color: #323232;
  --background-color: #646464;
  --leading-text: white;
  --post-text: #161616;
  --main-font: "Roboto Slab", sans-serif;
  --margin: 16px;
  --half-margin: 8px;
}
* {
  margin: 0 auto;
  font-family: var(--main-font);
}
.app {
  min-height: 100vh;
  background: #646464;
}
.clickable {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
  transition: 0.2s;
}
a:hover {
  opacity: 0.4;
}
</style>
