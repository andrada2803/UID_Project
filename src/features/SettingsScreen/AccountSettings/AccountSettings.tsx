import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { logOutUser } from 'src/stores/authSlice';
import { useAppDispatch } from 'src/stores/store';

//@ts-ignore
const AccountSettings = ({ navigation }) => {

    const dispatch = useAppDispatch();

    const handleSignOut = () => {
        dispatch(logOutUser);
        navigation.replace('LogIn')
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handleSignOut()}
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
