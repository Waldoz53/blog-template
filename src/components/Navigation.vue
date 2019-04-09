<template>
  <div class="navigation">
    <div class="navigation-title">
      <div class="navigation-left">
        <img src="https://i.imgur.com/zu076xv.png" alt="blog template's icon">
        <h1>Blog Template</h1>
      </div>
      <span @click="showMenu" class="mdi mdi-menu mdi-48px clickable menu"></span>
      <div class="desktop-menu">
        <div class="desktop-login">
          <p>Login</p>
          <p>About</p>
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
        <p>Login</p>
        <p>About</p>
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
    }
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
  font-family: var(--main-font);
  text-align: center;
  padding: 16px;
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
  margin: 16px;
}
.navigation-login {
  display: flex;
}

.hidden {
  display: none;
}

@media (min-width: 1000px) {
  .mobile-menu, .menu {
    display: none;
  }

  .desktop-menu {
    display: flex;
  }
}
</style>
