import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './features/AppLayout/AppLayout';
import { AssignmentScreen } from './features/Assignment/AssignmentScreen';
import { GradesScreen } from './features/Grades/Grades';
import LoginScreen from './features/LoginScreen/LoginScreen';
import StudentsScreen from './features/StudentsScreen/StudentsScreen';
import TaxesScreen from './features/Taxes/TaxesScreen';
import ReportOverlapScreen from './features/TimetableScreen/ReportOverlapScreen';
import TimetableScreen from './features/TimetableScreen/Timetablescreen';
import { UserType } from './model/User';
import { useAppSelector } from './store/store';

function App() {
    // return <StudentsScreen />;
    const events = {
        Monday: ['9:00 PM Lecture', '10:00 SD Lecture'],
        Tuesday: ['9:00 Meeting', '11:00 Workshop'],
        Wednesday: ['9:00 Meeting', '10:00 Lecture', '13:00 Lunch'],
        Thursday: ['9:00 Meeting', '10:00 Lecture', '15:00 Break'],
        Friday: ['9:00 Meeting', '10:00 Lecture', '13:00 Lunch', '15:00 Break'],
    };

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

                    {userType === UserType.PROFESSOR && (
                        <Route
                            path='timetable'
                            element={
                                <ProtectedRoute>
                                    <TimetableScreen timetable={events} />
                                </ProtectedRoute>
                            }
                        />
                    )}

                    {userType === UserType.PROFESSOR && (
                        <Route
                            path='report'
                            element={
                                <ProtectedRoute>
                                    <ReportOverlapScreen />
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
