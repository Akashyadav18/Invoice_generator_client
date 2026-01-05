import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import LandingPage from './pages/landingPage/LandingPage'
import Dashboard from './pages/Dashboard'
import MainPage from './pages/MainPage'
import PreviewPage from './pages/PreviewPage'
import Menubar from './components/Menubar'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <Menubar/>
        <Toaster/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/generate' element={<MainPage/>}/>
          <Route path='/preview' element={<PreviewPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
