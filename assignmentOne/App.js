import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from "./app/config/colors"

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.outerHeaderTextContainer}>
        <View style={styles.innerHeaderTextContainer}>
          <Text style={{fontWeight: 'bold', fontSize: 29}}>React Native Assign 1</Text>
        </View>
      </View>

      <View style={styles.mainViewContainer}>
        <View style={styles.grayBox}></View>
        <View style={styles.grayBox}></View>
        <View style={styles.grayBox}></View>
      </View>

      <View style={styles.blueOutline}>
          <View style={styles.blueBox}></View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
  }
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.lightGrey,

    },
  
    outerHeaderTextContainer: {
      backgroundColor: colors.primary,
      width: 350,
      height: 125,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      columnGap: 20,
      margin: 50,
      marginBottom: 20,
      paddingBottom: 20,
    }, 
  
    innerHeaderTextContainer: {
      backgroundColor: colors.secondary,
      height: 90,
      width: 300,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
    },
  
    mainViewContainer: {
      backgroundColor: colors.secondary,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-evenly",
      rowGap: 100,
      width: 350,
      height: 600,

    },
  
    grayBox: {
      backgroundColor: colors.darkGrey,
      width: 100,
      height: 60,
      margin: 10,
      borderRadius: 10,
    },

    blueOutline: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.darkGrey,
      top: -300,
      left: 100,
      width: 110,
      height: 275,
    },
    
    blueBox: {
      backgroundColor: colors.teal,
      width: 100,
      height: 265,
    },
  
  });

  
