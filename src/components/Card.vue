<template lang="html">
  <div class="card">
    <div class="card-top">
      <h1>{{ title }}</h1>
    </div>
    <div class="card-content">
      <p>
        by <strong>{{ author }}</strong> on {{ date }}
      </p>
      <p>{{ content }}</p>
    </div>
    <!-- <div class="card-comments">
      <h3>{{ commentNum }} comments</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    author: String,
    date: String,
    content: String,
    commentNum: String
  }
};
</script>

<style lang="css">
.card {
  background: white;
  margin-top: var(--margin);
  max-width: 800px;
  width: 100%;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
}
.card-top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--half-margin);
  background: var(--header-color);
  color: var(--leading-text);
}
.card-top h1 {
  font-weight: 400;
}
.card-content {
  padding: var(--margin);
}

.card-content p {
  margin-bottom: var(--half-margin);
}

.card-comments {
  text-align: center;
  padding: var(--half-margin);
  border-top: 1px solid var(--header-color);
}
h3 {
  font-weight: 400;
}
</style>
