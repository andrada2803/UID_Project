import React from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native'


// @ts-ignore
export const NotificationsScreen = ({navigation}) => {
  return (
    <View style={{flex:1,flexDirection:"column", margin:10}}>
      <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
      <NotificationContainer 
          navigation={navigation} 
          route={"Timetable"}
          notificationText={"There was a change in the timetable! Go check it out!"}/>

        <NotificationContainer 
          navigation={navigation} 
          route={"Payments"}
          notificationText={"There was a payment added to your “Due Payments List”. Go check it out until it is too late!"}/>

        <NotificationContainer 
          navigation={navigation} 
          route={"ToDoList"}
          notificationText={"There is an assignment added! Check it now to submit it on time!"}/>   
      </ScrollView>
    </View>
  )
}

// @ts-ignore
const NotificationContainer = (props) => {
  return (
    <Pressable style = {styles.container} onPress={() => props.navigation.navigate(props.route)}> 
          <View style={{flexDirection:"column"}}>
          <Text style={{fontSize:18, marginBottom:5}}>Hi Shuri!</Text>
          <Text style = {styles.title}>{props.notificationText}</Text>
          </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({

  container: {
    paddingTop:12,
    paddingLeft:16,
    paddingRight:16,
    paddingBottom:12,
    backgroundColor: "#C2E8FF",
    alignItems: "flex-start",
    borderRadius: 8,
    marginBottom:20
  },

  title: {
    fontSize: 12,
    color:"#686868",
    lineHeight:21
  }
});
