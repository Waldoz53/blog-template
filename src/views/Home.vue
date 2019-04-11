<template lang="html">
  <div class="home">
    <Card
      title="Blog Post #4"
      date="May 4, 2025"
      commentNum="4"
      author="Blogger-4"
    />
    <Card
      title="Blog Post #3"
      date="May 3, 2025"
      commentNum="7"
      author="Blogger-1"
    />
    <Card
      title="Blog Post #2"
      date="May 2, 2025"
      commentNum="2"
      author="Admin"
    />
    <Card
      title="Blog Post #1"
      date="May 1, 2025"
      commentNum="1"
      author="Admin"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";
import firebase from "firebase";

export default {
  name: "Home",
  components: {
    Card
  }
};
</script>

<style lang="css" scoped>
.home {
  width: 95%;
  padding: var(--half-margin);
  padding-top: 0;
  padding-bottom: 50px;
}
</style>
