import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/features/HomeScreen/HomeScreen';
import TimetableScreen from './src/features/TimetableScreen/TimetableScreen';


const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <MainStack.Screen name="Timetable" component={TimetableScreen} />
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
