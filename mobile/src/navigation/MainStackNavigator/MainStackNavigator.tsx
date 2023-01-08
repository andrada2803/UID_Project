import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ConfirmationScreen from 'src/components/ConfirmationScreen/ConfirmationScreen';
import { InformationScreen } from 'src/components/InformationScreen';
import { LogInScreen } from 'src/features/Authentication/LogInScreen';
import { SignUpScreen } from 'src/features/Authentication/SignUpScreen';
import { GradeDetailsScreen } from 'src/features/GradebookScreen/GradeDetailsScreen';
import { PaymentsScreen } from 'src/features/PaymentsScreen/PaymentsScreen';
import { ServiceCategory } from 'src/features/PaymentsScreen/ServiceCategory/ServiceCategory';
import { ServiceList } from 'src/features/PaymentsScreen/ServiceList/ServiceList';
import AccountSettings from 'src/features/SettingsScreen/AccountSettings/AccountSettings';
import { PaymentDetails } from 'src/features/SettingsScreen/PaymentDetails/PaymentDetails';
import { CreateAppointmentScreen } from '../../features/CreateAppointmentScreen/CreateAppointmentScreen';
import { GradebookScreen } from '../../features/GradebookScreen/GradebookScreen';
import { GroupScreen } from '../../features/GroupScreen/GroupScreen';
import HomeScreen from '../../features/HomeScreen/HomeScreen';
import { NotificationsScreen } from '../../features/NotificationsScreen/NotificationsScreen';
import { ReporOverlapScreen } from '../../features/ReportOverlapScreen/ReportOverlapScreen';
import { SettingsScreen } from '../../features/SettingsScreen/SettingsScreen';
import { SituationScreen } from '../../features/SituationScreen/SituationScreen';
import TimetableScreen from '../../features/TimetableScreen/TimetableScreen';
import { ToDoListScreen } from '../../features/ToDoListScreen/ToDoListScreen';

const MainStack = createNativeStackNavigator();
const navigationHeaderOptions = {
    headerBackImageSource: require('./../../assets/leftCaret.png'),
    headerStyle: {
        backgroundColor: '#006688',
    },
    headerTintColor: '#fff',
    headerBackTitle: '',
    statusBarColor: '#006688',
};

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName='LogIn'>
            <MainStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name='Timetable'
                component={TimetableScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='Group'
                component={GroupScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='Notifications'
                component={NotificationsScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='ToDoList'
                component={ToDoListScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='Gradebook'
                component={GradebookScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='Situation'
                component={SituationScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='Payments'
                component={PaymentsScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='Settings'
                component={SettingsScreen}
                options={navigationHeaderOptions}
            />

            <MainStack.Screen
                name='ServiceCategory'
                component={ServiceCategory}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='ServiceList'
                component={ServiceList}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='ConfirmationScreen'
                component={ConfirmationScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name='Report Overlap'
                component={ReporOverlapScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='Create Appointment'
                component={CreateAppointmentScreen}
                options={navigationHeaderOptions}
            />
            <MainStack.Screen
                name='InformationScreen'
                component={InformationScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MainStack.Screen
                name='Grade'
                component={GradeDetailsScreen}
                options={navigationHeaderOptions}
            />

            <MainStack.Screen
                name='PaymentDetails'
                component={PaymentDetails}
                options={navigationHeaderOptions}
            />

            <MainStack.Screen
                name='SignUp'
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />

            <MainStack.Screen
                name='LogIn'
                component={LogInScreen}
                options={{
                    headerShown: false,
                }}
            />

            <MainStack.Screen
                name='AccountSettings'
                component={AccountSettings}
                options={navigationHeaderOptions}
            />
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
