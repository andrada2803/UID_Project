import React from 'react';
import logo from './logo.svg';
import './App.css';

import StudentsScreen from './features/StudentsScreen/StudentsScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/LoginScreen/LoginScreen';
import AppLayout from './features/AppLayout/AppLayout';
import Appointments from './features/Appointments/Appointments';
import TimetableScreen from './features/TimetableScreen/Timetablescreen';
import ReportOverlapScreen from './features/TimetableScreen/ReportOverlapScreen'

function App() {
    // return <StudentsScreen />;
    const events = {
        "Monday": ["9:00 PM Lecture", "10:00 SD Lecture"],
        "Tuesday": ["9:00 Meeting", "11:00 Workshop"],
        "Wednesday": ["9:00 Meeting", "10:00 Lecture", "13:00 Lunch"],
        "Thursday": ["9:00 Meeting", "10:00 Lecture", "15:00 Break"],
        "Friday": ["9:00 Meeting", "10:00 Lecture", "13:00 Lunch", "15:00 Break"]
      };

    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginScreen />} />
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<StudentsScreen />} />
                    <Route path='students' element={<StudentsScreen />} />
                    <Route path='appointments' element={<Appointments />} />
                    <Route path='timetable' element={<TimetableScreen timetable={events}/>} />
                    <Route path='report' element={<ReportOverlapScreen />} />
                </Route>
                
            </Routes>
        </Router>
    );
}

export default App;
