import './Login.css'
import background from './../../assets/BGcover.jpg'
const Login = (props) => {
    const handleLogin = () => {
        const CLIENT_ID = "686e35c887ab457596f1134cbf938a3e";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        const REDIRECT_URI = "http://localhost:5173/";
        window.location.href = `${api_uri}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    }


    const handleLogout = () => {
    }


    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <img src={background} id='bg-img' loading='eager'/>
            <div id='login-page' className='flex flex-col items-center'>
                <h2 className='text-5xl text-white font-bold tracking-wide capitalize  text-center mt-20'>Spotify clone by</h2>
                <h2 className='text-5xl text-white font-bold tracking-wide capitalize mt-3 text-center'>Nikhil Sai</h2>
                <button className='w-fit px-5 py-2 text-lg capitalize text-white bg-[#1ed760] rounded-full mt-10 font-bold' onClick={handleLogin}>connect to spotify</button>
            </div>
        </div>
    )
}

export default Login