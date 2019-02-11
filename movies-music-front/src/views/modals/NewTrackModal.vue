<template>
  <div class="modal-card">
    <form @submit.prevent="createTrack">
      <header class="modal-card-head">
        <p class="modal-card-title">Create track</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Title">
          <b-input
              type="text"
              v-model="track.title"
              placeholder="Title"
              required>
          </b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Reel" type="text" icon="camera-roll"
                   v-model="track.reel"></b-input>
          <p class="control">
            <span class="button is-static">m</span>
          </p>
          <b-input placeholder="Cue Number" type="text" icon="camera-roll"
                   v-model="track.cueNumber"></b-input>
        </b-field>
        <b-field label="Timing"
                 message="Time format hhhh:mm:ss.s">
          <b-field>
            <b-input placeholder="From" type="text" icon="hourglass-empty"
                     v-model="track.from"></b-input>
            <p class="control">
              <span class="button is-static">to</span>
            </p>
            <b-input placeholder="To" type="text" icon="hourglass-empty"
                     v-model="track.to"></b-input>
          </b-field>
        </b-field>
        <b-field label="Scene description">
          <b-input type="textarea"
                   maxlength="255"
                   v-model="track.sceneDescription"
                   placeholder="Scene description">
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary" type="submit">Save</button>
      </footer>
    </form>
  </div>
</template>


<script>
  import {mapGetters} from "vuex";
  import store from "../../store";
  import {UPDATE_TRACK, CREATE_TRACK} from "../../store/actions";

  export default {
    name: 'NewTrackModal',
    computed: {
      ...mapGetters(['film'])
    },
    methods: {
      createTrack () {
        const action = (this.track.hasOwnProperty('id')) ? UPDATE_TRACK : CREATE_TRACK;
        this.$store.dispatch(action, {idFilm: store.state.film.film.id, track: this.track}).then(() => {
          this.$parent.close();
        })
      },
    },
    props: {
      track: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>
