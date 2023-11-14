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
        <div className='w-full flex flex-col pt-10 items-center justify-center'>
            <h2 className='text-white text-center font-extrabold text-lg tracking-wide'>WelCome To Spotify</h2>
            <div className='w-full flex items-center justify-center gap-20'>
                <button className='px-8 py-4 text-green-400 border-2 border-green-400 rounded-full  mt-20 select-none hover:text-white hover:bg-green-400'
                    onClick={handleLogin}>
                    Login Here
                </button>
            </div>
        </div>
    )
}

export default Login