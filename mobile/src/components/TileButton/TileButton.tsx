import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface TileButtonProps {
    title: string;
    icon?: any;
    onPress?: () => void;
}

const TileButton = (props: TileButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.contentWrapper}>
                {props.icon && props.icon}
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: 'rgba(0,0,0, .6)', // IOS
        shadowOffset: { height: 2, width: 2 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 4, //IOS
        backgroundColor: '#fff',
        elevation: 5, // Android
        borderRadius: 8,
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
    },

    buttonText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        color: '#666666',
        marginLeft: 16,
    },
});

export default TileButton;
