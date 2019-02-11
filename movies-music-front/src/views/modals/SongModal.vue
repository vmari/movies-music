<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <div class="modal-card-title">
        <div class="level">
          <div class="level-right">
            {{ licensing.song.title }}
          </div>
          <div class="level-left">
            <div class="tags has-addons are-medium">
              <span class="tag is-dark">status</span>
              <span class="tag is-primary">{{ licensing.status.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="modal-card-body">
      <h2 class="subtitle">Song Details</h2>
      <song-card :song="licensing.song" class="song-card"/>
      <h2 class="subtitle">Tracks where it's used</h2>
      <table class="table is-fullwidth is-striped">
        <thead>
        <tr>
          <th>#Seq.</th>
          <th>Cue</th>
          <th>Start</th>
          <th>End</th>
          <th>Length</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="track in licensing.tracks" :key="track.id">
          <td>{{ track.sequence }}</td>
          <td>{{ track | cue }}</td>
          <td>{{ track.start | hms }}</td>
          <td>{{ track.end | hms }}</td>
          <td>{{ track.end - track.start | hms }}</td>
          <td><a class="delete" title="Remove from this song" @click="removeTrackFromSong(track)"></a></td>
        </tr>
        <tr v-if="!licensing.tracks.length">
          <td colspan="6">No tracks found</td>
        </tr>
        </tbody>
      </table>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
    </footer>
  </div>
</template>


<script>
  import {mapGetters} from "vuex";
  import store from "@/store";
  import SongCard from "../../components/SongCard";
  import {DELETE_TRACK_FROM_LICENSING} from "../../store/actions";

  export default {
    name: 'SongModal',
    components: {SongCard},
    data () {
      return {}
    },
    methods: {
      removeTrackFromSong (track) {
        store.dispatch(DELETE_TRACK_FROM_LICENSING, this.licensing.id, track.id)
      }
    },
    computed: {
      ...mapGetters(['film', 'tracks']),
    },
    props: {
      licensing: Object
    }
  }
</script>


<style scoped lang="scss">
  .song-card {
    margin-bottom: 30px;
  }
</style>
