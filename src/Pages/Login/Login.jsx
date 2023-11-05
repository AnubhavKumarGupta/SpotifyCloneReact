const Login = (props) => {
    const handleLogin = () => {
        const CLIENT_ID = "686e35c887ab457596f1134cbf938a3e";
        const scopes =
            "user-top-read user-follow-read playlist-read-private user-library-read";
        const REDIRECT_URI = "http://localhost:5173/";
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scopes=${scopes}&show_dialog=true`;
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