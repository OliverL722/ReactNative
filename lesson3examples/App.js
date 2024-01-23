import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// all fxns must be before export defaul app()

const firstFunction = () => {
  alert("First Function Complete");
}

const myAlertFn = () => {
  Alert.alert("Alert Title", "Alert message", [
    {text: "Yes", onPress: () => console.log("Pressed yes")},
    {text: "No", onPress: () => console.log("Pressed no")}
  ]);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button 
        title = "First Button"
        onPress={() => console.log("pressed button")}
      />
      
      <TouchableHighlight
        style = {styles.button}
        onPress = {myAlertFn}
        underlayColor='blue'
        > 

        <Text> First Function </Text>

      </TouchableHighlight>

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
    backgroundColor: 'lightblue',
    width: 75,
    height: 40, 

  },
});
