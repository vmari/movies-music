<template>
  <div class="home">
    <section class="hero is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            NaNLABS technical challenge
          </h1>
          <p>
            <router-link :to="{name:'film', params:{id:'26d14640-8e9f-4aee-aeab-ef46627fde35'}}"
                         class="button is-primary" v-if="isAuthenticated">
              <i class="mdi mdi-movie"></i> Go to test Film
            </router-link>
            <span v-else>
              Please log in.
            </span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
  }
</script>
