<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <div class="column is-narrow">
          <img src="../assets/charly.jpg" class="image" width="100"/>
        </div>
        <div class="column">
          <h4 class="subtitle"><b>{{ song.title }} - {{ song.artist }}</b> ({{ song.duration|hms }})</h4>
          <p>Genre: <b>{{ song.genre }}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SongCard',
    props: {
      song: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .card-content {
    padding: 10px;
  }

  .subtitle {
    margin-bottom: 15px;
  }
</style>
