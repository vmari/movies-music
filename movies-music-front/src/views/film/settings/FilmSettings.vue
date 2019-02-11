<template>
  <div>
    <div class="columns">
      <div class="column is-narrow lateral-menu">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li>
              <router-link active-class="is-active" :exact="true" :to="{name: 'film_settings', params: {id: film.id}}">
                Details
              </router-link>
            </li>
            <li>
              <router-link active-class="is-active" :to="{name: 'film_settings_tracks', params: {id: film.id}}">
                Tracks
              </router-link>
            </li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li>
              <router-link active-class="is-active" :to="{name: 'film_settings_team', params: {id: film.id}}">
                Team
              </router-link>
            </li>
            <li>
              <router-link active-class="is-active" :to="{name: 'film_settings_workflow', params: {id: film.id}}">
                Workflow
              </router-link>
            </li>
            <li>
              <router-link active-class="is-active" :to="{name: 'film_settings_admin', params: {id: film.id}}">
                Danger Zone
              </router-link>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'FilmSettings',
    computed: {
      ...mapGetters(['film'])
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .menu {
    min-width: 200px;
  }
</style>
