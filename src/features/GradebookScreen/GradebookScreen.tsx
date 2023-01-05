import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { GradeCard } from './GradeCard';
import { Chip, Divider, Searchbar} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import FilterIcon from '../../assets/charm_filter.svg'


const data = [
  { label: 'course', value: 'course' },
  { label: 'year', value: 'year' },
];

// @ts-ignore
export const GradebookScreen = ({navigation}) => {

  const [all, setAll] = useState(true);
  const[currentSemester, setCurrentSemester] = useState(false);
  const[missedGrades, setMissedGrades] = useState(false);
  const[filteredListGrades, setGradeList] = useState(allGradesList)
  const[search, setSearch] = useState('')
  const[currentFilter, setFilter] = useState('')

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

  const updateSearch = (search:any) => {
    setSearch(search);
    if(currentFilter==="course"){
      const searchedGradeListByCourse = allGradesList.filter(function (item) {
        return item.courseTitle.includes(search);
      });
      setGradeList(searchedGradeListByCourse);
    }
    else{
      if(currentFilter === "year"){
        const searchedGradeListByYear = allGradesList.filter(function (item) {
          return item.year===parseInt(search);
        });
        setGradeList(searchedGradeListByYear);
      }
      else{
        setGradeList(allGradesList);
      }
    }
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
      
      {all &&
      <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
        <View style={{flex:2}}>
        <Searchbar placeholderTextColor={"#9EA8BD"} placeholder="Search"
      onChangeText={updateSearch}
      value={search} style={{backgroundColor:"#E2E6EE", borderRadius:10, margin:10}} ></Searchbar></View>
      
      
        <View style={styles.dropdownContainer}>
        
          <FilterIcon style={{margin:10}}/>

          <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder=""
          value={search}
          onChange={item => {
            setFilter(item.value);
          }}
        />
        </View>

                </View>
      }

      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {filteredListGrades.map(({ courseTitle, gradeDate, professor, year, credits, score, maxScore, type, isReview, key }) => (
        <GradeCard navigation={navigation} courseTitle = {courseTitle} gradeDate={gradeDate} professor={professor} year={year} credits={credits} score = {score} maxScore = {maxScore} type={type} isReview={isReview} key={key}/>
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
  },

  dropdownContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:"#E2E6EE",
    flex:1,
    margin:10,
    borderRadius:10
  },

  dropdown: {
    borderBottomColor: 'gray',
    width:85,
    margin:10
  },

  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 8,
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  iconStyle: {
    width: 16,
    height: 16,
  },


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
    courseTitle: "Marketing",
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
