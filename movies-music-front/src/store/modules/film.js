import Vue from "vue";
import {FilmsService, TracksService} from "@/common/api.service";
import {
  FETCH_FILM,
  FETCH_TRACKS,
  FETCH_SONGS,
  CREATE_SONG,
  UPDATE_SONG_STATE,
  CREATE_TRACK
} from "../actions";
import {ADD_SONG, ADD_TRACK, RESET_STATE, SET_FILM, SET_SONG, SET_SONGS, SET_TRACKS} from "../mutations";
import {LicensingService} from "../../common/api.service";

const initialState = {
  film: {},
  songs: [],
  tracks: [],
};

export const state = Object.assign({}, initialState);

export const actions = {
  [FETCH_FILM] (context, id) {
    return FilmsService.get(id).then(({data}) => {
      context.commit(SET_FILM, data.film);
      return data;
    });
  },
  [FETCH_TRACKS] (context, id) {
    return TracksService.get(id).then(({data}) => {
      data.tracks.forEach(track => {
        track.cue = Vue.filter('cue')(track);
      });
      context.commit(SET_TRACKS, data.tracks);
      return data;
    });
  },
  [FETCH_SONGS] (context, id) {
    return FilmsService.getSongs(id).then(({data}) => {
      context.commit(SET_SONGS, data.songs);
      return data;
    });
  },
  [UPDATE_SONG_STATE] (context, payload) {
    return LicensingService.updateStatus(payload).then(({data}) => {
      context.commit(SET_SONG, data.song);
      return data;
    });
  },
  [CREATE_SONG] (context, {idFilm, song}) {
    return FilmsService.createSong(idFilm, song).then(({data}) => {
      context.commit(ADD_SONG, data.licensingProcess);
      return Promise.resolve(data.licensingProcess);
    });
  },
  [CREATE_TRACK] (context, {idFilm, track}) {
    return FilmsService.createTrack(idFilm, track).then(({data}) => {
      context.commit(ADD_TRACK, data.track);
      return Promise.resolve(data.track);
    });
  },
};

export const mutations = {
  [SET_FILM] (state, film) {
    state.film = film;
  },
  [SET_SONGS] (state, songs) {
    state.songs = songs;
  },
  [ADD_SONG] (state, song) {
    state.songs.push(song);
  },
  [ADD_TRACK] (state, track) {
    state.tracks.push(track);
  },
  [SET_SONG] (state, song) {
    for (let i = 0; i < state.songs.length; i++) {
      if (state.songs[i].id === song.id) {
        Vue.set(state.songs[i], 'status', song.status)
        break;
      }
    }
  },
  [SET_TRACKS] (state, tracks) {
    state.tracks = tracks;
  },
  [RESET_STATE] () {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  film (state) {
    return state.film;
  },
  filmsByState (state) {
    return (statusId) => state.songs.filter(song => song.status.id === statusId);
  },
  tracks (state) {
    return state.tracks;
  },
  songs (state) {
    return state.songs;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
