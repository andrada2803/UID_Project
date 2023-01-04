import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator/MainStackNavigator';
import { useFonts } from 'expo-font';
import React from 'react';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter: require('src/assets/fonts/Inter.ttf'),
    });

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}
