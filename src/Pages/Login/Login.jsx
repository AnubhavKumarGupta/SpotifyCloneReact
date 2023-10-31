import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const Login = (props) => {

    const context = useContext(UserContext)
    const handleLogin = () => {
        context.handlingLogin();
    }
    return (
        <div className='w-full flex flex-col pt-10 items-center justify-center'>
            <h2 className='text-white text-center font-extrabold text-lg tracking-wide'>WelCome To Spotify</h2>

            {/* if user clicks on any button it will set the isLoggedIn state to true  */}
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