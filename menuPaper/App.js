import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuComponent from './app/components/MenuComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuComponent style={styles.menuStyle}></MenuComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  menuStyle: {
  
  }
});
