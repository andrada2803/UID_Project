import React from 'react'
import { View,Text, Button, StyleSheet, Dimensions } from 'react-native'
import CalendarIcon from '../../assets/CalendarIcon.svg'
import NotificationIcon from '../../assets/NotificationIcon.svg'
import GroupIcon from '../../assets/GroupIcon.svg'
import ToDoListIcon from '../../assets/ToDoListIcon.svg'
import GradebookIcon from '../../assets/GradebookIcon.svg'
import SituationIcon from '../../assets/SituationIcon.svg'
import PaymentsIcon from '../../assets/PaymentsIcon.svg'
import SettingsIcon from '../../assets/SettingsIcon.svg'

// @ts-ignore
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screenLayout}>
      <View style={{alignItems:'center'}}>
        <View style={styles.welcomeLayout}>
          <Text style={styles.welcomeTitle}>Welcome, </Text>
          <Text style={styles.usernameTitle}>Shuri!</Text>
        </View>
      </View>
      <View style={styles.buttonsLayout}>
        <View>
          <HomeScreenButton icon={GroupIcon} description = "Group" navigation={navigation}/>
          <HomeScreenButton icon={CalendarIcon} description = "Timetable" navigation={navigation}/>
          <HomeScreenButton icon={GradebookIcon} description = "Gradebook" navigation={navigation}/>
          <HomeScreenButton icon={PaymentsIcon} description = "Payments" navigation={navigation}/>
        </View>
        <View>
          <HomeScreenButton icon={NotificationIcon} description = "Notifications" navigation={navigation}/>
          <HomeScreenButton icon={ToDoListIcon} description = "ToDoList" navigation={navigation}/>
          <HomeScreenButton icon={SituationIcon} description = "Situation" navigation={navigation}/>
          <HomeScreenButton icon={SettingsIcon} description = "Settings" navigation={navigation}/>
        </View>
        
      </View>
    </View>
  )
}

// @ts-ignore
const HomeScreenButton = (props) => {
  const ButtonIcon = props.icon
  return (
    <View style = {styles.container}>
      <ButtonIcon onPress={() => props.navigation.navigate(props.description)}/>
      <Text style = {styles.title}>{props.description}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  screenLayout:{
    flexDirection: 'column',
    flex: 1,
    backgroundColor: "white"
  },


  buttonsLayout:{
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: "white"
  },

  welcomeLayout:{
    flexDirection: 'row',
  },

  welcomeTitle:{
    paddingTop:60,
    fontSize:24,
  },

  usernameTitle:{
    paddingTop:60,
    fontSize:24,
    fontWeight:'bold'
  },

  container: {
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:16,
    paddingRight:16,
    backgroundColor: "#C2E8FF",
    alignItems: "center",
    borderRadius: 16,
    marginBottom:20,
  },

  title: {
    marginTop: 14,
    textAlign: "center",
    fontSize: 12,
  }
});

export default HomeScreen