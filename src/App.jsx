import { useState } from "react"
import Login from "./Pages/Login/Login"
import SpotifyHome from './Pages/SpotifyHome/SpotifyHome'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const HandleLogin = () => {
    setIsLoggedIn(true)
  }

  const HandleLogOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <main className='w-screen h-screen bg-black text-white'>
      {isLoggedIn ? <SpotifyHome loginStatus={isLoggedIn} /> : <Login onLogout={HandleLogOut} onLogin={HandleLogin} />}
    </main>
  )
}

export default App

