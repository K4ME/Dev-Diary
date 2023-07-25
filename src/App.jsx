import { useEffect } from 'react'
import { signInWithGithub } from './configs/authMethods'

function App() {
  return (
    <>
      <header>
        <button onClick={signInWithGithub}>Logar com github</button>
      </header>
    </>
  )
}

export default App
