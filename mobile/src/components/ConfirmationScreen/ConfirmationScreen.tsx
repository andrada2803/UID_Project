import { StackActions } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

import GreenCheckIcon from 'src/assets/greenCheck.svg';

//@ts-ignore
const ConfirmationScreen = ({ navigation, route }) => {
    const { title, message, noOfScreensToPop } = route.params;
    return (
        <View style={styles.wrapper}>
            <GreenCheckIcon width={160} height={160} />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.messageText}>{message}</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                    navigation.dispatch(StackActions.pop(noOfScreensToPop))
                }
            >
                <Text style={styles.buttonText}>GO BACK</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        shadowColor: 'rgba(0,0,0, .6)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 4, //IOS
        backgroundColor: '#fff',
        elevation: 5, // Android
        borderRadius: 8,
    },

    wrapper: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 26,
        paddingHorizontal: 18,
    },

    titleText: {
        marginTop: 60,

        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    messageText: {
        marginTop: 40,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)',
    },

    buttonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        backgroundColor: '#006688',
        paddingVertical: 16,
        borderRadius: 8,
    },
});

export default ConfirmationScreen;
