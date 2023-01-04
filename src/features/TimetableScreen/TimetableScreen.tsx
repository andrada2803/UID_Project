import React from 'react'
import { View,Text, Button, StyleSheet, Dimensions, Pressable, Alert, ScrollView, SafeAreaView } from 'react-native'
import TimeTable from '@mikezzb/react-native-timetable';

// @ts-ignore
const TimetableScreen = ({navigation})  => {
  return (
    <ScrollView style={styles.screenLayout}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.timetableView}>
          <TimeTable
            headerStyle={{ backgroundColor: '#006688'}}
            contentContainerStyle={{borderBottomColor: '#f55f02'}}
            events={[
            {
              courseId: 'PM',
              title: 'Project Management',
              section: '',
              day: 1,
              startTime: '14:00',
              endTime: '17:00',
              location: 'Room Blue ',
              color: 'rgba(2, 141, 227, 1)',
            },

            {
              courseId: 'UID',
              title: 'User Interface Design',
              section: '',
              day: 2,
              startTime: '08:00',
              endTime: '10:00',
              location: 'Room H11',
              color: 'rgba(2, 141, 227, 1)',
            },

            {
              courseId: 'DS',
              title: 'Distributed Systems',
              section: '',
              day: 2,
              startTime: '10:00',
              endTime: '12:00',
              location: 'Room F',
              color: 'rgba(2, 141, 227, 1)',
            },

            {
              courseId: 'MC',
              title: 'Management and Communication',
              section: '',
              day: 2,
              startTime: '12:00',
              endTime: '14:00',
              location: 'Room F',
              color: 'rgba(2, 141, 227, 1)',
            },

            {
              courseId: 'TD - Lab',
              title: 'Translator Design - Lab',
              section: '',
              day: 2,
              startTime: '14:00',
              endTime: '16:00',
              location: 'Room 26',
              color: 'rgba(247, 167, 17, 1)',
            },

            {
              courseId: 'DS - Lab',
              title: 'Distributed Systems - Lab',
              section: '',
              day: 3,
              startTime: '14:00',
              endTime: '17:00',
              location: 'Room 18',
              color: 'rgba(247, 167, 17, 1)',
            },

            {
              courseId: 'UID - Lab',
              title: 'User Interface Design - Lab',
              section: '',
              day: 3,
              startTime: '17:00',
              endTime: '20:00',
              location: 'Room 18',
              color: 'rgba(247, 167, 17, 1)',
            },

            {
              courseId: 'DBD',
              title: 'Database Design',
              section: '',
              day: 4,
              startTime: '08:00',
              endTime: '10:00',
              location: 'Room H11',
              color: 'rgba(2, 141, 227, 1)',
            },

            {
              courseId: 'TD',
              title: 'Translators Design',
              section: '',
              day: 4,
              startTime: '10:00',
              endTime: '12:00',
              location: 'Room 356',
              color: 'rgba(2, 141, 227, 1)',
            },

            {
              courseId: 'Marketing',
              title: 'Marketing',
              section: '',
              day: 4,
              startTime: '12:00',
              endTime: '14:00',
              location: 'Room H11',
              color: 'rgba(2, 141, 227, 1)',
            },

            {
              courseId: 'DBD - Lab',
              title: 'Database Design - Lab',
              section: '',
              day: 5,
              startTime: '08:00',
              endTime: '10:00',
              location: 'Room 15',
              color: 'rgba(247, 167, 17, 1)',
            },
          
          
          ]}
          //JSON.stringify(event)
            eventOnPress={(event) => 
              Alert.alert(
                'Course Title: ' + event.title + '\n' 
                + 'Location: ' + event.location + '\n'
                + 'Start Time: ' + event.startTime + '\n'
                + 'End Time: ' + event.endTime)}
          />
        </View>
      </SafeAreaView>
      <View style={styles.buttonsLayout}>
          <ReportButton style= {styles.buttonStyleReport} description = "Report Overlap" navigation={navigation}/>
          <CreateAppointmentButton style= {styles.buttonStyleAppointment} description = "Create Appointment" navigation={navigation}/>
      </View>
    </ScrollView>
  )
}

// @ts-ignore
const ReportButton = (props) => {
  return (
    <View style = {styles.buttonStyleReport}>
      <Pressable style = {styles.buttonStyleReport} onPress={() => props.navigation.navigate(props.description)}>
        <Text style = {styles.title}>{props.description}</Text>
      </Pressable>
    </View>
  )
}

// @ts-ignore
const CreateAppointmentButton = (props) => {
  return (
    <View style = {styles.buttonStyleAppointment}>
      <Pressable style = {styles.buttonStyleAppointment} onPress={() => props.navigation.navigate(props.description)}>
        <Text style = {styles.title}>{props.description}</Text>
      </Pressable>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 16,
  },

  title: {
    marginTop: 14,
    textAlign: "center",
    fontSize: 12,
    fontWeight:"bold"
  },

  timetableView: {
    flex: 2,
    backgroundColor: '#F8F8F8',
  },

  buttonStyleReport: {
    backgroundColor: "#FFDAD6",
    alignItems: "center",
    borderRadius: 16,
    marginBottom:20,
    width: 170,
    height: 50,
  },

  buttonStyleAppointment: {
    backgroundColor: "#C2E8FF",
    alignItems: "center",
    borderRadius: 16,
    marginBottom:20,
    width: 170,
    height: 50,
    color: "#ffffff",
  },

});

export default TimetableScreen