<template>
  <div>
    <table class="table is-fullwidth is-striped">
      <thead>
      <tr>
        <th>Título</th>
        <th>Artist</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="song in songs" :key="song.id">
        <td>{{ song.song.title }}</td>
        <td>{{ song.song.artist }}</td>
        <td>{{ song.status.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'FilmSongsTable',
    computed: {
      ...mapGetters(['songs']),
    }
  }
</script>

<style scoped lang="scss">
</style>
