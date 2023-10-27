import React from 'react'

const Login = (props) => {
    // passing setIsLoggedIn as prop 
    const handleLogin = () => {
        //setting the setISLoggedIn to true
        props.onLogin();
    }

    return (
        <div className='w-full flex flex-col pt-10 items-center justify-center'>
            <h2 className='text-white text-center font-extrabold text-lg tracking-wide'>WelCome To Spotify</h2>

            {/* if user clicks on any button it will set the isLoggedIn state to true  */}
            <button className='px-8 py-4 text-green-400 border-2 border-green-400 rounded-full w-fit mt-20 select-none hover:text-white hover:bg-green-400'
               onClick={handleLogin}> 
                    Login Here
            </button>
            <button className='px-8 py-4 text-green-400 border-2 border-green-400 rounded-full w-fit mt-20 select-none hover:text-white hover:bg-green-400'
               onClick={handleLogin}> 
                    continue without sign in
            </button>
        </div>
    )
}

export default Login