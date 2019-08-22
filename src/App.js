import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
