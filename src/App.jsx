import { useState } from 'react'
import './App.css'
import './styles/components.css'
import './styles/global.css'
import './styles/variables.css'
import './styles/mobile.css'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { HomePage } from './pages/Home/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path='/' element={<HomePage />} />
        
        </Route>
      </Routes>
    </>
  )
}

export default App
