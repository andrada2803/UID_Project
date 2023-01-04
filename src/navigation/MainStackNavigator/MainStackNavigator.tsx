import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GradebookScreen } from '../../features/GradebookScreen/GradebookScreen';
import { GroupScreen } from '../../features/GroupScreen/GroupScreen';
import HomeScreen from '../../features/HomeScreen/HomeScreen';
import { NotificationsScreen } from '../../features/NotificationsScreen/NotificationsScreen';
import { PaymentsScreen } from '../../features/PaymentsScreen/PaymentsScreen';
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
};

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName='Home'>
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
            <MainStack.Screen name='Group' component={GroupScreen} />
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
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
