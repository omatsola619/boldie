import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import sally from "../assets/image/press.png";
import { COLORS } from "../utils/color";
import { LinearGradient } from "expo-linear-gradient";
import BG from "../assets/image/grad3.png";
import { AntDesign } from '@expo/vector-icons';


const Home = ({ navigation }) => {
  const [mytext, setMytext] = useState("");
  const [mycolor, setMyColor] = useState("#000000");
  const majorColor = "#EC298C"

  const handleText = (text) => {
    setMytext(text);
  };

  const handleColor = (color) => {
    setMyColor(color);
  };

  const handleSumbit = () => {
    if (mytext !== "") {
      const data = { mycolor, mytext };
      navigation.navigate("Preview", data);
    }
  };

  return (
    <ImageBackground
      source={BG}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wrapper}>
          {/* form field  */}
          <View style={styles.form}>
            <Text style={styles.intro}>Write for Me <Text style={{color: majorColor}}>Boldie</Text> </Text>
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
                  <TouchableOpacity
                    key={i}
                    onPress={() => handleColor(item.code)}
                  >
                    <View
                      style={{
                        backgroundColor: item.code,
                        width: 35,
                        height: 35,
                        aspectRatio: 1,
                        margin: 2,
                        borderRadius: 5,
                        // borderWidth: mycolor === item.code && 3,
                        borderColor: mycolor === item.code && "#5452ed",
                      }}
                    ></View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* submit button  */}
            <View style={styles.submitWrapper}>
              <TouchableOpacity
              onPress={handleSumbit}
              activeOpacity={0.8}
              style={styles.submit}

            >
              <AntDesign name="arrowright" size={25} color={majorColor} />
            </TouchableOpacity>
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#5452ed'
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  txt: {
    fontFamily: "Poppins_500",
  },
  form: {
    marginTop: 30,
  },
  intro: {
    textAlign: "center",
    marginTop: 80,
    marginBottom: 30,
    fontSize: 40,
    fontFamily: "Roboto_700",
    color: "white",
  },
  input: {
    width: "100%",
    height: 70,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 25
  },
  formField: {
    marginBottom: 20,
  },
  colorPicker: {
    width: "100%",
    height: 250,
    marginTop: 40,
    backgroundColor: "white",
    borderRadius: 8,
  },
  colorsArr: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  submitWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
  submit: {
    width: 70,
    backgroundColor: "white",
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  submitTxt: {
    fontFamily: "Poppins_700",
    fontSize: 18,
    color: "grey",
  },
});
