import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "./jwt.service";
import {API_URL} from "./config";

const ApiService = {
  init () {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `${JwtService.getToken()}`;
  },

  query (resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get (resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put (resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const FilmsService = {
  search (query) {
    return ApiService.query("films/search", {query});
  },
  getSongs (idFilm) {
    return ApiService.get(`film/${idFilm}/songs`);
  },
  createSong (idFilm, licensingProcess) {
    return ApiService.post(`film/${idFilm}/licensingProcess`, {licensingProcess});
  },
  createTrack (idFilm, track) {
    return ApiService.post(`film/${idFilm}/track`, {track});
  },
  get (id) {
    return ApiService.get("film", id);
  },
  create (film) {
    return ApiService.post("film", {film});
  },
  update (id, film) {
    return ApiService.update("film", id, {film});
  },
  destroy (id) {
    return ApiService.delete(`film/${id}`);
  }
};
export const TracksService = {
  get (idFilm) {
    return ApiService.get(`film/${idFilm}/tracks`);
  },
  create (idFilm, track) {
    return ApiService.post(`films/${idFilm}/track`, {track});
  },
  update (id, track) {
    return ApiService.update("track", id, {track});
  },
  destroy (id) {
    return ApiService.delete(`track/${id}`);
  }
};
export const LicensingService = {
  updateStatus ({id, from, to}) {
    return ApiService.post(`licensing/${id}/updateStatus`, {from, to});
  },
  update (id, song) {
    return ApiService.update(`licensing/${id}`, id, {licensingProcess: song});
  },
};
export const SongsService = {
  search (query) {
    return ApiService.query('songs/search', {query});
  },
  create (song) {
    return ApiService.post('song', {song});
  },
  get (id) {
    return ApiService.get(`song/${id}`);
  },
  update (id, song) {
    return ApiService.update("song", id, {song});
  },
  destroy (id) {
    return ApiService.delete(`song/${id}`);
  }
};
