import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkGreyContainer}>

        <View style={styles.redBox}>
          <Text>1</Text>
        </View>

        <View style={styles.redBox}>
          <Text>2</Text>
        </View>

        <View style={styles.redBox}>
          <Text>3</Text>
        </View>

      </View>

      <View style={styles.darkGreenContainer}>

        <View style={styles.greenRect}>
        </View>

        <View style={styles.greenRect}>
        </View>

        <View style={styles.greenRect}>
        </View>

      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignItems: "center", 

  },

  darkGreyContainer: {
    backgroundColor: "grey",
    width: 300,
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
  }, 

  redBox: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  darkGreenContainer: {
    backgroundColor: "green",
    width: 300,
    height: 550,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  },

  greenRect: {
    backgroundColor: "yellow",
    width: 200,
    height: 50,
  },

});
