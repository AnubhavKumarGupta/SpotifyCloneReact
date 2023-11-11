import { reducerCases } from "./constants";

export const intialState = {
  token: null,
  playlists: [],
  userInfo: null,
  artistsData: [],
  topAlbums: [],
  selectedPlaylist:null,
  intialPlaylistId:'1P06JA4tvgoDtwOsnL2gCq',
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
    default: {
      return state;
    }
  }
};

export default reducer;
