<template>

  <div class="card-board" :data-id="song.id" @click="edit">
    <div>
      <p class="item-title">{{ song.song.title }}</p>
      <p class="item-description" v-if="song.song.artist">{{ song.song.artist }}</p>
    </div>
    <div class="song-metadata">
      <span v-for="track in song.tracks" :key="track.id">
        {{ track|cue }}
      </span>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'FilmSongsCard',
    props: {
      song: Object
    },

    methods: {
      edit () {
        this.$emit('edit', this.song)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .card-board {
    position: relative;
    cursor: pointer;
    background-color: white;
    margin: 5px;
    border-radius: 10px;

    & > div {
      padding: 5px 10px;
    }
  }

  .item-title {
    font-weight: bold;
  }

  .song-metadata {
    border-top: 1px solid #ececec;
    padding: 5px;
    font-size: 12px;
    color: #949494;

    .icon {
      padding: 3px;
      display: inline;

      & > i {
        margin-right: 2px;
        font-size: 16px;
      }
    }
  }
</style>
