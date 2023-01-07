import { StackActions } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Dimensions } from 'react-native';

import InfoIcon from '../assets/InfoOutline.svg';

//@ts-ignore
export const InformationScreen = ({ navigation, route }) => {
    const { title, message } = route.params;
    return (
        <View style={styles.wrapper}>
            <InfoIcon width={160} height={160} />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.messageText}>{message}</Text>

            <View
                style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    position: 'absolute',
                    bottom: 30,
                }}
            >
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => navigation.dispatch(StackActions.pop(1))}
                >
                    <Text style={styles.cancelText}>CANCEL</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() =>
                        navigation.navigate('ConfirmationScreen', {
                            title: 'Request sent successfully!',
                            message: 'Check your email for further details',
                            noOfScreensToPop: 2,
                        })
                    }
                >
                    <Text style={styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
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
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    messageText: {
        marginTop: 40,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.8)',
        marginBottom: 30,
    },

    cancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 6,
        elevation: 3,
        margin: 20,
        backgroundColor: '#FFDAD6',
    },

    cancelText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#410002',
    },

    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 6,
        elevation: 3,
        margin: 20,
        backgroundColor: '#006688',
    },

    submitText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
