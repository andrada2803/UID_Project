import React, { useState } from 'react';
import { View, Alert, Button, StyleSheet, Text, Modal, Image,TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
    

export const ReporOverlapScreen = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'UID - Lab', value: 'uid'},
        {label: 'DS - Lab', value: 'ds'},
        {label: 'DBD - Lab', value: 'dbd'},
        {label: 'TD - Lab', value: 'td'}
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        {label: 'UID - Lab', value: 'uid'},
        {label: 'DS - Lab', value: 'ds'},
        {label: 'DBD - Lab', value: 'dbd'},
        {label: 'TD - Lab', value: 'td'}
    ]);

    const [info, setInfo] = useState('')

    const [isModalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        if(value === null || value2 == null) {
            Alert.alert('Error', 'Please select the classes');
        }else{
            setModalVisible(true)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.question1}>
                What class would you like to change?
            </Text>
            <View style={styles.dropdown}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            </View>

            <Text style={styles.question2}>
                What is the class you would like to make the exchange with?
            </Text>
            
            <View style={styles.dropdown2}>
            <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                style={{top:30}}                
            />
            </View>
            <Text
                style = {styles.additionalInfo}>
                Any additional information? *
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Write something.."
                value={info}
                onChangeText={text => setInfo(text)}
            />

            <Text
                style = {styles.note}>
                What is marked with * is not mandatory
            </Text>
            <View style={styles.submitButton}>
                <Button title="Submit" onPress={handleSubmit}/>

                <Modal
                    visible={isModalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{ top: 50, alignItems: 'center' }}>
                        <Image source={require('../../assets/Confirmation.png')} style={styles.image}/>
                        
                        <View style={styles.textView}> 

                            <Text style={styles.successText}>
                                Successfully sent the report!
                            </Text>

                            <Text style={styles.infoText}>
                                If you have any question about the report please contact the secretary.
                            </Text>

                        </View>

                        <View style={styles.buttonLayout}>
                            <Button
                                title="GO BACK"
                                onPress={() => setModalVisible(false)}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
    </View>
    );
  };

  const styles = StyleSheet.create({

    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: "white",
        padding: 20
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        top: 80,
        fontSize: 16,
        zIndex:10,
        elevation:10
    },

    question1: {
        fontSize: 20,
        bottom: 10,
        top: 10
    },

    question2: {
        fontSize: 20,
        bottom: 10,
        top: 40
    },

    dropdown: {
        top: 20,
        zIndex: 1000,
        elevation: 1000 
    },

    dropdown2: {
        top: 20,
        zIndex:100,
        elevation:100
        
    },

    submitButton: {
        flex: 1,
        //bottom: 10,
        justifyContent: 'flex-end',
    }, 

    image: {
        //IDKKKK
        top: 160
    },

    buttonLayout: {
        //IDKKKK
        bottom: -290
    },

    successText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 30,
    },

    infoText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 50
    },

    textView: {
        //IDKKKK
        top: 220
    },

    additionalInfo: {
        top: 70,
        fontSize:20
    },

    note: {
        top: 70
    }
  
  });
  