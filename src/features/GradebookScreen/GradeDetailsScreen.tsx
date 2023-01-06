import React from 'react'
import {Text, View, StyleSheet, ScrollView, Pressable} from 'react-native'
import { GradeCard } from './GradeCard';

// @ts-ignore
export const GradeDetailsScreen = ({ route, navigation }) => {

    const {courseTitle,
        gradeDate,
        professor,
        year,
        credits,
        score,
        maxScore,
        type } = route.params;
  return (
    <View style={{flex:1,flexDirection:"column", margin:10}}>
        <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
        <GradeCard navigation={navigation} courseTitle = {courseTitle} gradeDate={gradeDate} professor={professor} year={year} credits={credits} score = {score} maxScore = {maxScore} type={type} isReview={false}/>
      
        <View style={{flexDirection:"column"}}>
                    <Text style={styles.feedbackText}>FEEDBACK</Text>           
        </View>

        <View style={styles.feedBackcontainer}>
            <Text style={styles.textStyle}>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin scelerisque magna a ante placerat, ut vehicula orci efficitur.
                Sed non cursus ipsum. Morbi rhoncus feugiat turpis in malesuada.
                Nulla hendrerit finibus cursus.
                Pellentesque et gravida mauris, at egestas nibh.
                Nunc urna sapien, accums
            </Text>
        </View>

        <View style = {{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
            <ActionButton backColor={"#FFDAD6"} textColor={"#410002"} description={"RETAKE"} onChoice={() =>
                            navigation.navigate('InformationScreen', {
                                title: "Retake exam!",
                                message: "Are you sure you want to retake this exam?",
                            })
                        }/>
            <ActionButton backColor={"#006688"} textColor={"white"} description={"REQUEST"} onChoice={() =>
                            navigation.navigate('InformationScreen', {
                                title: "Request another review!",
                                message: "Are you sure you want to request another review?",
                            })
                        }/>
        </View>

        </ScrollView>
    </View>
  )
}

const ActionButton = (props:any) => {
    return (
        <Pressable style= {[styles.actionButton, {backgroundColor: props.backColor}]} onPress={props.onChoice}>
            <Text style= {[styles.actionText, {color: props.textColor}]}>{props.description}</Text>
        </Pressable>
    )
  }

const styles = StyleSheet.create({
    feedBackcontainer: {
      backgroundColor:"#DCE3E9",
      margin:10,
      borderRadius:10,
    },

    feedbackText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000000", 
        margin:10
    },

    textStyle:{
        color:"#40484D",
        lineHeight:32,
        textAlign:"auto",
        margin:10,
        borderRadius:10
    },

    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 6,
        elevation: 3,
        margin:10,
        backgroundColor: '#FFDAD6',
    },

    actionText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#410002',
    },

});
