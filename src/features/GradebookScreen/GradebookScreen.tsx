import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { GradeCard } from './GradeCard';
import { Chip, Divider, Searchbar} from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import FilterIcon from '../../assets/charm_filter.svg'

import { setCurrentGradesListAll,setCurrentGradesListByCourse,setCurrentGradesListByYear,setCurrentGradesList,setMissedGradesList,setCurrentGradesListByCourseOrByYear } from 'src/stores/generalSlice';
import { useAppDispatch, useAppSelector } from 'src/stores/store';


const data = [
  { label: 'c&y', value: 'c&y' },
  { label: 'course', value: 'course' },
  { label: 'year', value: 'year' },
];

// @ts-ignore
export const GradebookScreen = ({navigation}) => {

  const allGrades = useAppSelector((state) => state.general.allGradesList);
  const currentGrades = useAppSelector((state) => state.general.currentGradesList);
  const dispatch = useAppDispatch();

  const [all, setAll] = useState(true);
  const[currentSemester, setCurrentSemester] = useState(false);
  const[missedGrades, setMissedGrades] = useState(false);
  const[filteredListGrades, setGradeList] = useState(allGrades)
  const[search, setSearch] = useState('')
  const[currentFilter, setFilter] = useState("both")

  
  function handleAllFilter() {
    setAll(true)
    setCurrentSemester(false)
    setMissedGrades(false)
    setGradeList(allGrades)
    dispatch(setCurrentGradesListAll())
  };

  function handleCurrentSemesterFilter () {
    setAll(false)
    setCurrentSemester(true)
    setMissedGrades(false)
    const currentGrades = allGrades.filter(function (item) {
      return item.year===4;
    });
    setGradeList(currentGrades)
    dispatch(setCurrentGradesList())
  };

  function handleMissedGradesFilter(){
    setAll(false)
    setCurrentSemester(false)
    setMissedGrades(true)
    const missedGrades = allGrades.filter(function (item) {
      return item.score<50;
    });
    setGradeList(missedGrades)
    dispatch(setMissedGradesList())
  };

  const updateSearch = (search:any) => {
    setSearch(search);
    if(currentFilter==="course"){
      const searchedGradeListByCourse = allGrades.filter(function (item) {
        return item.courseTitle.includes(search);
      });
      setGradeList(searchedGradeListByCourse);
      dispatch(setCurrentGradesListByCourse(search))
    }
    else{
      if(currentFilter === "year"){
        const searchedGradeListByYear = allGrades.filter(function (item) {
          return item.year===parseInt(search);
        });
        setGradeList(searchedGradeListByYear);
        dispatch(setCurrentGradesListByYear(search))
      }
      else{
        setGradeList(allGrades);
        dispatch(setCurrentGradesListByCourseOrByYear(search))
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
          value={currentFilter}
          onChange={item => {
            setFilter(item.value);
          }}
        />
        </View>

                </View>
      }

      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {currentGrades.map(({ key,courseTitle, gradeDate, professor, year, credits, score, maxScore, type, isReview, requestActive,retakeActive }) => (
        <GradeCard navigation={navigation} key = {key} gradeKey={key} courseTitle = {courseTitle} gradeDate={gradeDate} professor={professor} year={year} credits={credits} score = {score} maxScore = {maxScore} type={type} isReview={isReview} requestActive={requestActive} retakeActive={retakeActive}/>
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
    marginRight:5,
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
