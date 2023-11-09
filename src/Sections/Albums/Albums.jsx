import './Albums.css'
import SongRow from '../Rows/SongRow'
import { useEffect } from 'react'
import { useStateProvider } from './../../Store/UserContext'
import reducerCases from '../../Store/reducer'
import axios from 'axios'

const Albums = (props) => {
  const [{ token, playlists}, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id, type, owner, images }) => {
        const { url } = images[1];
        const { display_name } = owner;
        return { name, id, type, display_name, url };
      });


      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  return (
    <div id='song-container' className='w-[100%] h-[100%] overflow-y-scroll bg-[#121212] mt-1'>
      <SongRow DUMMY_DATA={playlists} title='your playlists' />
    </div>
  )
}

export default Albums