import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator/MainStackNavigator';
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter: require('src/assets/fonts/Inter.ttf'),
    });

    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}
