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

  darkGreyContainer: {
    backgroundColor: "grey",
    width: 200,
    height: 100,
    flexDirection: "row",
  }, 

  redBox: {
    backgroundColor: "red",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  darkGreenContainer: {
    backgroundColor: "dark green",
  },

  greenRect: {
    backgroundColor: "green",
  },

});
