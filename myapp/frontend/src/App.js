import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
//import Navbar from './components/Navbar'
// import AllAdmins from './components/AllAdmins'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <h1>World Hello</h1>
          <Header />
          {/* <Navbar/> */}
          <h1>Hello World</h1>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/getAllAdmins' element={<AllAdmins />} /> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
