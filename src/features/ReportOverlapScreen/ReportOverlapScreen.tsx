import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Modal, Image } from 'react-native';
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

    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                What class would you like to change?
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
            {/* <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={text => setDescription(text)}
            /> */}
            <View style={styles.submitButton}>
                <Button title="Submit" onPress={() => setModalVisible(true)}/>

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
        top: 30
    },

    text: {
        fontSize: 20,
        bottom: 10,
        top: 10
    },

    dropdown: {
        top: 20
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
    }

  
  });
  