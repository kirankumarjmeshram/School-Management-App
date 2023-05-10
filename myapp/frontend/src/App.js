import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentListing from './components/Student/StudentListing'
import StudentCreate from './components/Student/StudentCreate'
import StudentEdit from './components/Student/StudentEdit'
import TeacherListing from './components/Teacher/TeacherListing'
import TeacherCreate from './components/Teacher/TeacherCreate'
import TeacherEdit from './components/Teacher/TeacherEdit'
//import Navbar from './components/Navbar'
// import AllAdmins from './components/AllAdmins'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          {/* <Navbar/> */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/getAllStudents' element={<StudentListing />} />
            <Route path='/getAllStudents/student/create' element={<StudentCreate />} />
            <Route path='/student/update/:empid' element={<StudentEdit />} />
            <Route path='/getAllTeachers' element={<TeacherListing />} />
            <Route path='/getAllTeachers/teacher/create' element={<TeacherCreate />} />
            <Route path='/teacher/update/:empid' element={<TeacherEdit />} />
            {/* ///users/update/ */}
            {/*employee/create  */}
            {/* <Route path='/getAllAdmins' element={<AllAdmins />} /> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
