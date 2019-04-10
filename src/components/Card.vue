<template lang="html">
  <div class="card">
    <div class="card-top">
      <h1>{{ title }}</h1>
    </div>
    <div class="card-content">
      <p>
        {{ date }} by <strong>{{ author }}</strong>
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
    <div class="card-comments">
      <h3>{{ commentNum }} comments</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    date: String,
    author: String,
    commentNum: String
  }
};
</script>

<style lang="css" scoped>
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
