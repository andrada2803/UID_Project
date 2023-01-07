import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator/MainStackNavigator';
import { useFonts } from 'expo-font';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/stores/store';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter: require('src/assets/fonts/Inter.ttf'),
    });

    if (!fontsLoaded) return null;

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainStackNavigator />
            </NavigationContainer>
        </Provider>
    );
}
