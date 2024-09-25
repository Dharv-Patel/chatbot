import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Header from './components/Header'
import Chatbot from './pages/Chatbot'
import Profile from './pages/Profile'
import Bookmark from './pages/Bookmark'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aunthicate' element={<Signin/>}></Route>
        <Route path='/chatbot' element={<Chatbot/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/bookmarks' element={<Bookmark/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
