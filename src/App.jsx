import { useEffect } from "react";
import { UserContextProvider, useStateProvider } from './Store/UserContext';
import { reducerCases } from "./Store/constants";
import reducer, { intialState } from "./Store/reducer";
import SpotifyHome from './Pages/SpotifyHome/SpotifyHome';
import Login from "./Pages/Login/Login";

function App() {

    const [{ token }, dispatch] = useStateProvider()

    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const token = hash.substring(1).split('&')[0].split('=')[1];
            dispatch({ type: reducerCases.SET_TOKEN, token })
        }
    }, [token, dispatch])

    return (
        <main className='w-screen h-screen bg-black text-white'>
            {token ? <SpotifyHome /> : <Login />}
        </main>
    );
}

function AppWrapper() {
    return (
        <UserContextProvider intialState={intialState} reducer={reducer}>
            <App />
        </UserContextProvider>
    );
}

export default AppWrapper;
