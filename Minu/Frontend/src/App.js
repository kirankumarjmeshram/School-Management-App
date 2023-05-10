import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentListing from './student/StudentListing';
import StudentCreate from './student/StudentCreate';
import StudentEdit from './student/StudentEdit';

function App() {
  return (
    <div className="App">
      <h1>Student Portal</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentListing />}></Route>
          <Route path='/employee/create' element={<StudentCreate />}></Route>
          <Route path='/users/update/:empid' element={<StudentEdit />}></Route>///users/update/
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
