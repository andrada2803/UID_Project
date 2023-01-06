import React, { useState } from 'react'
import { StyleSheet, Alert,View, Text, ScrollView, TouchableOpacity, Platform, LayoutAnimation} from 'react-native'
import { VictoryChart, VictoryLine, VictoryArea, VictoryScatter, VictoryTheme, VictoryLabel, VictoryAxis  } from 'victory-native';
import CashIcon from 'src/assets/cash.svg';
import RankIcon from 'src/assets/rank.svg';
import CreditsIcon from 'src/assets/credits.svg';
import ScholarshipIcon from 'src/assets/scholarship.svg';

export const SituationScreen = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 8.76 },
    { x: 3, y: 10 },
    { x: 4, y: 7.5 },
  ];

  const [showRankText, setShowRankText] = useState(false);
  const [showCreditsText, setShowCreditsText] = useState(false);
  const [showScholarshipText, setShowScholarshipText] = useState(false);
  const [showBudgetText, setShowBudgetText] = useState(false);

  const onPressRank = () => {
    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    setShowRankText(!showRankText);
  }

  const onPressCredits = () => {
    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    setShowCreditsText(!showCreditsText);
  }

  const onPressScholarship = () => {
    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    setShowScholarshipText(!showScholarshipText);
  }

  const onPressBudget = () => {
    LayoutAnimation.configureNext({
      duration: 200,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    setShowBudgetText(!showBudgetText);
  }
  
  return (
    <ScrollView style={styles.safeArea}>

      <View style={styles.chartContainer}>
        <Text style={styles.text}>
          GRADE
        </Text>
        <VictoryChart 
          theme={VictoryTheme.material}>
            <VictoryAxis
            tickValues={[1, 2, 3, 4]}

          />
          <VictoryAxis
            dependentAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
          <VictoryLine data={data} />
          <VictoryArea data={data} style={{ data: { fill: "#0087B5" } }} />
          <VictoryScatter labels={({ datum }) => `avg: ${datum.y}`}
            labelComponent={<VictoryLabel dy={-10} />}
            size={({ active }) => active ? 10 : 5}
            style={{ data: { fill: ({ active }) => active ? "red" : "black" } }}data={data}/>
        </VictoryChart>
      </View>

      <View>
        <Text style={styles.details}>
            DETAILS
        </Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>1st Year</Text>

          <View style={styles.gradesContainer}>
            <View style={[styles.view, styles.view1]}>
              <Text style={styles.grades}>
                10
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  I
                </Text>
              </View>
            </View>

            <View style={[styles.view, styles.view2]}>
              <Text style={styles.grades}>
                10
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  II
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressRank} style={{flexDirection: 'row', top:-15}}>
                  {showRankText && (
                    <Text style={styles.iconsText}>Rank:</Text>
                  )}

                  <RankIcon width={50} height={40}/>
                  <Text style={styles.rankText}>1/120</Text>
               </TouchableOpacity>
              
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressCredits} style={{flexDirection: 'row',  top:-15}}>
                  {showCreditsText && (
                    <Text style={styles.iconsText}>Credits:</Text>
                  )}
                <CreditsIcon width={40} height={40}/>
                <Text style={styles.rankText}>60/60</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressScholarship} style={{flexDirection: 'row',}}>
                    {showScholarshipText && (
                      <Text style={styles.iconsText}>Scholarship:</Text>
                    )}
                <ScholarshipIcon width={50} height={40}/>
                <Text style={styles.rankText}>Yes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressBudget} style={{flexDirection: 'row',}}>
                      {showBudgetText && (
                        <Text style={styles.iconsText}>Budget:</Text>
                      )}
                <CashIcon width={40} height={40}/>
                <Text style={styles.rankText}>FREE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.detailsContainer2}>
          <Text style={styles.title}>2nd Year</Text>

          <View style={styles.gradesContainer}>
            <View style={[styles.view, styles.view1]}>
              <Text style={styles.grades}>
                8.20
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  I
                </Text>
              </View>
            </View>

            <View style={[styles.view, styles.view2]}>
              <Text style={styles.grades}>
                9.32
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  II
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressRank} style={{flexDirection: 'row', top:-15}}>
                  {showRankText && (
                    <Text style={styles.iconsText}>Rank:</Text>
                  )}

                  <RankIcon width={50} height={40}/>
                  <Text style={styles.rankText}>25/120</Text>
               </TouchableOpacity>
              
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressCredits} style={{flexDirection: 'row',  top:-15}}>
                  {showCreditsText && (
                    <Text style={styles.iconsText}>Credits:</Text>
                  )}
                <CreditsIcon width={40} height={40}/>
                <Text style={styles.rankText}>60/60</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressScholarship} style={{flexDirection: 'row',}}>
                    {showScholarshipText && (
                      <Text style={styles.iconsText}>Scholarship:</Text>
                    )}
                <ScholarshipIcon width={50} height={40}/>
                <Text style={styles.rankText}>Yes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressBudget} style={{flexDirection: 'row',}}>
                      {showBudgetText && (
                        <Text style={styles.iconsText}>Budget:</Text>
                      )}
                <CashIcon width={40} height={40}/>
                <Text style={styles.rankText}>FREE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.detailsContainer3}>
          <Text style={styles.title}>3rd Year</Text>

          <View style={styles.gradesContainer}>
            <View style={[styles.view, styles.view1]}>
              <Text style={styles.grades}>
                10
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  I
                </Text>
              </View>
            </View>

            <View style={[styles.view, styles.view2]}>
              <Text style={styles.grades}>
                10
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  II
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressRank} style={{flexDirection: 'row', top:-15}}>
                  {showRankText && (
                    <Text style={styles.iconsText}>Rank:</Text>
                  )}

                  <RankIcon width={50} height={40}/>
                  <Text style={styles.rankText}>1/120</Text>
               </TouchableOpacity>
              
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressCredits} style={{flexDirection: 'row',  top:-15}}>
                  {showCreditsText && (
                    <Text style={styles.iconsText}>Credits:</Text>
                  )}
                <CreditsIcon width={40} height={40}/>
                <Text style={styles.rankText}>60/60</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressScholarship} style={{flexDirection: 'row',}}>
                    {showScholarshipText && (
                      <Text style={styles.iconsText}>Scholarship:</Text>
                    )}
                <ScholarshipIcon width={50} height={40}/>
                <Text style={styles.rankText}>Yes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressBudget} style={{flexDirection: 'row',}}>
                      {showBudgetText && (
                        <Text style={styles.iconsText}>Budget:</Text>
                      )}
                <CashIcon width={40} height={40}/>
                <Text style={styles.rankText}>FREE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.detailsContainer4}>
          <Text style={styles.title}>4th Year</Text>

          <View style={styles.gradesContainer}>
            <View style={[styles.view, styles.view1]}>
              <Text style={styles.grades}>
                7.10
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  I
                </Text>
              </View>
            </View>

            <View style={[styles.view, styles.view2]}>
              <Text style={styles.grades}>
                7.90
              </Text>
              <View style={styles.corner}>
                <Text style={styles.semesters}>
                  II
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressRank} style={{flexDirection: 'row', top:-15}}>
                  {showRankText && (
                    <Text style={styles.iconsText}>Rank:</Text>
                  )}

                  <RankIcon width={50} height={40}/>
                  <Text style={styles.rankText}>62/120</Text>
               </TouchableOpacity>
              
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressCredits} style={{flexDirection: 'row',  top:-15}}>
                  {showCreditsText && (
                    <Text style={styles.iconsText}>Credits:</Text>
                  )}
                <CreditsIcon width={40} height={40}/>
                <Text style={styles.rankText}>60/60</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoWithIcons}>
            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressScholarship} style={{flexDirection: 'row',}}>
                    {showScholarshipText && (
                      <Text style={styles.iconsText}>Scholarship:</Text>
                    )}
                <ScholarshipIcon width={50} height={40}/>
                <Text style={styles.rankText}>Yes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.info}> 
              <TouchableOpacity onPress={onPressBudget} style={{flexDirection: 'row',}}>
                      {showBudgetText && (
                        <Text style={styles.iconsText}>Budget:</Text>
                      )}
                <CashIcon width={40} height={40}/>
                <Text style={styles.rankText}>FREE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </View>
      <View style={{height: 200}}/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({

  imageContainer: {
    alignItems: 'center',
  }, 
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  chartContainer: {
    top: 30,
    backgroundColor: "#C2E8FF",
    width:367,
    borderRadius: 15,
    marginLeft: 12
  },

  text:{
    marginLeft: 22,
    top: 25,
    fontSize: 16,
    fontFamily: 'Inter',
  },

  details: {
    top: 60,
    fontFamily: 'Inter',
    fontSize: 18,
    padding: 20

  },
  detailsContainer:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: 350,
    height: 400,
    marginLeft: 20,
    top: 60,
    borderRadius: 15,

  },

  detailsContainer2:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: 350,
    height: 400,
    marginLeft: 20,
    top: 90,
    borderRadius: 15
  },

  detailsContainer3:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: 350,
    height: 400,
    marginLeft: 20,
    top: 120,
    borderRadius: 15
  },

  detailsContainer4:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: 350,
    height: 400,
    marginLeft: 20,
    top: 150,
    borderRadius: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    left: 10
  },
  grades: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Inter',
    color: 'white'
  },

  semesters: {
    fontFamily: 'Inter',
  },

  gradesContainer: {
    flexDirection: 'row',
  },

  view: {
    width: 140,
    height: 100,
    top: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    backgroundColor: '#006688'
  },
  view2: {
    backgroundColor: '#006688'
  },
  corner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 35,
    backgroundColor: '#eee',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    top: 70,
    marginLeft: 20,
    flexDirection: 'row',
    marginHorizontal: 40,
    width:100,
    height:70
  },

  info2: {
    top: 80,
    marginLeft: 20,
    flexDirection: 'row',
    marginHorizontal: 57
  },

   rankText: {
    fontFamily: 'Inter',
    top:  7,
    fontSize: 18,
    left:-1
   },
   infoWithIcons:{
    flexDirection: 'row',
    
   },

   infoWithIcons2:{
    flexDirection: 'row',
    top: 10
   },
   safeArea: {
    paddingVertical: 20
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%'
  },
  textModal: {
    fontSize: 16,
    color: '#fff'
  },
  iconsText: {
    bottom: -15,
  }

});
