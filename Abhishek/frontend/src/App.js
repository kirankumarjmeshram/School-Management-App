//import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
//import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import Register from "./Register";
import Login from "./Login";




function App() {

  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }




  
  return (
    <div className="App">

      {/* <div>
 {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      
</div> */}


      <h1>School Management</h1>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          {/* <Route path='/users/single/:empid' element={<EmpDetail />}></Route> */}
          <Route path='/users/update/:empid' element={<EmpEdit />}></Route>
          <Route path='/users/signin' element={<Login />}></Route>
          <Route path='/users/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
