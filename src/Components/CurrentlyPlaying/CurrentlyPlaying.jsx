import axios from "axios"
import { useEffect } from "react"
import { useStateProvider } from "../../Store/UserContext"
import { reducerCases } from "../../Store/constants"

const CurrentlyPlaying = () => {
    const [{ token, currentlyPlaying }, dispatch] = useStateProvider()
    useEffect(() => {
        const getCurrectTrack = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            })
            if (response.data !== '') {
                const { item } = response.data;
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map(artist => artist.name + ', '),
                    image: item.album.images[0].url,
                }
                dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
            } else {
                dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null })
            }
        }

        getCurrectTrack()
    }, [token, dispatch, currentlyPlaying])
    return (
        <>
            {
                currentlyPlaying &&
                <div className="w-[350px] h-full flex items-center justify-start px-4 cursor-pointer">
                    <div className="w-[70px] h-full rounded-lg">
                        <img src={currentlyPlaying.image} alt={currentlyPlaying.name} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div className="text-white flex flex-col text-left ml-3">
                        <h2 className="text-md">{currentlyPlaying.name}</h2>
                        <p className=" text-xs break-words mt-1 text-gray-100 hover:underline tracking-wider">{currentlyPlaying.artists}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default CurrentlyPlaying