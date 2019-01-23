import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
  DRAG_POSITION: 'player/DRAG_POSITION',
  SET_POSITION: 'player/SET_POSITION',
  SET_VOLUME: 'player/SET_VOLUME',
};

const INITIAL_STATE = {
  currentSong: null,
  playlist: [],
  status: Sound.status.PLAYING,
  position: null,
  positionPreview: null,
  duration: null,
  volume: 100,
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
          position: 0,
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
          position: 0,
        };
      }

      return { ...state };
    }
    case Types.PLAYING:
      return { ...state, ...action.payload };
    case Types.DRAG_POSITION:
      return { ...state, positionPreview: state.duration * action.payload.percent };
    case Types.SET_POSITION:
      return { ...state, position: state.duration * action.payload.percent, positionPreview: null };
    case Types.SET_VOLUME:
      return { ...state, volume: action.payload.volume };
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
  playing: ({ position, duration }) => ({ type: Types.PLAYING, payload: { position, duration } }),
  dragPosition: percent => ({ type: Types.DRAG_POSITION, payload: { percent } }),
  setPosition: percent => ({ type: Types.SET_POSITION, payload: { percent } }),
  setVolume: volume => ({ type: Types.SET_VOLUME, payload: { volume } }),
};
