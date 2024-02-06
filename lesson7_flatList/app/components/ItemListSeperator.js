import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ItemListSeperator({color=colors.dark}) {
  return (
    <View style={[styles.separator, {backgroundColor: color}]}/>
      
  )
}

const styles = StyleSheet.create({
    separator: {

        borderRadius: 10,
        marginLeft: 10,
        width: '95%',
        height: 5,
    }
})