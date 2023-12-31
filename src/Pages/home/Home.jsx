import React from 'react'
import Left from '../../sections/leftSection/Left'
import RightSection from '../../sections/rightSection/RightSection'
import Controls from '../../Sections/Controls/Controls'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

import './Home.css';
import SongRow from '../../components/rows/songRow/SongRow'
import ArtistRow from '../../components/rows/artistRow/ArtistRow';

import { useEffect } from 'react';
import { useStateProvider } from '../../Store/UserContext';
import { reducerCases } from '../../Store/constants';
import axios from 'axios';


const Home = (props) => {

  // destructuring the useStateProvider 
  const [{ token, playlists, featuredPlaylist, newReleases }, dispatch] = useStateProvider();

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
    const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists?limit=10', {
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

  useEffect(() => {
    getPlaylistData();
    getFeaturedPlaylist();
    getNewReleases()
  }, [token, dispatch]);



  return (
    <ContentWrapper className="w-full h-screen overflow-hidden flex items-center justify-center">
      <Left />
      <RightSection className='song-container overflow-y-scroll bg-[#121212] mt-1'>
        <SongRow DUMMY_DATA={playlists} title='your playlists' />
        <SongRow DUMMY_DATA={featuredPlaylist} title='featured playlist' />
        <SongRow DUMMY_DATA={newReleases} title='New Releases' />
        <ArtistRow title='Artists' />
      </RightSection>
      <Controls />
    </ContentWrapper>
  )
}

export default Home