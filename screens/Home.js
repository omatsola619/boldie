import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import sally from '../assets/image/press.png'
import {COLORS} from '../utils/color'
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({navigation}) => {
    const [mytext, setMytext] = useState('')
    const [mycolor, setMyColor] = useState('#000000')

    const handleText = (text) => {
        setMytext(text)
    }

    const handleColor = (color) => {
        setMyColor(color)
    }

    const handleSumbit = () => {
        if(mytext !== ''){
            const data = { mycolor, mytext };
            navigation.navigate("Preview", data);
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image source={sally} style={styles.sally} />
        </View>

        {/* form field  */}
        <View style={styles.form}>
          <Text style={styles.intro}>Write for Me Boldie</Text>
          <View style={styles.formField}>
            <TextInput
              placeholder="Input Text"
              style={styles.input}
              value={mytext}
              onChangeText={handleText}
            />
          </View>

          {/* color picker component  */}
          <View style={styles.colorPicker}>
            <View style={styles.colorsArr}>
              {COLORS.map((item, i) => (
                <TouchableOpacity key={i} onPress={() => handleColor(item.code)}>
                  <View
                    style={{
                      backgroundColor: item.code,
                      width: 35,
                      height: 35,
                      aspectRatio: 1,
                      margin: 2,
                      borderRadius: 5,
                      // borderWidth: mycolor === item.code && 3,
                      borderColor: mycolor === item.code && '#5452ed',
                    }}
                  ></View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* submit button  */}
          <TouchableOpacity onPress={handleSumbit} activeOpacity={0.7} style={styles.submit}>
            <Text style={styles.submitTxt}>Preview</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5452ed'
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 16,
    },
    txt: {
        fontFamily: 'Poppins_500'
    },
    sally: {
        width: 300,
        height: 300
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 50
        
    },
    form: {
        marginTop: 30
    },
    intro: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 40,
        fontFamily: 'Zeyada',
        color: 'white'
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        paddingLeft: 15
    },
    formField: {
        marginBottom: 20
    },
    colorPicker: {
        width: '100%',
        height: 140,
        backgroundColor: 'white',
        borderRadius: 8
    },
    colorsArr: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    submit: {
        marginTop: 20,
        width: '100%',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitTxt: {
        fontFamily: 'Poppins_700',
        fontSize: 18,
        color: 'grey'
    }
})