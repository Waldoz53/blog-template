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
        <div class="desktop-login">
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

        <!-- <div class="desktop-logout"> commented out until login systems are available -->
        <!-- <p>Write</p> -->
        <!-- <p>Logout</p> -->
        <!-- <p>About</p> -->
        <!-- </div> -->
      </div>
    </div>

    <div class="mobile-menu" v-bind:class="[isHidden ? hideClass : '']">
      <div class="navigation-login">
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

      <!-- <div class="navigation-logout"> commented out until login systems are available -->
      <!-- <p>Write</p> -->
      <!-- <p>Logout</p> -->
      <!-- <p>About</p> -->
      <!-- </div> -->
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

.desktop-login {
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.desktop-login p {
  margin-left: 16px;
  margin-right: 16px;
}

.mobile-menu {
  margin: 8px;
}
.navigation-login {
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
