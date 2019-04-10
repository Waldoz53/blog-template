<template lang="html">
  <div class="signup">
    <div class="signup-top">
      Sign Up
    </div>
    <div class="signup-form">
      <form>
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          autocomplete="username"
        />
        <input
          type="text"
          v-model="email"
          placeholder="Email"
          autocomplete="email"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          autocomplete="password"
        />
        <button type="button" @click="submit">Sign Up!</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      valid: false,
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("userSignup", {
        username: this.username,
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="css" scoped>
.signup {
  width: 95%;
  max-width: 800px;
  margin: var(--half-margin) auto;
  margin-top: var(--margin);
  background: white;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
}
.signup-top {
  background: var(--header-color);
  color: var(--leading-text);
  padding: var(--margin);
  text-align: center;
  font-size: 2em;
}
form {
  padding: var(--margin);
  display: grid;
}
form > input {
  min-width: 50%;
  max-width: 80%;
  font-size: 1.25em;
  margin: var(--half-margin) auto;
  border: none;
  border-bottom: 1px solid var(--header-color);
}
button {
  margin: var(--margin) auto;
  padding: var(--half-margin) var(--margin) var(--half-margin) var(--margin);
  font-size: 1.25em;
  background: var(--header-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  opacity: 0.4;
}
</style>
