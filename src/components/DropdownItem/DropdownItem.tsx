import React, { useRef, useState } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import AlertTriangleIcon from 'src/assets/alertTriangle.svg';
import PendingIcon from 'src/assets/blueInfo.svg';
import CheckIcon from 'src/assets/greenCheck.svg';
import UpCaretIcon from 'src/assets/upCaret.svg';

export enum DropdownItemIconType {
    PENDING = 'PENDING',
    PAID = 'PAID',
    OVERDUE = 'OVERDUE',
}

const mappedIcons = {
    [DropdownItemIconType.PENDING]: <PendingIcon />,
    [DropdownItemIconType.PAID]: <CheckIcon />,
    [DropdownItemIconType.OVERDUE]: <AlertTriangleIcon />,
};

export interface DropdownItemProps {
    title: string;
    content: string;
    buttonText: string;
    dueDateString?: string;
    icon?: DropdownItemIconType;
    onButtonPress: () => void;
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

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <View>
            <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={() =>
                    setShowContent((prevValue) =>
                        toggleContentAnimation(prevValue)
                    )
                }
            >
                <View style={styles.tileContainer}>
                    <Text style={styles.titleText}>{props.title}</Text>
                    {props.icon ? (
                        mappedIcons[props.icon]
                    ) : (
                        <Animated.View
                            style={{ transform: [{ rotateZ: arrowTransform }] }}
                        >
                            <UpCaretIcon width={24} height={24} />
                        </Animated.View>
                    )}
                </View>
            </TouchableOpacity>
            {showContent && (
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{props.content}</Text>
                    <View
                        style={[
                            styles.contentActionContainer,
                            {
                                flexDirection: props.dueDateString
                                    ? 'row'
                                    : 'row-reverse',
                            },
                        ]}
                    >
                        {props.dueDateString && (
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>Due date</Text>
                                <Text style={styles.timeText}>
                                    {props.dueDateString}
                                </Text>
                            </View>
                        )}
                        <TouchableOpacity
                            style={styles.payButton}
                            onPress={props.onButtonPress}
                        >
                            <Text style={styles.payButtonText}>
                                {props.buttonText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
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
});

export default DropdownItem;
