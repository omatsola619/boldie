import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Preview = ({route}) => {
    const {mytext, mycolor} = route.params;

    // create function pluse and minus button that would increase the font size of the text 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: mycolor, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.txt}>{mytext}</Text>
    </SafeAreaView>
  )
}

export default Preview;

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 100,
        fontFamily: 'Zeyada'
    }
})