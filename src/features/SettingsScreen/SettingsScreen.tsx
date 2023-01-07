import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TileButton from 'src/components/TileButton/TileButton';

import CardIcon from 'src/assets/card.svg';
import SettingsProfileIcon from 'src/assets/settingsProfile.svg';
import ProfileIcon from 'src/assets/profile.svg';

//@ts-ignore
export const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 24 }}>
                <TileButton
                    title='Payments'
                    icon={<CardIcon />}
                    onPress={() => navigation.navigate('PaymentDetails')}
                />
            </View>
            <View style={{ marginBottom: 24 }}>
                <TileButton title='General' icon={<SettingsProfileIcon />} />
            </View>
            <View style={{ marginBottom: 24 }}>
                <TileButton title='Account' icon={<ProfileIcon />} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 26,
        paddingHorizontal: 18,
    },
});
