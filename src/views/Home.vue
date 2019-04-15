<template lang="html">
  <div class="home">
    <!-- disabled linting for this one because firebase sorts the array/documents itself. will change once necessary -->
    <!-- eslint-disable-next-line -->
    <div v-for="post in posts">
      <Card
        v-bind:title="post.title"
        v-bind:author="post.author"
        v-bind:date="post.date"
        v-bind:content="post.content"
        v-bind:commentNum="post.comments"
      />
    </div>
    <Card
      title="Blog Post #4"
      author="Blogger-2"
      date="May 4, 2025"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      commentNum="4"
    />
    <Card
      title="Blog Post #3"
      author="Blogger-1"
      date="May 3, 2025"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      commentNum="7"
    />
    <Card
      title="Blog Post #2"
      author="Admin"
      date="May 2, 2025"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      commentNum="2"
    />
    <Card
      title="Blog Post #1"
      author="Admin"
      date="May 1, 2025"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      commentNum="1"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";
import firebase from "@/firebase/firebase";

export default {
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      posts: [],
      ref: firebase
        .firestore()
        .collection("posts")
        .orderBy("submitted", "desc")
    };
  },
  created() {
    this.ref.onSnapshot(querySnapshot => {
      this.posts = [];
      querySnapshot.forEach(doc => {
        this.posts.push({
          title: doc.data().title,
          author: doc.data().author,
          date: doc.data().date,
          content: doc.data().content,
          comments: doc.data().comments
        });
      });
    });
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
