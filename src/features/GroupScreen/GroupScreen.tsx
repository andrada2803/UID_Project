import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ProfileIcon from 'src/assets/profile_picture.svg';

export const GroupScreen = () => {
  const colleagues = [
    { name: 'Emily Smith' },
    { name: 'Sarah Williams' },
    { name: 'David Brown' },
    { name: 'Jessica Davis' },
    { name: 'James Rodriguez' },
    { name: 'Rachel Garcia' },
    { name: 'Christopher Martinez' },
    { name: 'Elizabeth Thompson' },
    { name: 'William Moore' },
    { name: 'David Taylor' },
    { name: 'Jessica Jackson' },
    { name: 'Michael Lee' },
    { name: 'Rachel Smith' },
    { name: 'Christopher Davis' },
    { name: 'Sarah Davis' },
  ];
  return (
    <View style={styles.container} >
      <View style={styles.imageContainer}>
        <ProfileIcon width={100} height={100}/>
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>University:</Text>
          <Text style={styles.textStyle}> Technical University of Cluj-Napoca</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>Specialization:</Text> 
          <Text style={styles.textStyle}> Computer Science</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>Year:</Text>
          <Text style={styles.textStyle}> 4</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>Section:</Text>
          <Text style={styles.textStyle}> English</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.titleStyle}>Group:</Text>
          <Text style={styles.textStyle}> 30442</Text>
        </View>
        <Text style={styles.titleStyle}>Group Colleagues: </Text>
        <FlatList
          style={styles.flatListStyle}
          data={colleagues}
          renderItem={({ item }) => (
            <Text style={styles.listItemStyle}>{item.name}</Text>
          )}
          keyExtractor={item => item.name}
        /> 
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    height: '100%',
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 35
  },

  infoWrapper: {
    padding:15,
    top: 50,
  },

  textStyle: {
    fontFamily: 'Inter',
    marginTop: 20,
    fontSize: 16
  },

  titleStyle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 16
  },

  flatListStyle: {
    borderWidth: 3,
    borderColor: '#0282ad',
    height:325
  },
   
  listItemStyle: {
    fontFamily: 'Inter',
    marginTop: 5,
    fontSize: 16,
    marginLeft: 5
    
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row'
  }

});
