<template>
  <div class="modal-card">
    <form @submit.prevent="createSong">
      <header class="modal-card-head">
        <p class="modal-card-title">Create new song</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Tracks">
          <b-taginput
              v-model="song.tracks"
              :data="filteredTracks"
              autocomplete
              rounded
              @typing="getFilteredTracks"
              field="cue"
              icon="camera-roll"
              placeholder="Add a track">
            <template slot-scope="props">
              <strong>{{props.option.cue}}</strong>
            </template>
            <template slot="empty">
              Track not found. <a>Create a new one</a>
            </template>
          </b-taginput>
        </b-field>
        <b-field label="Title">
          <b-input
              required
              type="text"
              v-model="song.song.title"
              placeholder="Title">
          </b-input>
        </b-field>
        <b-field label="Artist">
          <b-input
              required
              type="text"
              v-model="song.song.artist"
              placeholder="Artist">
          </b-input>
        </b-field>
        <b-field label="Genre">
          <b-input
              required
              type="text"
              v-model="song.song.genre"
              placeholder="Genre">
          </b-input>
        </b-field>
        <b-field label="Duration">
          <b-input
              required
              type="number"
              placeholder="Duration (in seconds)"
              v-model="song.song.duration">
          </b-input>
        </b-field>
        <b-field label="Initial State">
          <b-select
              v-model="song.status"
              placeholder="Select a state"
              expanded
              required>
            <option
                v-for="option in states"
                :value="option"
                :key="option.id">
              {{ option.name }}
            </option>
          </b-select>
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
  import {CREATE_SONG, FETCH_TRACKS, UPDATE_SONG} from "../../store/actions";

  export default {
    name: 'NewSongModal',
    data () {
      return {
        filteredTracks: []
      }
    },
    mounted () {
      store.dispatch(FETCH_TRACKS, store.state.film.film.id);
    },
    computed: {
      ...mapGetters(['film', 'tracks']),
      states () {
        return this.$store.state.film.film.workflow
      }
    },
    methods: {
      createSong () {
        const action = (this.song.hasOwnProperty('id')) ? UPDATE_SONG : CREATE_SONG;
        this.$store.dispatch(action, {idFilm: store.state.film.film.id, song: this.song}).then(() => {
          this.$parent.close();
        })
      },
      // eslint-disable-next-line
      getFilteredTracks (text) {
        this.filteredTracks = this.tracks.filter(option => {
          return (!this.song.tracks || this.song.tracks.indexOf(option) === -1) && option.licensingProcess === null && option.cue.toLowerCase().includes(text.toLowerCase());
        })
      }
    },
    props: {
      song: {
        type: Object,
        default () {
          return {
            song: {},
            status: {},
            tracks: [],
          }
        }
      }
    }
  }
</script>
