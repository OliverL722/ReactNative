import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import colors from "./app/config/colors"
import MyButton from './app/components/MyButton';


export default function App() {
  return (
    <View style={styles.container}>

          <Text>Open up App.js to start working on your app!</Text>

          <TouchableHighlight
            style={styles.button}
            onPress={() =>  console.log("Pressed Button")}
            underlayColor={colors.teal}>
              
          <Text style={styles.text}>HI!!</Text>
      
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
