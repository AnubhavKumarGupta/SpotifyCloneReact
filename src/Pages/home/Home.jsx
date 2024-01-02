import React, { useState } from 'react'
import Left from '../../sections/leftSection/Left'
import RightSection from '../../sections/rightSection/RightSection'
import Controls from '../../Sections/Controls/Controls'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import SongRow from '../../components/rows/songRow/SongRow'
import ArtistRow from '../../components/rows/artistRow/ArtistRow';
import LoadingSkeletonRow from '../../Components/LoadingSkeletons/LoadingSkeletonRow'

import './Home.css';

import { useEffect } from 'react';
import { useStateProvider } from '../../Store/UserContext';
import { reducerCases } from '../../Store/constants';
import axios from 'axios';

const Home = (props) => {

  const [playlistLoading, setPlaylistLoading] = useState(null);
  const [featureLoading, setFeatureLoading] = useState(null);
  const [newReleaseLoading, setNewReleaseLoading] = useState(null);

  // destructuring the useStateProvider 
  const [{ token, playlists, featuredPlaylist, newReleases }, dispatch] = useStateProvider();


  const getPlaylistData = async () => {
    setPlaylistLoading('loading')
    const response = await axios.get('https://api.spotify.com/v1/playlists', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    })
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
    setPlaylistLoading(null);
  }

  const getFeaturedPlaylist = async () => {
    setFeatureLoading('loading')
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
    setFeatureLoading(null);
  }

  const getNewReleases = async () => {
    setNewReleaseLoading('loading')
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
    setNewReleaseLoading(null)
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
        {playlistLoading == 'loading' && <SongRow DUMMY_DATA={playlists} title='your playlists' />}
        {playlistLoading != 'loading' && <LoadingSkeletonRow />}
        {!featureLoading && <SongRow DUMMY_DATA={featuredPlaylist} title='featured playlist' />}
        {featureLoading && <LoadingSkeletonRow />}
        {!newReleaseLoading && <SongRow DUMMY_DATA={newReleases} title='New Releases' />}
        {newReleaseLoading && <LoadingSkeletonRow />}
        <ArtistRow title='Artists' />
      </RightSection>
      <Controls />
    </ContentWrapper>
  )
}

export default Home