import { useState } from "react"
import Login from "./Pages/Login/Login"
import SpotifyHome from './Pages/SpotifyHome/SpotifyHome'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // this function will executes when user clicks on button 
  const handleIsLoginState = () => {
    setIsLoggedIn(true)
  }
  return (
    <main className='w-screen h-screen bg-black text-white'>

      {/* if the isLoggedIn is 'True' user will redirected to the Home page else vice versa */}

      {isLoggedIn ? <SpotifyHome /> : <Login onLogin={handleIsLoginState} />}
    </main>
  )
}

export default App

