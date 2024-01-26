import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import colors from "./app/config/colors"
import MyButton from './app/components/MyButton';
import IconButton from './app/components/IconButton';



export default function App() {
  return (
    <View style={styles.container}>

          <TouchableHighlight

              style={styles.button}
              onPress={() =>  console.log("Pressed Button")}
              underlayColor={colors.teal}>
          
          <Fontisto name="reddit" size={24} color="black" />
      
          </TouchableHighlight>

          <MyButton/>

          <MyButton 
              title="test"
              onPress={() => console.log("test")}
          />

           <MyButton 
              title="test"
              onPress={() => console.log("test")}
              backgroundColor="red"
              underlayColor="blue"
              fontColor="blue"
          />

      <Fontisto name="reddit" size={24} color="black" />

      <IconButton />

      <IconButton backgroundColor={"orange"}/>
      <IconButton name = "mysql" backgroundColor={"orange"}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 50,
    height: 50, 
    borderRadius: 25,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
