import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import colors from "./app/config/colors";

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
      <Image
          source={require("./assets/images/androidImage.png")}
          ></Image>
          <Image
          style={{width: 300, height: 200}}
          source={{uri: "www.google.com/search?sca_esv=601135296&rlz=1C1GCEU_enUS1093US1093&q=fremd&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj7oLegyvaDAxWNk4kEHSWtDzMQ0pQJegQICxAB&biw=1920&bih=911&dpr=1&safe=active&ssui=on#imgrc=FsayZOcFjzLNlM"}}
          ></Image>
      <Button 
        title = "First Button"
        onPress={() => console.log("pressed button")}
      />
      
      <TouchableHighlight
        style = {styles.button}
        onPress = {myAlertFn}
        underlayColor={colors.teal}
        backgroundColor={colors.lightGrey}
        >

        <Text> First Function </Text>

      </TouchableHighlight>

      <TouchableHighlight
        style = {styles.button}
        onPress = {myAlertFn}
        underlayColor={colors.lightGrey}
        backgroundColor={colors.lightGrey}
        >

        <Text> Second function!!! </Text>

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
