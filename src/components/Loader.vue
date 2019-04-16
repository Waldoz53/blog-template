<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: {
    ContentLoader
  },
  props: {
    data: null
  }
};
</script>
<template>
  <content-loader
    :height="200"
    :width="800"
    :speed="1"
    primaryColor="#b8b8b8"
    secondaryColor="#ffffff"
  >
    <rect x="270" y="15" rx="5" ry="5" width="250" height="15" />
    <rect x="200" y="45" rx="5" ry="5" width="200" height="15" />
    <rect x="200" y="75" rx="5" ry="5" width="400" height="15" />
    <rect x="200" y="105" rx="5" ry="5" width="400" height="15" />
    <rect x="200" y="135" rx="5" ry="5" width="400" height="15" />
    <rect x="200" y="165" rx="5" ry="5" width="400" height="15" />
  </content-loader>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
</style>
