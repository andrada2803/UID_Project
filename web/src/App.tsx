import React from 'react';
import logo from './logo.svg';
import './App.css';

import StudentsScreen from './features/StudentsScreen/StudentsScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/LoginScreen/LoginScreen';
import AppLayout from './features/AppLayout/AppLayout';
import TaxesScreen from './features/Taxes/TaxesScreen';
import ProtectedRoute from './components/ProtectedRoute';
import { AssignmentScreen } from './features/Assignment/AssignmentScreen';
import { GradesScreen } from './features/Grades/Grades';
import { useAppSelector } from './store/store';
import { UserType } from './model/User';

function App() {
    // return <StudentsScreen />;

    const userType = useAppSelector((state) => state.userState.user?.type);

    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginScreen />} />
                <Route
                    path='/*'
                    element={
                        <ProtectedRoute>
                            <AppLayout />
                        </ProtectedRoute>
                    }
                >
                    {userType === UserType.SECRETARY && (
                        <Route
                            index
                            element={
                                <ProtectedRoute>
                                    <StudentsScreen />
                                </ProtectedRoute>
                            }
                        />
                    )}
                    {userType === UserType.SECRETARY && (
                        <Route
                            path='students'
                            element={
                                <ProtectedRoute>
                                    <StudentsScreen />
                                </ProtectedRoute>
                            }
                        />
                    )}

                    {userType === UserType.SECRETARY && (
                        <Route
                            path='tax'
                            element={
                                <ProtectedRoute>
                                    <TaxesScreen />
                                </ProtectedRoute>
                            }
                        />
                    )}

                    {userType === UserType.PROFESSOR && (
                        <Route
                            index
                            element={
                                <ProtectedRoute>
                                    <AssignmentScreen />
                                </ProtectedRoute>
                            }
                        />
                    )}
                    {userType === UserType.PROFESSOR && (
                        <Route
                            path='assignments'
                            element={
                                <ProtectedRoute>
                                    <AssignmentScreen />
                                </ProtectedRoute>
                            }
                        />
                    )}
                    {userType === UserType.PROFESSOR && (
                        <Route
                            path='grades'
                            element={
                                <ProtectedRoute>
                                    <GradesScreen />
                                </ProtectedRoute>
                            }
                        />
                    )}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
