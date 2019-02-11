<template>
  <div>

    <div class="level">
      <div class="level-right">
        <div class="level-item">
          <a class="button is-small is-rounded is-success" @click="newSong">New Song</a>
        </div>
      </div>

      <div class="level-left">
        <div class="level-item">
          <div class="buttons has-addons">
            <router-link :to="{name:'film_songs', params:{id: film.id}}" :exact="true" title="Show as columns"
                         class="button is-small is-rounded button-layout " active-class="is-active is-primary">
              <i class="mdi mdi-view-column"></i>
              Board
            </router-link>
            <router-link :to="{name:'film_songs_table', params:{id: film.id}}" title="Show as list"
                         class="button is-small is-rounded button-layout" active-class="is-active is-primary">
              <i class="mdi mdi-view-list"></i>
              List
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  import store from "@/store";
  import {mapGetters} from "vuex";
  import {FETCH_SONGS} from "../../../store/actions";
  import NewSongModal from "../../modals/NewSongModal";

  export default {
    name: 'FilmSongs',
    beforeRouteEnter (to, from, next) {
      store.dispatch(FETCH_SONGS, to.params.id).then(() => {
        next();
      });
    },
    methods: {
      newSong () {
        this.$modal.open({
          component: NewSongModal,
          parent: this,
          hasModalCard: true
        })
      },
    },
    computed: {
      ...mapGetters(['songs', 'film'])
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .button-layout {
    padding: 7px;
  }
</style>
