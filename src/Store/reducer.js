import { reducerCases } from "./constants";

export const intialState = {
  token: null,
  userInfo: null,
  selectedPlaylist:null,
  currentlyPlaying:null,
  playerState:false,
  intialPlaylistId:'1P06JA4tvgoDtwOsnL2gCq',
  artistsData: [],
  playlists: [],
  topAlbums: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_ARTIST: {
      return {
        ...state,
        artistsData: action.artistsData,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case reducerCases.SET_ALBUMS: {
      return {
        ...state,
        topAlbums: action.topAlbums,
      };
    }
    case reducerCases.SET_PLAYING:{
      return {
        ...state,
        currentlyPlaying : action.currentlyPlaying,
      }
    }
    case reducerCases.SET_PLAYER_STATE :{
      return {
        ...state,
        playerState : action.playerState,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
