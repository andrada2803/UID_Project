import React from 'react';
import logo from './logo.svg';
import './App.css';

import StudentsScreen from './features/StudentsScreen/StudentsScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/LoginScreen/LoginScreen';
import AppLayout from './features/AppLayout/AppLayout';
import Appointments from './features/Appointments/Appointments';

function App() {
    // return <StudentsScreen />;

    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginScreen />} />
                <Route path='/' element={<AppLayout />}>
                    <Route index path='students' element={<StudentsScreen />} />
                    <Route path='appointments' element={<Appointments />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
