<template>
  <div class="board-container">
    <div class="board columns">
      <Container
          v-for="(state, listIndex) in states" :key="state.id" class="column list-container" ref="list"
          :data-id="state.id"
          group-name="list"
          drag-class="card-ghost"
          drop-class="card-ghost-drop"
          non-drag-area-selector=".icon"
          :animation-duration="100"
          @drop="e => onCardDrop(e, state, listIndex)">
        <div class="list-header">
          {{ state.name }}
        </div>
        <Draggable v-for="song in filmsByState(state.id)" :key="song.id">
          <film-songs-card :song="song" @edit="openModalSong"/>
        </Draggable>

      </Container>
    </div>
  </div>
</template>

<script>
  import {Container, Draggable} from 'vue-smooth-dnd'

  import {makeDropHandler} from '../../../utils/plugins'
  import SongModal from "../../modals/SongModal";
  import FilmSongsCard from "./FilmSongCard";

  import {mapGetters} from "vuex";
  import {UPDATE_SONG_STATE} from "../../../store/actions";

  export default {
    name: 'FilmSongsBoard',
    components: {
      FilmSongsCard,
      Container,
      Draggable,
    },

    data: function () {
      return {
        modal: false,
        activeListId: null,
      }
    },

    computed: {
      ...mapGetters(['filmsByState']),
      states () {
        return this.$store.state.film.film.workflow
      }
    },

    methods: {

      openModalSong (licensing) {
        this.$modal.open({
          component: SongModal,
          props: {licensing},
          hasModalCard: true
        })
      },

      addItem (listId, title, description, date) {
        this.$store.commit('addItem', {listId, title, description, date})
      },

      onCardDrop: makeDropHandler('onCardDropComplete'),

      onCardDropComplete (src, trg, element) {
        if (src.params[0].id !== trg.params[0].id) {
          this.$store.dispatch(UPDATE_SONG_STATE, {
            id: element.dataset.id,
            from: src.params[0].id,
            to: trg.params[0].id,
          })
        }
      },
    }
  }
</script>

<style lang="scss">
  .board {
    white-space: nowrap;

    > * {
      display: inline-block;
    }

    .new-list {
      margin-top: 10px;
    }
  }

  .list-container {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: #f2f3fd;
  }

  .lists-container {
    > * {
      display: inline-block;
      vertical-align: top;
    }
  }

  .list-header {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bolder;
  }

  .list-body {
  }

  .card-ghost {
    transition: 0.25s all;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    transform: scale(1.1) rotate(1deg);
  }

  .card-ghost-drop {
    transform: scale(1);
  }

  .list-drag-handle {
    cursor: move;
    padding: 5px;
  }

  .item-entry {
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #DDD;
  }

</style>
