import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//@ts-ignore
const AccountSettings = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.replace('LogIn')}
            >
                <Text style={styles.buttonText}>SIGN OUT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 26,
        paddingHorizontal: 18,
    },

    buttonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 20,
        color: '#410002',
        textAlign: 'center',
    },

    buttonContainer: {
        width: '90%',
        backgroundColor: '#FFDAD6',
        paddingVertical: 16,
        borderRadius: 8,
    },
});

export default AccountSettings;
