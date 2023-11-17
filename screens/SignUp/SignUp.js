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
import DropDown from "../../component/DropDown/DropDown";
import Ellipse from "../../component/Svg/Ellipse";
import ArrowLeft from "../../component/Svg/ArrowLeft";
import styles from "./SignUpStyles"

const SignUp = () => {

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

            {/* 로그인 폼 */}
            <View style={styles.loginFormContainer}>
              <View style={styles.loginTitle}>
                <View style={styles.spacing} />
                <Text style={styles.loginTitleText}>휴대폰 번호 인증</Text>
                <View style={styles.loginTitleContentView}>
                  <Text style={styles.loginTitleContent}>
                    이 휴대폰 번호로 가입해요. {'\n'}번호는 안전하게 보관되며 어디에도 공개되지 않아요.
                  </Text>
                </View>
              </View>

              <View style={styles.loginContent}>
                <View style={styles.phonePrefix}>
                  <DropDown/>
                </View>
                  <View style={styles.phoneNumber}>
                    <TextInput 
                      keyboardType="number-pad"
                      maxLength={8}
                    />
                  </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.removeListener
                  navigation.navigate("Auth", { screen: 'Auth' })
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

export default SignUp;
