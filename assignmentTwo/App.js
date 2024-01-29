import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IconTextButton from './app/components/IconTextButton';

export default function App() {
  return (
    <View style={styles.container}>
      <IconTextButton
       title="FHS"
       name="graduation-cap"
       size={24}
       color="green"
       />

      <IconTextButton
       title="PHS"
       name="graduation-cap"
       size={24}
       color="red"
       />

      <IconTextButton
       title="HEHS"
       name="graduation-cap"
       size={24}
       color="orange"
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
    rowGap: 10,
  },
});
