import './Playlist.css'
import { useEffect } from 'react'
import { reducerCases } from '../../Store/constants'

// importing icons 
import { BiTimeFive } from 'react-icons/bi'
import axios from 'axios'
import { useStateProvider } from '../../Store/UserContext'

import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Left from '../../Sections/leftSection/Left'
import Controls from '../../Sections/Controls/Controls'
import RightSection from '../../Sections/rightSection/RightSection'

const Playlist = () => {
    const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] = useStateProvider()
    useEffect(() => {
        const getIntialPlaylist = async () => {
            const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            })
            const selectedPlaylist = {
                id: response.data.id,
                name: response.data.name,
                description: response.data.description.startsWith("<a")
                    ? ""
                    : response.data.description,
                image: response.data.images[0].url,
                tracks: response.data.tracks.items.map(({ track }) => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist) => artist.name),
                    image: track.album.images[2].url,
                    duration: track.duration_ms,
                    album: track.album.name,
                    uri: track.uri,
                    track_number: track.track_number,
                })),
            };
            // console.log('track uri',selectedPlaylist.tracks[0].uri);
            dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist })
        };
        getIntialPlaylist();
    }, [token, selectedPlaylistId, dispatch])


    const getSongInfo = async (trackId) => {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
        const songData = response.data
        const songInfo = {
            id: songData.id,
            name: songData.name,
            artists: songData.artists.map(artist => artist.name + ', '),
            image: songData.album.images[0].url,
        }
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: songInfo })
    }

    const playSong = async (uri) => {
        const response = await fetch('https://api.spotify.com/v1/me/player/play', {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uris: [uri] })
        })
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
    }

    const setPlayingState = (id, uri) => {
        getSongInfo(id)
        playSong(uri)
    }

    const msToMinutes = (ms) => {
        const minutes = Math.floor(ms / 60000)
        const seconds = Math.floor((ms / 60000) / 1000).toFixed(0)
        return (minutes + ':' + (seconds < 10 ? '0' : '') + seconds)
    }
    return (
        <ContentWrapper className="w-full h-screen overflow-hidden flex">
            <Left />
            <RightSection className="bg-[#121212] overflow-y-scroll playlist-container">
                {
                    selectedPlaylist && (
                        <>
                            <div className='w-full h-[300px] flex items-center justify-start p-10'>
                                <div className='w-[250px] h-[250px]'>
                                    <img src={selectedPlaylist.image} alt={selectedPlaylist.name} className='w-full h-full object-contain' />
                                </div>
                                <div className='px-5'>
                                    <span className='text-md text-white font-semibold my-3'>Playlist</span>
                                    <h1 className='text-7xl font-bold mt-5'>{selectedPlaylist.name}</h1>
                                    <p className='text-white text-md mt-3'>{selectedPlaylist.description}</p>
                                </div>
                            </div>
                            <table id='list' className='w-full h-full flex flex-col px-5'>
                                <thead>
                                    <tr className='w-full text-left' id='playlist-head'>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Album</th>
                                        <th><BiTimeFive /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        selectedPlaylist.tracks.map(({ id, name, artists, image, duration, album, uri }, index) => {
                                            return (

                                                <tr className='w-full my-1 hover:bg-[#27282D] py-1 cursor-pointer' id='playlist-body' key={id} onClick={() => setPlayingState(id, uri)}>
                                                    <td className='flex items-center justify-center'>{index + 1}</td>
                                                    <td>
                                                        <div className='flex items-center justify-start'>
                                                            <img src={image} alt="track" />
                                                            <div className='flex flex-col text-left px-5'>
                                                                <span>{name}</span>
                                                                <span>{artists}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='flex items-center'>
                                                        <span>{album}</span>
                                                    </td>
                                                    <td className='flex items-center'>
                                                        <span>{msToMinutes(duration)}</span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </>
                    )
                }
            </RightSection>

            <Controls />
        </ContentWrapper>
    )
}

export default Playlist;