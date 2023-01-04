import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CreateAppointmentScreen } from './src/features/CreateAppointmentScreen/CreateAppointmentScreen';
import { GradebookScreen } from './src/features/GradebookScreen/GradebookScreen';
import { GroupScreen } from './src/features/GroupScreen/GroupScreen';
import HomeScreen from './src/features/HomeScreen/HomeScreen';
import { NotificationsScreen } from './src/features/NotificationsScreen/NotificationsScreen';
import { PaymentsScreen } from './src/features/PaymentsScreen/PaymentsScreen';
import { ReporOverlapScreen } from './src/features/ReportOverlapScreen/ReportOverlapScreen';
import { SettingsScreen } from './src/features/SettingsScreen/SettingsScreen';
import { SituationScreen } from './src/features/SituationScreen/SituationScreen';
import TimetableScreen from './src/features/TimetableScreen/TimetableScreen';
import { ToDoListScreen } from './src/features/ToDoListScreen/ToDoListScreen';


const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <MainStack.Screen name="Timetable" component={TimetableScreen} />
        <MainStack.Screen name="Group" component={GroupScreen} />
        <MainStack.Screen name="Notifications" component={NotificationsScreen} />
        <MainStack.Screen name="ToDoList" component={ToDoListScreen} />
        <MainStack.Screen name="Gradebook" component={GradebookScreen} />
        <MainStack.Screen name="Situation" component={SituationScreen} />
        <MainStack.Screen name="Payments" component={PaymentsScreen} />
        <MainStack.Screen name="Settings" component={SettingsScreen} />
        <MainStack.Screen name='Report Overlap' component={ReporOverlapScreen} />
        <MainStack.Screen name='Create Appointment' component={CreateAppointmentScreen} /> 
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
