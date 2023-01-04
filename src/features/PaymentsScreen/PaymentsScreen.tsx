import React from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import DropdownItem, {
    DropdownItemIconType,
} from 'src/components/DropdownItem/DropdownItem';
import { taxes } from 'src/mockData/Taxes';
import AddIcon from 'src/assets/blueAddPlus.svg';
import { TouchableOpacity } from 'react-native';

//@ts-ignore
export const PaymentsScreen = ({ navigation }) => {
    return (
        <>
            <ScrollView style={styles.wrapper}>
                <View>
                    <Text style={styles.listLabelText}>SCHOLAR</Text>

                    <View style={styles.listWrapper}>
                        {taxes.map((item) => (
                            <View
                                key={JSON.stringify(item)}
                                style={{ paddingBottom: 16 }}
                            >
                                <DropdownItem
                                    title={item.title}
                                    content={item.content}
                                    dueDateString={item.dueDateString}
                                    icon={item.icon}
                                    buttonText={item.buttonText}
                                    onButtonPress={item.onButtonPress}
                                />
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.servicesContainer}>
                    <Text style={styles.listLabelText}>SERVICES</Text>
                    <View style={styles.listWrapper}>
                        {taxes.map((item) => (
                            <View
                                key={JSON.stringify(item)}
                                style={{ paddingBottom: 16 }}
                            >
                                <DropdownItem
                                    title={item.title}
                                    content={item.content}
                                    dueDateString={item.dueDateString}
                                    icon={item.icon}
                                    buttonText={item.buttonText}
                                    onButtonPress={item.onButtonPress}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.addButtonContainer}
                onPress={() => navigation.navigate('ServiceCategory')}
            >
                <AddIcon />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    addButtonContainer: {
        position: 'absolute',
        bottom: 10,
        right: 16,
    },
    wrapper: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        paddingVertical: 26,
        paddingHorizontal: 18,
    },
    listLabelText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 12,
        lineHeight: 15,
        color: 'rgba(0, 0, 0, 0.53)',
    },
    listWrapper: {
        paddingTop: 16,
        display: 'flex',
        gap: 16,
        paddingBottom: 24,
    },
    servicesContainer: {
        paddingBottom: 80,
    },
});
