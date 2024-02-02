import { Text, View, StyleSheet, FlatList} from 'react-native';
import Constants from 'expo-constants';

import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import ItemListSeperator from './app/components/ItemListSeperator';

export default function App() {

// this is the array we will use for the example on FlatLists
  const friends = [
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

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>My Friends</Text>
     {/* First we will design ONE row of our FlatList*/}

     {/*
     <View style={styles.itemRowContainer}>
        <Text style={styles.text}>Nathan, 17</Text>
        <Text style={{color:colors.secondary}}>Coding in class</Text>
    </View>
    */}

     {/* Then we will take this code and use it to build a ListItem component*/}

     {/*<ListItem/>*/}

     {/* Next we will add one ListItem component to ensure the code is how we want*/}

     {/* <ListItem name="Chase" age="-200" favActivity={"Bogemon"}/> */}

     {/* Replace that code with a FlatList that has the array of friends as its data*/}

     <FlatList
        data={friends}
        keyExtractor={friend => friend.id.toString()}
        renderItem={({item}) => (
          <ListItem
            name = {item.name}
            age = {item.age} 
            favActivity= {item.favActivity}
            onPress={() => console.log(item)}
           />
        )}
        ItemSeparatorComponent={() => <ItemListSeperator color={colors.secondary}/>}
      />
     
     {/* Create a ListItemSeparator component that can go between ListItems */}

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

  itemRowContainer:{
    backgroundColor: colors.light,
    padding: 5,
  },
 
  text: {
    color: colors.primary,
    fontSize: 20,
  }
});
