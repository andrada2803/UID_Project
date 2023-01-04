import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ScrollView } from 'react-native';
import DropdownItem from 'src/components/DropdownItem/DropdownItem';
import { services } from 'src/mockData/Taxes';

const confirmationScreenTitle = 'Service requested successfully!';
const confirmationScreenMessage =
    'This will be available to pay in the main taxes screen.';

//@ts-ignore
export const ServiceList = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            {services.map((item) => (
                <View key={JSON.stringify(item)} style={{ paddingBottom: 16 }}>
                    <DropdownItem
                        title={item.title}
                        content={item.content}
                        dueDateString={item.dueDateString}
                        icon={item.icon}
                        buttonText={item.buttonText}
                        onButtonPress={() =>
                            navigation.navigate('ConfirmationScreen', {
                                title: confirmationScreenTitle,
                                message: confirmationScreenMessage,
                            })
                        }
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        color: '#666666',
        paddingTop: 12,
    },

    wrapper: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#fafafa',
        paddingVertical: 26,
        paddingHorizontal: 18,
    },

    cardWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
        width: 140,

        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
    },

    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
