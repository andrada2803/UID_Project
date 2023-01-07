import React, { useState } from 'react';
import {
    View,
    Alert,
    Button,
    StyleSheet,
    Text,
    Modal,
    Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-modern-datepicker';

const confirmationScreenTitle = 'Appointment created successfully!';
const confirmationScreenMessage =
    'Check your email for the appointment confirmation';

//@ts-ignore
export const CreateAppointmentScreen = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Student Certificate', value: 'sc' },
        { label: 'Signing Student ID', value: 'sign' },
        { label: 'Pick up documents', value: 'pud' },
        { label: 'Freeze Year', value: 'fy' },
        { label: 'Pay Taxes', value: 'pt' },
    ]);
    const [selectedDate, setSelectedDate] = useState('');
    const cuurentDate = new Date();
    const minDate = cuurentDate.toISOString().substr(0, 10);

    const handleSubmit = () => {
        if (value === null) {
            Alert.alert('Error', 'Please select a reason');
        } else if (selectedDate == '') {
            Alert.alert('Error', 'Please select a date');
        } else {
            navigation.navigate('ConfirmationScreen', {
                title: confirmationScreenTitle,
                message: confirmationScreenMessage,
                noOfScreensToPop: 2,
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Why would you like to make an appointment?
            </Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropdown}
            />
            <DatePicker
                minimumDate={minDate}
                maximumDate='2023-12-23'
                style={styles.datePicker}
                onSelectedChange={(date: React.SetStateAction<string>) =>
                    setSelectedDate(date)
                }
            />

            <Text style={styles.selectedDate}>{selectedDate}</Text>
            <View style={styles.submitButton}>
                <Button title='Submit' onPress={handleSubmit} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },

    text: {
        fontFamily: 'Inter',
        fontSize: 20,
        bottom: 10,
        top: 10,
    },

    dropdown: {
        top: 20,
    },

    submitButton: {
        flex: 1,
        //bottom: 10,
        justifyContent: 'flex-end',
    },

    image: {
        //IDKKKK
        top: 160,
    },

    buttonLayout: {
        //IDKKKK
        bottom: -290,
    },

    successText: {
        fontFamily: 'Inter',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 30,
    },

    infoText: {
        fontFamily: 'Inter',
        textAlign: 'center',
        fontSize: 20,
        padding: 50,
    },

    textView: {
        //IDKKKK
        top: 220,
    },

    datePicker: {
        top: 60,
    },
    selectedDate: {
        top: 40,
        alignSelf: 'center',
    },
});
