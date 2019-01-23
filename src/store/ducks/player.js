import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
};

const INITIAL_STATE = {
  currentSong: null,
  playlist: [],
  status: Sound.status.PLAYING,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        playlist: action.payload.playlist,
        status: Sound.status.PLAYING,
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    case Types.NEXT: {
      const currentIndex = state.playlist.findIndex(song => song.id === state.currentSong.id);

      if (currentIndex < state.playlist.length - 1) {
        return {
          ...state,
          currentSong: state.playlist[currentIndex + 1],
          status: Sound.status.PLAYING,
        };
      }

      return { ...state };
    }
    case Types.PREV: {
      const currentIndex = state.playlist.findIndex(song => song.id === state.currentSong.id);

      if (currentIndex > 0) {
        return {
          ...state,
          currentSong: state.playlist[currentIndex - 1],
          status: Sound.status.PLAYING,
        };
      }

      return { ...state };
    }
    default:
      return state;
  }
}

export const Creators = {
  loadSong: (song, playlist) => ({ type: Types.LOAD, payload: { song, playlist } }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
  next: () => ({ type: Types.NEXT }),
  prev: () => ({ type: Types.PREV }),
};
