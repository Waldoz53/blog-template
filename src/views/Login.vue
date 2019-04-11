<template lang="html">
  <div class="login">
    <div class="login-top">
      Login
    </div>
    <div class="login-form">
      <form>
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
        <button type="button" @click="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      email: "",
      password: ""
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("userLogin", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="css" scoped>
.login {
  width: 95%;
  max-width: 800px;
  margin: var(--half-margin) auto;
  margin-top: var(--margin);
  margin-bottom: 0;
  background: white;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
}
.login-top {
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
