import {
  Dimensions,
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
import { COLORS } from "../utils/color";
import BG from "../assets/image/grad1.png";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const [mytext, setMytext] = useState("");
  const [bg, setBg] = useState("#000");
  const [myTextColor, setMytextColor] = useState("");
  const majorColor = "#EC298C";
  const [textError, setTextError] = useState("");

  const handleText = (text) => {
    setMytext(text);
  };

  const checkTextField = () => {
    let isTextValid = true;

    if (mytext.trim() === "") {
      setTextError("This field is required");
      isTextValid = false;
    } else setTextError('')

    return isTextValid;
  };

  const handleSelectTheme = ({ textColor, bg }) => {
    setMytextColor(textColor);
    setBg(bg);
  };

  const handleSumbit = () => {
    if (checkTextField()) {
      setTextError("");
      const data = { bg, myTextColor, mytext };
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
            <Text style={styles.intro}>
              Write for Me{" "}
              <Text style={{ color: "rgba(255, 255, 255, 0.3)" }}>Boldie</Text>
            </Text>
            <View style={styles.formField}>
              <TextInput
                placeholder="Write here..."
                style={styles.input}
                value={mytext}
                onChangeText={handleText}
                maxLength={40}
              />
              {textError ? (
                <Text style={{ 
                        color: 'red', 
                        marginTop: 3,
                        fontFamily: 'Roboto_400'
                    }}>{textError}</Text>
              ) : (
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    marginTop: 3,
                    fontFamily: 'Roboto_400'
                  }}
                >
                  maximum of 40 characters
                </Text>
              )}
            </View>

            {/* color picker component  */}
            <View style={styles.colorPicker}>
              <View style={styles.colorsArr}>
                {COLORS.map((item, i) => (
                  <TouchableOpacity
                    key={i}
                    activeOpacity={0.8}
                    onPress={() => {
                      setMytextColor(item.text);
                      setBg(item.bg);
                    }}
                  >
                    <View
                      style={{
                        width: (screenWidth - 57) / 2,
                        height: 35,
                        backgroundColor: item.bg,
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        position: "relative",
                      }}
                    >
                      {bg === item.bg && (
                        <AntDesign
                          name="checkcircle"
                          size={20}
                          color="white"
                          style={{
                            position: "absolute",
                            left: "5%",
                            bottom: "20%",
                          }}
                        />
                      )}
                      <Text
                        style={{
                          padding: 5,
                          fontSize: 14,
                          color: item.text,
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
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
        <Text
          style={{
            position: "absolute",
            top: "5%",
            right: "4%",
            fontFamily: "Zeyada",
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          V.2 by Omash
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#5452ed',
    position: "relative",
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
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 20,
    fontFamily: "Roboto_400",
  },
  formField: {
    marginBottom: 20,
  },
  colorPicker: {
    flex: 1,
    width: "100%",
    height: 255,
    marginTop: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
  },
  colorsArr: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 5,
  },
  submitWrapper: {
    marginTop: 40,
    alignItems: "center",
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
