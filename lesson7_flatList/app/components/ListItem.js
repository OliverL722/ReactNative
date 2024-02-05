import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Touchable, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import Constants from 'expo-constants';


function ListItem({name, age, favActivity, onPress, renderRightActions}) {
  return(
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions} >

        <TouchableHighlight onPress={onPress}>
          <View style={styles.itemRowContainer}>
              <Text style={styles.text}>{name}, {age} </Text>
              <Text style={{color:colors.secondary}}>{favActivity}</Text>
          </View>
        </TouchableHighlight>

      </Swipeable>  
    </GestureHandlerRootView>

  );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.verylight,
        padding: 8,
      },
    
      itemRowContainer:{
        backgroundColor: colors.light,
        padding: 5,
      },
     
      text: {
        color: colors.primary,
        fontSize: 20,
      }

});

export default ListItem; 
