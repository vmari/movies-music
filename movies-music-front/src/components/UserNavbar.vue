<template>
  <div class="navbar-end">
    <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
      <a class="navbar-link">
        <img src="../assets/user.png" width="28" height="28" alt="AB">
        {{ currentUser.name }}
      </a>
      <div class="navbar-dropdown">
        <a class="navbar-item" @click="logout">
          Logout
        </a>
      </div>
    </div>
    <div class="navbar-item" v-else>
      <div class="buttons">
        <a class="button is-primary" @click="login">
          <strong>Log in</strong>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import {LOGIN, LOGOUT} from "../store/actions";

  export default {
    name: 'UserNavbar',
    methods: {
      logout () {
        this.$store.dispatch(LOGOUT).then(() => {
          this.$router.push('/');
        })
      },
      login: function () {
        this.$store.dispatch(LOGIN, {user: 'valentin', pass: 'pass'}).then(() => {
          this.$router.push('/');
        })
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'currentUser'])
    },
  }
</script>

<style lang="scss">
</style>
