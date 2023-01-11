import React from 'react';
import logo from './logo.svg';
import './App.css';

import StudentsScreen from './features/StudentsScreen/StudentsScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/LoginScreen/LoginScreen';
import AppLayout from './features/AppLayout/AppLayout';
import Appointments from './features/Taxes/TaxesScreen';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    // return <StudentsScreen />;

    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginScreen />} />
                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <AppLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <StudentsScreen />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='students'
                        element={
                            <ProtectedRoute>
                                <StudentsScreen />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='appointments'
                        element={
                            <ProtectedRoute>
                                <Appointments />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
