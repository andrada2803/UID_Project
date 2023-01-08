import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

import FileIcon from 'src/assets/file.svg';
import GraduationCapIcon from 'src/assets/graduationCap.svg';
import WrenchIcon from 'src/assets/wrench.svg';
import SettingsIcon from 'src/assets/settings.svg';
import { TouchableOpacity } from 'react-native';

//@ts-ignore
export const ServiceCategory = ({ navigation }) => {
    const onButtonClick = () => {
        navigation.navigate('ServiceList');
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.rowContainer}>
                <TouchableOpacity onPress={onButtonClick}>
                    <View style={styles.cardWrapper}>
                        <FileIcon width={72} height={72} />
                        <Text style={styles.buttonText}>Acte</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onButtonClick}>
                    <View style={[styles.cardWrapper, { marginLeft: 16 }]}>
                        <GraduationCapIcon width={72} height={72} />
                        <Text style={styles.buttonText}>Studii</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.rowContainer, { marginTop: 16 }]}>
                <TouchableOpacity onPress={onButtonClick}>
                    <View style={styles.cardWrapper}>
                        <WrenchIcon width={72} height={72} />
                        <Text style={styles.buttonText}>Utilitati</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onButtonClick}>
                    <View style={[styles.cardWrapper, { marginLeft: 16 }]}>
                        <SettingsIcon width={72} height={72} />
                        <Text style={styles.buttonText}>Altele</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
        justifyContent: 'center',
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
