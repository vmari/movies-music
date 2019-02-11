<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">

          <router-link class="navbar-item" :to="{name:'home'}">
            <img src="./assets/logo.png" width="28" height="28" alt="AB">
            Acme Bros.
          </router-link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">
              Home
            </router-link>

            <router-link class="navbar-item" to="/">
              Films
            </router-link>

            <router-link class="navbar-item" to="/">
              Songs
            </router-link>

            <router-link class="navbar-item" to="/">
              Reports
            </router-link>

            <router-link class="navbar-item" to="/">
              Users
            </router-link>
          </div>

          <user-navbar/>
        </div>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>movies-music</strong> by <a href="https://github.com/vmari">Valentin Mari</a>. 2019
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  import UserNavbar from "./components/UserNavbar";

  export default {
    name: 'App',
    components: {
      UserNavbar
    }
  }
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  $primary: #8c67ef;
  $primary-invert: findColorInvert($primary);

  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert)
  );

  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;
  $footer-background-color: transparent;


  $material-icons-css-prefix: 'mdi';
  @import '~material-icons/iconfont/material-icons.css';
  @import '~material-icons/css/material-icons.scss';

  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  .navbar-item, .navbar-link {
    & > img {
      margin-right: 10px;
    }
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+35,eeeeee+100 */
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(top, #ffffff 35%, #eeeeee 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #ffffff 35%, #eeeeee 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #ffffff 35%, #eeeeee 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#eeeeee', GradientType=0); /* IE6-9 */
  }
</style>
