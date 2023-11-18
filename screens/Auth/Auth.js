import React, { Fragment } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Animated 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ellipse from "../../component/Svg/Ellipse";
import ArrowLeft from "../../component/Svg/ArrowLeft";
import styles from "./AuthStyles"

const Auth = () => {

  const navigation = useNavigation();

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
                <TextInput keyboardType="number-pad" maxLength={1} style={styles.authBox} />
                <TextInput keyboardType="number-pad" maxLength={1} style={styles.authBox} />
                <TextInput keyboardType="number-pad" maxLength={1} style={styles.authBox} />
                <TextInput keyboardType="number-pad" maxLength={1} style={styles.authBox} />
                <TextInput keyboardType="number-pad" maxLength={1} style={styles.authBox} />
                <TextInput keyboardType="number-pad" maxLength={1} style={styles.authBox} />
              </View>

              <Text style={styles.authText}>
                코드를 받지 않았어요
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
