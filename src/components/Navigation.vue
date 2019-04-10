<template>
  <div class="navigation">
    <div class="navigation-title">
      <router-link class="navigation-left" to="/">
        <img
          to="/"
          src="https://i.imgur.com/zu076xv.png"
          alt="blog template's icon"
        />
        <h1 to="/">Blog Template</h1>
      </router-link>
      <span
        @click="showMenu"
        class="mdi mdi-48px clickable menu"
        v-bind:class="[isHidden ? 'mdi-menu' : 'mdi-close']"
      ></span>
      <div class="desktop-menu">
        <div v-if="!isAuthenticated" class="desktop-login">
          <router-link to="/login">
            <p>Login</p>
          </router-link>
          <router-link to="/signup">
            <p>Sign Up</p>
          </router-link>
          <router-link to="/about">
            <p>About</p>
          </router-link>
        </div>

        <div v-else class="desktop-logout">
          <router-link to="/write">
            <p>Write</p>
          </router-link>
          <a @click="signOut"><p>Log Out</p></a>
          <router-link to="/about">
            <p>About</p>
          </router-link>
        </div>
      </div>
    </div>

    <div class="mobile-menu" v-bind:class="[isHidden ? hideClass : '']">
      <div v-if="!isAuthenticated" class="navigation-login">
        <router-link to="/login">
          <p>Login</p>
        </router-link>
        <router-link to="/signup">
          <p>Sign Up</p>
        </router-link>
        <router-link to="/about">
          <p>About</p>
        </router-link>
      </div>

      <div v-else class="navigation-logout">
        <router-link to="/write">
          <p>Write</p>
        </router-link>
        <a @click="signOut"><p>Log Out</p></a>
        <router-link to="/about">
          <p>About</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isHidden: true,
      hideClass: "hidden"
    };
  },
  methods: {
    showMenu() {
      if (this.isHidden) {
        this.isHidden = false;
      } else {
        this.isHidden = true;
      }
    },
    signOut() {
      this.$store.dispatch("userSignOut");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    }
  }
};
</script>

<style scoped>
.navigation {
  background: var(--header-color);
  color: var(--leading-text);
  text-align: center;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.navigation-left {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-weight: 400;
  font-size: 1.5em;
}
p {
  font-size: 1.25em;
}
.navigation-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation-left img {
  width: 48px;
  margin-right: 10px;
}
.desktop-menu {
  display: none;
}
.desktop-login,
.desktop-logout {
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.desktop-login p,
.desktop-logout p {
  margin-left: 16px;
  margin-right: 16px;
}
.mobile-menu {
  margin: 8px;
}
.navigation-login {
  display: flex;
}
.navigation-logout {
  display: flex;
}
.hidden {
  display: none;
}
@media (min-width: 1000px) {
  .mobile-menu,
  .menu {
    display: none;
  }
  .desktop-menu {
    display: flex;
  }
}
</style>
