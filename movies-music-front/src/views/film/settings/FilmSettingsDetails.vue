<template>
  <div class="content">
    <h1>{{ film.title }}</h1>
    <p>Project created at {{ new Date(film.dateCreated) | dateFormat('MM.DD.YYYY') }}</p>
    <p>{{ film.description }}</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'FilmSettingsDetails',
    computed: {
      ...mapGetters(['film'])
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
</style>
