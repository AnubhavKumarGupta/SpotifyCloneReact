import { useEffect } from "react";
import Login from "./Pages/Login/Login";
import SpotifyHome from './Pages/SpotifyHome/SpotifyHome';
import { UserContextProvider, useStateProvider } from './Store/UserContext';
import reducer, { intialState } from "./Store/reducer";
import { reducerCases } from "./Store/constants";

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
