import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'
import Cards from './pages/Cards'
import "./firebase"; // Import Firebase settings
import Anime from './pages/Anime'; // ⬅️ Add this at the top with other imports
import MediaDetail from './pages/MediaDetail'; // import this


const App = () => {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
    <Route path='/' element={<Cards />} />
      <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    
      <Route path='/home' element={<Home />} />
      <Route path='/anime' element={<Anime />} />
      <Route path="/details/:media_type/:id" element={<MediaDetail />} />

      <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    
    
      </>
  )
}

export default App