import React, { useState } from 'react';
import { useRef } from 'react';
import { Animated } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

import PendingIcon from 'src/assets/pendingIcon.svg';

export enum DropdownItemIconType {
    PENDING = 'PENDING',
    PAID = 'PAID',
    OVERDUE = 'OVERDUE',
}

const mappedIcons = {
    [DropdownItemIconType.PENDING]: <PendingIcon />,
    [DropdownItemIconType.PAID]: <PendingIcon />,
    [DropdownItemIconType.OVERDUE]: <PendingIcon />,
};

export interface DropdownItemProps {
    title: string;
    content: string;
    icon?: DropdownItemIconType;
}

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
    const [showContent, setShowContent] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current;

    const toggleContentAnimation = (contentShown: boolean) => {
        const config = {
            duration: 400,
            toValue: contentShown ? 0 : 1,
            useNativeDriver: true,
        };

        Animated.timing(animationController, config).start();
        return !contentShown;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() =>
                    setShowContent((prevValue) =>
                        toggleContentAnimation(prevValue)
                    )
                }
            >
                <View style={styles.tileContainer}>
                    <Text style={styles.titleText}>{props.title}</Text>
                    {props.icon && mappedIcons[props.icon]}
                </View>
            </TouchableOpacity>
            {showContent && (
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{props.content}</Text>
                    <View style={styles.contentActionContainer}>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>Time Remaining</Text>
                            <Text style={styles.timeText}>12:23:12</Text>
                        </View>
                        <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payButtonText}>Pay 100RON</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    payButtonText: {
        color: '#fff',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 12,
    },
    payButton: {
        backgroundColor: '#006688',
        borderRadius: 6,
        padding: 10,
    },
    timeText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 10,
        color: '#000000',
    },
    timeContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    contentActionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    titleButtonWrapper: {
        shadowColor: '#fafafa',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 12,

        elevation: 10,
    },
    container: {
        // display: 'flex',
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        // elevation: 12,
    },
    contentText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.8)',
    },
    contentContainer: {
        backgroundColor: '#fbfbfb',
        width: '96%',
        alignSelf: 'center',
        padding: 18,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    tileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        // boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,

        // elevation: 3,

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,

        // elevation: 12,
        shadowColor: '#fafafa',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 12,

        elevation: 10,
    },

    listLabelText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 12,
        lineHeight: 15,
        color: 'rgba(0, 0, 0, 0.53)',
    },

    titleText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,

        color: '#666666',
    },
    scholarContainer: {},
    servicesContainer: {},
});

export default DropdownItem;
