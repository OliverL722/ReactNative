import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {

  const {height, width} = Dimensions.get('window');
  console.log("height" + height + " width " + width);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 500,
      //justifyContent: 'center',
    },
    textContainer: {
      width: width*.8, //80% of screen
      backgroundColor: "yellow",
    },
    text:{
      fontSize: 40,
      color: 'orange',
    }
  });

  
  return (
    <View style={styles.container}>
      <View style = {styles.textContainer}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text>It's Cold!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

