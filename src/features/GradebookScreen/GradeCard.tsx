import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import {Card} from 'react-native-paper'
import ColoquimIcon from '../../assets/Coloquim.svg'
import ExamIcon from '../../assets/Exam.svg'



export const GradeCard = (props:any) => {
  return (
        <Card style={styles.container}>
          <Text style={styles.courseTitle}>
            {props.courseTitle}
          </Text>
          <Text style={styles.gradeDate}>
            {props.gradeDate}
          </Text>
          <View style={{flexDirection:"column"}}> 
            <View style={{flexDirection:"row", justifyContent:"space-between"}}> 
                <View style={styles.gradeContainer}>
                    <View style={{flexDirection:"column"}}>
                        <Text style={styles.professorText}>PROFESSOR</Text>
                        <Text style = {{fontSize:12, color: "#666666"}}>{props.professor}</Text>
                    </View>
                    <View style={{flexDirection:"row", marginTop:20, justifyContent:"space-between"}}>
                        <View style={{flexDirection:"column"}}>
                            <Text style = {{fontSize:10, color: "#666666"}}>YEAR</Text>
                            <Text style = {{fontSize:14, color: "#666666"}}>{props.year}{props.year==1 ? "st" : (props.year==2? "nd" : (props.year==3 ? "rd" : "th"))}</Text>
                        </View>
                        <View style={{flexDirection:"column"}}>
                            <Text style = {{fontSize:10, color: "#666666"}}>CREDITS</Text>
                            <Text style = {{fontSize:14, color: "#666666"}}>{props.credits}</Text>
                        </View>
                    </View>
                </View>
                    {props.score >= 50 ? 
                    <View style = {[styles.circle, {backgroundColor: "#006688"}]}>
                         <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>{props.score}/{props.maxScore}</Text>
                    </View>
                    : 
                    <View style = {[styles.circle, {backgroundColor: "#FFDAD6"}]}>
                         <Text style={{color:"#410002DE", fontWeight:"bold", fontSize:20}}>{props.score}/{props.maxScore}</Text>
                    </View>
                    }
                    
                
            </View>
          <View style={{flexDirection:"row", marginTop:20, justifyContent:"space-between", paddingStart:10}}>
            {props.type == 'exam'?
                <ExamTypeLabel icon={ExamIcon}  label={"Exam"} color={"#96F7B8"}/>
              :
               <ExamTypeLabel icon={ColoquimIcon} label = {"Coloquim"} color={"#F5E652"}/> } 
            {props.isReview &&
                <Pressable style={styles.button} >
                    <Text style={styles.buttonText}>{"Review"}</Text>
                </Pressable>   
            }   
            </View>
          </View>
        </Card>
  )
}


const ExamTypeLabel = (props:any) => {
    const ButtonIcon = props.icon
    return (
      <View style = {[styles.examTypeContainer, {backgroundColor: props.color}]}>
          <ButtonIcon />
          <Text style={styles.examTypeTitle}>{props.label}</Text>
      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'white',
      margin: 15
    },

    courseTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
      color: "#666666"
    },

    gradeDate: {
      fontSize: 10,
      fontStyle:"italic",
      padding:10,
      color: "#666666",
    },

    gradeContainer: {
      flex:0.5,
      flexDirection:"column",
      padding:10
    },

    professorText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: "#666666"
    },

    circle: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#006688',
    },

    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    examTypeContainer: {
        flexDirection:'row',
        alignItems:"center",
        padding:20,
        borderRadius: 32,
    },

    examTypeTitle: {
        marginLeft:10,
        fontSize: 12,
        fontWeight:"bold"
    }

});