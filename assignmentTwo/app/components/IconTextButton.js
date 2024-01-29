import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../config/colors';

function IconTextButton({title = "school", size, color="blue", name = "graduation-cap"}) {

        return <TouchableHighlight
                    style={[styles.button, {color: {color}}]}
                >

                <View style={[styles.view, {borderColor: color}]}>
                    <Entypo name = {name} size={size} color={color}/>
                    <Text style={{color: color}}>{title}</Text>
                </View>
              
      
      </TouchableHighlight>

}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50, 
        borderRadius: 25,
        justifyContent: "center",
        alignContent: "center",
      },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    view: {
        width: 125,
        height: 50,
        flexDirection: "row",
        rowGap: 10,
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
    },
})

export default IconTextButton;
