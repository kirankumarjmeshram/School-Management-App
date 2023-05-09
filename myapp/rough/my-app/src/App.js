import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './routes/Admin';
import Student from './routes/Student';
import Teacher from './routes/Teacher';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Admin/>} />
          <Route path='/student' element = {<Student/>} />
          <Route path='/teacher' element = {<Teacher/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
