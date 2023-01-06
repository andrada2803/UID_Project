import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Checkbox from 'expo-checkbox';

type CheckBox = {
  id: number,
  text: string;
  checked: boolean;
}

export const ToDoListScreen = () => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);

  const [isCheckedToDo, setCheckedToDo] = useState(false);
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([] as CheckBox[]);
  const [text, setText] = useState('');

  const addTodo = () => {
    const newToDo: CheckBox = {
      id: todos.length,
      text: text,
      checked: false
    }
    setTodos([...todos, newToDo]);
    setText('');
  };

  function handleChange(id: number) {
    // Create a new array with the updated values
    const updatedItems = todos.map(item => {
      if (item.id === id) {
        // Toggle the `checked` property
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    // Update the state with the new array
    setTodos(updatedItems);
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/ClockIcon.png')}></Image>
      </View>
      <Text style={styles.listsTitle}>
        Assignments
      </Text>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>UID Project Assignment Phase 3</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.paragraph}>DS Assignment 1</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
        <Text style={styles.paragraph}>TD Project Assignment</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} />
        <Text style={styles.paragraph}>OS Project Assignment</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked5} onValueChange={setChecked5} />
        <Text style={styles.paragraph}>PM Presentation Assignment</Text>
      </View>
      <Text style={styles.listsTitle}>
        Tasks
      </Text>
      {todos.map((todo, index) => (
        <View key={index} style={styles.section}>
          <Checkbox style={styles.checkbox} value={todo.checked} onValueChange={() => handleChange(todo.id)}/>
          <Text>{todo.text}</Text>
        </View>
      ))}
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Create Task</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

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
    marginTop: 10
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
    bottom:30
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    alignItems:'center'
  },
  todo: {
    marginBottom: 10
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
  listsTitle: {
    fontSize: 22,
    marginTop: 15,
    marginLeft: 8,
    marginBottom: 5,
    fontWeight: 'bold',
  }


});