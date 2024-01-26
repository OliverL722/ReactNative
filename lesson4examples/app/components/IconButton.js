import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import colors from '../config/colors';

function IconButton({title = "0", onPress, backgroundColor, underlayColor, fontColor, name = "reddit"}) {

        return <TouchableHighlight

            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={onPress}
            underlayColor={underlayColor}>
              
              <Fontisto name = {name} size={24} color="black" />
      
      </TouchableHighlight>

}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50, 
        borderRadius: 25,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
      },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default IconButton;
