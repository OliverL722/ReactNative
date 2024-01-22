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

      <StatusBar style="auto" />
    </View>
  );
  }
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',

    },
  
    outerHeaderTextContainer: {
      backgroundColor: colors.primary,
      width: 350,
      height: 150,
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
      height: 100,
      width: 300,
      justifyContent: "center",
      alignItems: "center",
    },
  
    mainViewContainer: {
      backgroundColor: colors.secondary,
      width: 350,
      height: 600,
    },
  
    grayBox: {
      backgroundColor: colors.darkGrey,
      alignContent: "center",
      justifyContent: "space-evenly",
      width: 50,
      height: 50,
    },
  
  });

  
