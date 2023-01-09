import React, { useState } from 'react';
import {
    View,
    Alert,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity
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

    const [openHour, setOpenHour] = useState(false);
    const [valueHour, setValueHour] = useState(null);
    const [itemsHour, setItemsHour] = useState([
        { label: '10:00', value: '10:00' },
        { label: '10:45', value: '10:45' },
        { label: '11:30', value: '11:30' },
        { label: '12:15', value: '12:15' },
    ]);

    //@ts-ignore
    const renderItem = ({ item }) => (
        <View>
          <Text onPress={()=>console.log('')}>{item.key}</Text>
        </View>
      );

    const [selectedDate, setSelectedDate] = useState('');
    const cuurentDate = new Date();
    const minDate = cuurentDate.toISOString().substr(0, 10);
    const [isVisible, setIsVisible] = React.useState(false);

    const handleSubmit = () => {
        if (value === null) {
            Alert.alert('Error', 'Please select a reason');
        } else if (selectedDate == '') {
            Alert.alert('Error', 'Please select a date');
        } else if (valueHour == null) {
            Alert.alert('Error', 'Please select an hour');
        }
        else {
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
                minuteInterval={15}
                mode='calendar'
                style={styles.datePicker}
                onSelectedChange={(date: React.SetStateAction<string>) =>
                    {
                        setSelectedDate(date)
                        setIsVisible(true)
                    }

                }
            />

            {isVisible && (
                <Text style={styles.availabbleText}>Available hours:</Text>
            )}  

            {isVisible && (
            <DropDownPicker
                open={openHour}
                value={valueHour}
                items={itemsHour}
                setOpen={setOpenHour}
                setValue={setValueHour}
                setItems={setItemsHour}
                style={styles.hoursDropdown}
            />
            )}  

            {isVisible && (
                 <Text style={styles.selectedDate}>Appointment: {selectedDate} {valueHour}</Text>
            )}         
            
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        height:1000
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
        borderRadius: 10,
        backgroundColor: '#006688',
        bottom: 30,
        borderWidth: 2,
        padding: 10,
        position: 'absolute',
        alignSelf: 'center',
        width: 350

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

    availabbleText: {
        top:20,
        fontSize:18,
        fontFamily: 'Inter',
    },

    textView: {
        //IDKKKK
        top: 220,
    },

    datePicker: {
        top: 60,
    },
    selectedDate: {
        top: 50,
        alignSelf: 'center',
        fontFamily: 'Inter',
        fontSize: 16
    },
    hoursDropdown: {
        top:30
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        alignSelf:'center'
    },
});
