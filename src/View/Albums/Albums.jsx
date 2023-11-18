import './Albums.css';
import SongRow from '../../Sections/Rows/SongRow'
import { useEffect } from 'react';
import { useStateProvider } from './../../Store/UserContext';
import { reducerCases } from '../../Store/constants';
import axios from 'axios';
import ArtistRow from '../../Sections/Rows/ArtistRow/ArtistRow';

const Albums = () => {
  // destructuring the useStateProvider 
  const [{ token, playlists, featuredPlaylist, newReleases }, dispatch] = useStateProvider();

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

    const getFeaturedPlaylist = async () => {
      const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }
      })
      const { items } = response.data.playlists
      const featuredPlaylistData = items.map(({ id, name, images, type, owner }) => {
        const { url } = images[0];
        const { display_name } = owner;
        return { id, name, url, display_name, type }
      })
      dispatch({ type: reducerCases.SET_FEATURED_PLAYLISTS, featuredPlaylist: featuredPlaylistData })
    }
    // function caling 
    getPlaylistData();
    getFeaturedPlaylist();

    const getNewReleases = async () => {
      const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        }
      })
      const { items } = response.data.albums
      const newReleases = items.map(({ id, name, images, type, artists }) => {
        const { url } = images[1];
        const artist = artists.map(artist => artist.name)
        return { id, name, url, type, artist }
      })
      dispatch({ type: reducerCases.SET_NEW_RELEASES, newReleases: newReleases })
    }
    getNewReleases()
  }, [token, dispatch]);

  return (
    <div id='song-container' className='w-[100%] h-[100%] overflow-y-scroll bg-[#121212] mt-1'>
      <SongRow DUMMY_DATA={playlists} title='your playlists' />
      <SongRow DUMMY_DATA={featuredPlaylist} title='featured playlist' />
      <SongRow DUMMY_DATA={newReleases} title='New Releases' />
      <ArtistRow title='Artists' />
    </div>
  );
};

export default Albums;
