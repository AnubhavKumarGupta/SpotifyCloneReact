import Login from "./Pages/Login/Login";
import SpotifyHome from './Pages/SpotifyHome/SpotifyHome';
import { UserContextProvider, UserContext } from './Contexts/UserContext';
import { useContext } from "react";

function App() {
    const context = useContext(UserContext);
    return (
        <main className='w-screen h-screen bg-black text-white'>
            {context.userLogin ? <SpotifyHome /> : <Login />}
            {/* <Login/> */}
        </main>
    );
}

function AppWrapper() {
    return (
        <UserContextProvider>
            <App />
        </UserContextProvider>
    );
}

export default AppWrapper;
