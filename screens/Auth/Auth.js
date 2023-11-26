import React, { Fragment, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ellipse from "../../component/Svg/Ellipse";
import ArrowLeft from "../../component/Svg/ArrowLeft";
import styles from "./AuthStyles"

const Auth = () => {

  const navigation = useNavigation();
  const inputRefs = Array(6).fill(0).map((_, i) => useRef(null));

  const [authValues, setAuthValues] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(300);

  const handleInputChange = (index, value) => {
    const newAuthValues = [...authValues];
    newAuthValues[index] = value;
    setAuthValues(newAuthValues);

    if (index < 5 && value !== "") {
      inputRefs[index + 1].current.focus();
    }

    if (index > 0 && value === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerArea}>
            {/* 최상단 */}
            <StatusBar style='auto'/>

            {/* statusbar */}
            <View style={styles.statusbar} />

            {/* 헤더 부분 */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.button} onPress={(props) => { navigation.goBack(null) }}> 
                <Ellipse />
                <ArrowLeft/>
              </TouchableOpacity>
            </View>

            <View style={styles.loginFormContainer}>
              <View style={styles.loginTitle}>
                <View style={styles.spacing} />
                <Text style={styles.loginTitleText}>방금 SMS를 보냈어요</Text>
                <View style={styles.loginTitleContentView}>
                  <Text style={styles.loginTitleContent}>
                    로그인하려면 보내드린 보안 코드를 입력하세요.
                  </Text>
                </View>
              </View>

              <View style={styles.authContainer}>
                {authValues.map((value, index) => (
                <TextInput
                key={index}
                keyboardType="number-pad"
                maxLength={1}
                style={[
                  styles.authBox,
                  {
                    borderColor: value ? '#D84F00' : '#5E5E5E',
                  },
                ]}
                value={value}
                onChangeText={(text) => handleInputChange(index, text)}
                ref={inputRefs[index]}
                caretHidden={true}
              />
              ))}
              </View>

              <Text style={styles.authText}>
                코드를 받지 않았어요 ({formatTime(countdown)})
              </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.removeListener
                  navigation.navigate("Home", { screen: 'Home' })
                }}
                style={styles.loginButton}
                >
                <Text style={styles.loginButtonText}>다음</Text>
              </TouchableOpacity> 
            </View>


          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Fragment>
  )
}

export default Auth;
