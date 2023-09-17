import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Preview = ({route, navigation}) => {
    const {bg, myTextColor, mytext} = route.params;
    // create function pluse and minus button that would increase the font size of the text 

  return (
    <SafeAreaView 
      style={{
        flex: 1, 
        backgroundColor: bg, 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }}>
      <Text style={[styles.txt, {color: myTextColor, fontSize: mytext.trim().length <= 20 ? 170 : 110}]}>{mytext}</Text>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={{
        position: 'absolute',
        top: '7%',
        right: '0%',
        paddingVertical: 5,
        paddingHorizontal: 7,
        backgroundColor: myTextColor,
        
      }}>
        <AntDesign name="arrowleft" size={34} color={bg} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Preview;

const styles = StyleSheet.create({
    txt: {
        fontSize: 100,
        fontFamily: 'Roboto_700',
        paddingHorizontal: 10,
        lineHeight: 170
    }
})