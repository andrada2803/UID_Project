import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-elements/dist/card/Card';
import { GradeCard } from './GradeCard';

const images = [
  {
    key: 1,
    courseTitle: "Special Mathematics",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Daniela Rosca",
    year:1,
    credits:6,
    score:100,
    maxScore:100,
    type: "coloquim",
    isReview:true
  },
  {
    key: 2,
    courseTitle: "Special Mathematics",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Daniela Rosca",
    year:2,
    credits:6,
    score:60,
    maxScore:100,
    type: "exam",
    isReview:true
  },
  {
    key: 3,
    courseTitle: "Special Mathematics",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Daniela Rosca",
    year:3,
    credits:6,
    score:90,
    maxScore:100,
    type:"coloquim",
    isReview:false
  },
  {
    key: 4,
    courseTitle: "Special Mathematics",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Daniela Rosca",
    year:4,
    credits:6,
    score:40,
    maxScore:100,
    type:"coloquim",
    isReview:true
  },
];


export const GradebookScreen = () => {
  return (
    <View style ={{flex:1}}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ courseTitle, gradeDate, professor, year, credits, score, maxScore, type, isReview, key }) => (
        <GradeCard courseTitle = {courseTitle} gradeDate={gradeDate} professor={professor} year={year} credits={credits} score = {score} maxScore = {maxScore} type={type} isReview={isReview} key={key}/>
      ))}
      </ScrollView>
    </View>
  )
}
