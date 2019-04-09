<template lang="html">
  <div class="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation"

export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>

<style lang="css">
:root {
  --header-color: #323232;
  --background-color: #646464;
  --leading-text: white;
  --post-text: #161616;
  --main-font: "Roboto Slab", sans-serif;
}
* {
  margin: 0 auto;
}
.app {
  min-height: 100vh;
  background: #646464;
}
.clickable {
  cursor: pointer;
}
</style>
