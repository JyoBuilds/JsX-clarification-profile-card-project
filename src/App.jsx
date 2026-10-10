import React from 'react'
import Profile from './components/profile'

const App = () => {
  return (
    <div>
      <Profile/>
      <p>So by using react we can reuse the components without retyping again the whole code. </p>
      <Profile/>
    </div>
  )
}

export default App
