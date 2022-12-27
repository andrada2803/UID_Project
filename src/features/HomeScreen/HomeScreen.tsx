import React from 'react'
import { View,Text, Button } from 'react-native'
import CalendarIcon from '../../assets/CalendarIcon.svg'

// @ts-ignore
const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <CalendarIcon></CalendarIcon>
      <Button
        title="Go to Timetable"
        onPress={() => navigation.navigate('Timetable')}
        />
    </View>
  )
}

export default HomeScreen