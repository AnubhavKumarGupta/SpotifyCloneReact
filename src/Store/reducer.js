import { reducerCases } from "./constants";

export const intialState = {
  token: null,
  userInfo: null,
  selectedPlaylist:null,
  currentlyPlaying:null,
  playerState:false,
  view:'HOME',
  selectedPlaylistId:'45pGRUpBruO3WnMDiAj2oq',
  artistsData: [],
  playlists: [],
  featuredPlaylist : [],
  newReleases:[]
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
    case reducerCases.SET_PLAYING:{
      return {
        ...state,
        currentlyPlaying : action.currentlyPlaying,
      }
    }
    case reducerCases.SET_VIEW : {
      return {
        ...state,
        view : action.view,
      }
    }
    case reducerCases.SET_SELECTED_PLAYLISTID:{
      return {
        ...state,
        selectedPlaylistId : action.selectedPlaylistId,
      }
    }
    case reducerCases.SET_FEATURED_PLAYLISTS:{
      return {
        ...state,
        featuredPlaylist : action.featuredPlaylist,
      }
    }
    case reducerCases.SET_NEW_RELEASES:{
      return{
        ...state,
        newReleases : action.newReleases,
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
