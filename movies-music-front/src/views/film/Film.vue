<template>
  <div class="film">
    <div class="film-header">
      <div class="container">
        <div class="columns">
          <div class="column is-narrow">
            <img src="../../assets/lotr-cover.jpg" width="100"/>
          </div>
          <div class="column">
            <h1 class="title">{{film.title}}</h1>
            <p class="subtitle">
              <span class="tag is-success is-medium is-rounded">Finished</span>
            </p>
            <p>5 Tracks - 220m - U$S 20k </p>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="film-songs">
        <div class="box film-content">
          <div class="tabs">
            <ul>
              <router-link tag="li" active-class="is-active" :exact="true"
                           :to="{name:'film', params: {id: film.id}}">
                <a>
                  <span class="icon is-small"><i class="mdi mdi-movie" aria-hidden="true"></i></span>
                  <span>Overview</span>
                </a>
              </router-link>
              <router-link tag="li" active-class="is-active" :to="{name:'film_songs', params: {id: film.id}}">
                <a>
                  <span class="icon is-small"><i class="mdi mdi-audiotrack" aria-hidden="true"></i></span>
                  <span>Songs</span>
                </a>
              </router-link>
              <router-link tag="li" active-class="is-active" :to="{name:'film_settings', params: {id: film.id}}">
                <a>
                  <span class="icon is-small"><i class="mdi mdi-settings" aria-hidden="true"></i></span>
                  <span>Settings</span>
                </a>
              </router-link>
            </ul>
          </div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {FETCH_FILM} from "../../store/actions";
  import store from "@/store";
  import {mapGetters} from "vuex";

  export default {
    name: 'Film',
    beforeRouteEnter (to, from, next) {
      store.dispatch(FETCH_FILM, to.params.id).then(() => {
        next();
      });
    },
    computed: {
      ...mapGetters(['film'])
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .film-header {
    h1 {
      font-size: 48px;
      font-weight: lighter;
      color: white;
    }

    padding: 60px 0 170px 0;
    margin-bottom: -150px;
    color: white;
    background: rgb(57, 189, 190);
    background: url("../../assets/film-bg-bottom.png") repeat-x bottom,
    url("../../assets/film-bg-top.png") repeat-x top,
    linear-gradient(149deg, rgba(57, 189, 190, 1) 0%, rgba(166, 54, 161, 1) 100%);
  }
</style>
