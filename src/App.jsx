import { useState } from "react"
import Login from "./Pages/Login/Login"
import SpotifyHome from './Pages/SpotifyHome/SpotifyHome'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const handleIsLoginState = () => {
    setIsLoggedIn(true)
  }
  return (
    <main className='w-screen h-screen bg-black text-white'>
      {isLoggedIn ? <SpotifyHome isLogin={isLoggedIn} /> : <Login onLogin={handleIsLoginState} />}
    </main>
  )
}

export default App

