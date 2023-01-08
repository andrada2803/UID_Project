import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { assignmentsMock } from 'src/mockData/General';
import { Todo } from 'src/models/Todo';
import { addTask, toggleAssignment, toggleTask } from 'src/stores/generalSlice';
import { useAppDispatch, useAppSelector } from 'src/stores/store';

export const ToDoListScreen = () => {
    const tasks = useAppSelector((state) => state.general.tasks);
    const assignments = useAppSelector((state) => state.general.assignments);
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');

    const handleAddTask = () => {
        if (!text.length) return;

        const newTask: Todo = {
            id: tasks.length + 1,
            text: text,
            completed: false,
        };
        dispatch(addTask(newTask));
        setText('');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/ClockIcon.png')}></Image>
            </View>
            <Text style={styles.listsTitle}>Assignments</Text>
            {assignments.map((item) => (
                <View key={item.id} style={styles.section}>
                    <Checkbox
                        color={'#006688'}
                        style={styles.checkbox}
                        value={item.completed}
                        onValueChange={() =>
                            dispatch(toggleAssignment(item.id))
                        }
                    />
                    <Text style={styles.paragraph}>{item.text}</Text>
                </View>
            ))}

            <Text style={styles.listsTitle}>Tasks</Text>
            {tasks.map((item) => (
                <View key={item.id} style={styles.section}>
                    <Checkbox
                        color={'#006688'}
                        style={styles.checkbox}
                        value={item.completed}
                        onValueChange={() => dispatch(toggleTask(item.id))}
                    />
                    <Text>{item.text}</Text>
                </View>
            ))}
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                <Text style={styles.buttonText}>Create Task</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 10,
    },
    checkbox: {
        margin: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 40,
        padding: 10,
        marginTop: 10,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#006688',
        bottom: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
    },
    todo: {
        marginBottom: 10,
    },

    text: {
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

    buttonLayout: {
        //IDKKKK
        bottom: -290,
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
        padding: 50,
    },

    textView: {
        //IDKKKK
        top: 220,
    },
    listsTitle: {
        fontSize: 22,
        marginTop: 15,
        marginLeft: 8,
        marginBottom: 5,
        fontWeight: 'bold',
    },
});
