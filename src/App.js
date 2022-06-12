import React, { useContext, useReducer } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from "./context/User";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import { queueReducer } from "./Reducer/Reducer";

import './App.css';

function App() {

  const { currentUser } = useContext(UserContext);
  const [currentQueue, queueDispatch] = useReducer(queueReducer, []);

  console.log(!currentUser)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {!!currentUser ?
            <>
              <Route path="/" element={<HomePage queue={{ queueDispatch, currentQueue }} />} />
            </>
            :
            <>
              <Route path="/" element={<Navigate to='/login' />} />
            </>
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
