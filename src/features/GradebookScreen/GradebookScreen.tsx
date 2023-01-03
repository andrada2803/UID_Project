import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { GradeCard } from './GradeCard';
import { Chip, Divider } from 'react-native-paper';



export const GradebookScreen = () => {

  const [all, setAll] = useState(true);
  const[currentSemester, setCurrentSemester] = useState(false);
  const[missedGrades, setMissedGrades] = useState(false);
  const[filteredListGrades, setGradeList] = useState(allGradesList)

  function handleAllFilter() {
    setAll(true)
    setCurrentSemester(false)
    setMissedGrades(false)
    setGradeList(allGradesList)
  };

  function handleCurrentSemesterFilter () {
    setAll(false)
    setCurrentSemester(true)
    setMissedGrades(false)
    setGradeList(currentSemesterGradesList)
  };

  function handleMissedGradesFilter(){
    setAll(false)
    setCurrentSemester(false)
    setMissedGrades(true)
    setGradeList(missedGradesList)
  };

  return (
    <View style ={{flex:1, flexDirection:"column"}}>
      
      <View style = {styles.filterChipContainer}>
      
      {all ? 
        <Chip style={styles.filterChipSelected} textStyle = {styles.filterChipTextSelected} onPress={handleAllFilter}>
          All
        </Chip>
        :
        <Chip style={styles.filterChipNotSelected} textStyle = {styles.filterChipTextNotSelected} onPress={handleAllFilter}>
          All
        </Chip>
      }
      
      {currentSemester ? 
        <Chip style={styles.filterChipSelected} textStyle = {styles.filterChipTextSelected} onPress={handleCurrentSemesterFilter}>
          Current Semester
        </Chip>
        :
        <Chip style={styles.filterChipNotSelected} textStyle = {styles.filterChipTextNotSelected} onPress={handleCurrentSemesterFilter}>
          Current Semester
        </Chip>
      }

      {missedGrades ? 
        <Chip style={styles.filterChipSelected} textStyle = {styles.filterChipTextSelected} onPress={handleMissedGradesFilter}>
          Missed Grades
        </Chip>
        :
        <Chip style={styles.filterChipNotSelected} textStyle = {styles.filterChipTextNotSelected} onPress={handleMissedGradesFilter}>
          Missed Grades
        </Chip>
      }
    </View>

    <Divider bold/>
      
      
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {filteredListGrades.map(({ courseTitle, gradeDate, professor, year, credits, score, maxScore, type, isReview, key }) => (
        <GradeCard courseTitle = {courseTitle} gradeDate={gradeDate} professor={professor} year={year} credits={credits} score = {score} maxScore = {maxScore} type={type} isReview={isReview} key={key}/>
      ))}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({

  filterChipContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:20,
    marginBottom:10,
    marginLeft:5,
    marginRight:5
  },



  filterChipNotSelected:{
    backgroundColor:"white",
    borderRadius:32,
  },

  filterChipSelected:{
    backgroundColor:"#006688",
    borderRadius:32,
  },

  filterChipTextNotSelected:{
    color:"#666666"
  },


  filterChipTextSelected:{
    color:"white",
  }

});

const allGradesList = [
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


const currentSemesterGradesList = [
  {
    key: 1,
    courseTitle: "Distributed Systems",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Cristina Pop",
    year:4,
    credits:6,
    score:90,
    maxScore:100,
    type: "exam",
    isReview:true
  },
  {
    key: 2,
    courseTitle: "Marketing",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Daniela Rosca",
    year:4,
    credits:6,
    score:100,
    maxScore:100,
    type: "exam",
    isReview:true
  },
  
];


const missedGradesList = [
  {
    key: 1,
    courseTitle: "Logic Design",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Octavian Cret",
    year:1,
    credits:6,
    score:40,
    maxScore:100,
    type: "exam",
    isReview:false
  },
  {
    key: 2,
    courseTitle: "Special Mathematics",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Daniela Rosca",
    year:1,
    credits:6,
    score:45,
    maxScore:100,
    type: "exam",
    isReview:true
  },
  {
    key: 3,
    courseTitle: "Digital Systems Design",
    gradeDate:"12/03/2022 at 15:40PM",
    professor:"Octavian Cret",
    year:2,
    credits:5,
    score:50,
    maxScore:100,
    type:"exam",
    isReview:true
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
