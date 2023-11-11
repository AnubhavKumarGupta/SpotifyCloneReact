import './Albums.css';
import SongRow from '../Rows/SongRow';
import { useEffect } from 'react';
import { useStateProvider } from './../../Store/UserContext';
import { reducerCases } from '../../Store/constants';
import axios from 'axios';
import ArtistRow from '../Rows/ArtistRow/ArtistRow';








const Albums = () => {
  // destructuring the useStateProvider 
  const [{ token, playlists, topAlbums }, dispatch] = useStateProvider();

  useEffect(() => {
    //fetching the userPlaylist details
    const getPlaylistData = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/me/playlists',
          {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            },
          }
        );
        const { items } = response.data;
        const playlistsData = items.map(({ name, id, type, owner, images }) => {
          const { url } = images[1];
          const { display_name } = owner;
          return { name, id, type, display_name, url };
        });
        dispatch({
          type: reducerCases.SET_PLAYLISTS,
          playlists: playlistsData,
        });
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };





    //fetching the artist top albums details
    const getTopPlaylists = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw/albums',
          {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json',
            },
          }
        );
        const { items } = response.data;
        const topAlbumsData = items.map(({ name, images, id, type }) => {
          const { url } = images[0];
          return { name, id, url, type };
        });
        dispatch({
          type: reducerCases.SET_ALBUMS,
          topAlbums: topAlbumsData,
        });
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };




    // function caling 
    getPlaylistData();
    getTopPlaylists();




  }, [token, dispatch]);

  return (
    <div id='song-container' className='w-[100%] h-[100%] overflow-y-scroll bg-[#121212] mt-1'>
      <SongRow DUMMY_DATA={playlists} title='your playlists' />
      <SongRow DUMMY_DATA={topAlbums} title='Artist top Albums' />
      <ArtistRow title='Artists' />
    </div>
  );
};

export default Albums;
