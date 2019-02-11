<template>
  <div>

    <div class="level">
      <div class="level-right">
        <div class="level-item">
          <a class="button is-small is-rounded is-success" @click="newTrack">New Track</a>
        </div>
      </div>
    </div>
    <table class="table is-fullwidth is-striped">
      <thead>
      <tr>
        <th>#Seq.</th>
        <th>Cue</th>
        <th>Start</th>
        <th>End</th>
        <th>Length</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(track,i) in tracks" :key="track.id">
        <td>{{ i+1 }}</td>
        <td>{{ track | cue }}</td>
        <td>{{ track.start | hms }}</td>
        <td>{{ track.end | hms }}</td>
        <td>{{ track.end - track.start | hms }}</td>
        <td><span
            v-if="track.licensingProcess != null">Used by <a>{{ track.licensingProcess.song.title }}</a></span><span
            v-else>Free</span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import store from "../../../store";
  import {FETCH_TRACKS} from "../../../store/actions";
  import NewTrackModal from "../../modals/NewTrackModal";

  export default {
    name: 'FilmSettingsTracks',
    beforeRouteEnter (to, from, next) {
      store.dispatch(FETCH_TRACKS, to.params.id).then(() => {
        next();
      });
    },
    methods: {
      newTrack () {
        this.$modal.open({
          component: NewTrackModal,
          parent: this,
          hasModalCard: true
        })
      },
    },
    computed: {
      ...mapGetters(['film', 'tracks'])
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
</style>
