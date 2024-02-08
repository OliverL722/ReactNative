import React, {useState} from 'react' 
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Keyboard} from 'react-native';
import Constants from 'expo-constants';

import colors from '../config/colors';

export default function AddFriendComponent({startingId, handleAdd}) {



  // make vars to represent data entered for a new friend
  const[id, setId] = useState(startingId);
  const [name, setName] = useState('');
  const[age, setAge] = useState('');
  const[favActivity, setFavActivity] = useState('');

  const handleAddFriend = () => {
    //create a friend obj using state vars
    const newFriend = {
      id: id,
      name: name,
      age: age,
      favActivity: favActivity, 
    }
    //call the handleadd fxn from app.js

    handleAdd(newFriend);

    //reset the state vars, dismiss keyboard
    setId(id + 1);
    setName('');
    setAge('');
    setFavActivity('');
    Keyboard.dismiss();
  }


  return (

     <View style={styles.textInputContainer}>

        <View style={styles.textInputRow}>
            <Text style={styles.textLabel}>Name:</Text>
            <TextInput 
              style={styles.textInput}
              onChangeText={text => setName(text)}
              value={name}
              />

            <Text style={styles.textLabel}>Age:</Text>

              <TextInput 
                style={styles.textInput}
                onChangeText={text => setAge(text)}
                value={age}
              />
            
        </View>

        <View style={styles.textInputRow}>
          <Text style={styles.textLabel}>Fav Activity:</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={text => setFavActivity(text)}
            value={favActivity}
            />

            <TouchableHighlight

              style={styles.button}
              onPress={() =>  handleAddFriend()}
              underlayColor={colors.teal}>

              <View>
                <Text>Add!</Text>
              </View>

            </TouchableHighlight>

        </View>

      </View>
  )
}

const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.verylight,
    padding: 8,
  },

  textInputContainer: { 
    backgroundColor: colors.medium,
    height: 150,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.secondary,
  },

  textInputRow: {
    flexDirection: "row", 
    height: 50, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
  },

  textLabel: {
    margin: 10,
    fontSize: 16,
  },

  textInput: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.secondary,
    backgroundColor: 'white',
    width: 100,
    height: 40,
    fontSize: 12,
    padding: 3,
    margin: 10
  },

  itemRowContainer:{
    backgroundColor: colors.light,
    padding: 5,
    borderRadius: 10,
  },
 
  text: {
    margin: 5,
    color: colors.primary,
    fontSize: 20,
  },

  button: {
    height: 40,
    width: 100,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

})