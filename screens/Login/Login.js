import React, { Fragment } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDown from "../../component/DropDown/DropDown";
import Ellipse from "../../component/Svg/Ellipse";
import ArrowLeft from "../../component/Svg/ArrowLeft";
import Kakao from "../../component/Svg/Kakao";
import Naver from "../../component/Svg/Naver";
import Google from "../../component/Svg/Google";
import Apple from "../../component/Svg/Apple";
import styles from "./LoginStyles.js";

const Login = () => {
  
  const navigation = useNavigation();
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerArea}>      
            {/* 최상단 */}
            <StatusBar style='auto'/>

            {/* statusbar */}
            <View style={styles.statusbar}>
            </View>

            {/* 헤더 부분 */}
            <View style={styles.header}>
              <TouchableOpacity style={styles.button}> 
                <Ellipse />
                <ArrowLeft/>
              </TouchableOpacity>
            </View>

            {/* 로그인 폼 */}
            <View style={styles.loginFormContainer}>
              <View style={styles.loginTitle}>
                <View style={styles.spacing} />
                <Text style={styles.loginTitleText}>로그인</Text>
                <View style={styles.loginTitleContentView}>
                  <Text style={styles.loginTitleContent}>
                    계정에 로그인하려면 귀하의 휴대폰 번호를 입력하세요.
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

              <View style={styles.gubun}>
                <View style={styles.line} />
                <Text style={styles.lineText}>또는</Text>
                <View style={styles.line} />
              </View>

              <View style={styles.socialContent}>
                <TouchableOpacity style={styles.kakaoButton}>
                  <Kakao />
                  <Text style={styles.kakaoText}>카카오로 계속하기</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naverButton}>
                  <Naver />
                  <Text style={styles.naverText}>네이버로 계속하기</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.totalButton}>
                <TouchableOpacity style={styles.halfButton}>
                  <Google/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.halfButton}>
                  <Apple/>
                </TouchableOpacity>
              </View>

            </View>

            {/* 로그인 버튼 */}
            <View style={styles.footer}>
              <View style={styles.footerLine} />
              <TouchableOpacity
                onPress={() => {
                  navigation.removeListener
                  navigation.navigate("Login", { screen: 'Login' })
                }}
                style={styles.loginButton}
              >
                <Text style={styles.loginButtonText}>로그인</Text>
              </TouchableOpacity>
              <View style={styles.footerText}>
                <Text>
                  계정이 없으신가요?
                </Text>
                <TouchableOpacity>
                  <Text style={styles.signInText}>
                    에코히어로 가입하기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

    </Fragment>
  )
}

export default Login;