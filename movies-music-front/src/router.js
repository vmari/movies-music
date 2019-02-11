import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Film from "./views/film/Film";
import FilmOverview from "./views/film/FilmOverview";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/film/:id',
      component: Film,
      meta: {requiresAuth: true},
      children: [
        {
          path: '',
          name: 'film',
          component: FilmOverview
        },
        {
          path: 'songs',
          component: () => import(/* webpackChunkName: "songs" */ './views/film/songs/FilmSongs.vue'),
          children: [
            {
              path: '',
              name: 'film_songs',
              component: () => import(/* webpackChunkName: "songs" */ './views/film/songs/FilmSongsBoard.vue')
            },
            {
              path: 'list',
              name: 'film_songs_table',
              component: () => import(/* webpackChunkName: "songs" */ './views/film/songs/FilmSongsTable.vue')
            },
          ]
        },
        {
          path: 'settings',
          component: () => import(/* webpackChunkName: "settings" */ './views/film/settings/FilmSettings.vue'),
          children: [
            {
              path: '',
              name: 'film_settings',
              component: () => import(/* webpackChunkName: "settings" */ './views/film/settings/FilmSettingsDetails.vue')
            },
            {
              path: 'tracks',
              name: 'film_settings_tracks',
              component: () => import(/* webpackChunkName: "settings" */ './views/film/settings/FilmSettingsTracks.vue')
            },
            {
              path: 'team',
              name: 'film_settings_team',
              component: () => import(/* webpackChunkName: "settings" */ './views/film/settings/FilmSettingsTeam.vue')
            },
            {
              path: 'workflow',
              name: 'film_settings_workflow',
              component: () => import(/* webpackChunkName: "settings" */ './views/film/settings/FilmSettingsWorkflow.vue')
            },
            {
              path: 'admin',
              name: 'film_settings_admin',
              component: () => import(/* webpackChunkName: "settings" */ './views/film/settings/FilmSettingsAdmin.vue')
            },
          ]
        },
      ]
    },
    {path: '*', redirect: '/'},
  ]
})
