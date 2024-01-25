import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import colors from '../config/colors';

function MyButton({title = "0", onPress, backgroundColor, underlayColor, fontColor}) {

        return <TouchableHighlight
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={onPress}
            underlayColor={underlayColor}>
              
        <Text style={[styles.text, {color: fontColor}]}>{title}</Text>
      
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

export default MyButton;
