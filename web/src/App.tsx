import React from 'react';
import logo from './logo.svg';
import './App.css';

import StudentsScreen from './features/StudentsScreen/StudentsScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/LoginScreen/LoginScreen';
import AppLayout from './features/AppLayout/AppLayout';
import Appointments from './features/Appointments/Appointments';
import { AssignmentScreen } from './features/Assignment/AssignmentScreen';
import { GradesScreen } from './features/Grades/Grades';

function App() {
    // return <StudentsScreen />;

    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginScreen />} />
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<AssignmentScreen />} />
                    <Route path='assignments' element={<AssignmentScreen />} />
                    <Route path='grades' element={<GradesScreen />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
