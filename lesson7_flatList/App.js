import React, {useState} from 'react' 
import { Text, View, StyleSheet, FlatList} from 'react-native';
import Constants from 'expo-constants';

import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import ItemListSeperator from './app/components/ItemListSeperator';
import ListItemDeleteAction from './app/components/ListItemDeleteAction';
import AddFriendComponent from './app/components/AddFriendComponent';

export default function App() {

// this is the array we will use for the example on FlatLists
  const initialFriends = [
    {
      id: 1,
      name: "Audi",
      age: "20000",
      favActivity: "whiffing on valorant",
    },
    {
      id: 2,
      name: "Elle",
      age: "0.1",
      favActivity: "punching in physics",
    },
    {
      id: 3,
      name: "josh",
      age: "0",
      favActivity: "screaming into the microphone",
    },
    {
      id: 4,
      name: "Denna",
      age: "45",
      favActivity: "annoying pranav",
    },

   // add more if you like, continue the same format and use unique id numbers

  ]

  // delare the friends array to be a state variable
  // will initialize the array with the valued in initial friends array
  const[friends, setFriends] = useState(initialFriends);

  // make vars to represent data entered for a new friend
  const[id, setId] = useState(initialFriends.length + 1);
  const [name, setName] = useState('');
  const[age, setAge] = useState('');
  const[favActivity, setFavActivity] = useState('');


  /* 
    This function will handle the deleting of one friend,
    will be called in the onPress for renderRightActions

    Friend is the friend we want to delete from friends array
  */

      const handleDelete = (friend) => {
        // make a new array without the friend we are deleting
        // f is temp variable name, like a for each loop
        const newFriends = friends.filter(f => f.id !== friend.id);
        // call setFriends to update the array
        setFriends(newFriends);
      }
      
      const handleAdd = (newFriend) => {

        // call setFriends to update the array to contain this new object
        setFriends([...friends, newFriend]);
      }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>My Friends</Text>

      <AddFriendComponent 
        startingId={initialFriends.length+1}
        handleAdd={handleAdd}/>

     <FlatList style={alignItems = "center"}
        data={friends}
        keyExtractor={friend => friend.id.toString()}
        renderItem={({item}) => (
          <ListItem
            name = {item.name}
            age = {item.age} 
            favActivity= {item.favActivity}
            onPress={() => console.log(item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
           />
        )}
        ItemSeparatorComponent={() => <ItemListSeperator color={colors.secondary}/>}
      />

     {/* Begin to interact with our FlatList (more to come!) */}

    </View>
  );
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
});
