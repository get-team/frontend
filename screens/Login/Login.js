import React, { Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ellipse from "../../component/Svg/Ellipse"
import ArrowLeft from "../../component/Svg/ArrowLeft"
import AhevronDown from "../../component/Svg/AhevronDown"
import styles from "./LoginStyles"

const Login = () => {

  const navigation = useNavigation();

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerArea}>      
          {/* 최상단 */}
          <StatusBar style='auto'/>

          {/* statusbar */}
          <View style={styles.statusbar}>
          </View>

          {/* 헤더 부분 */}
          <View style={styles.header}>
            <View style={styles.button}> 
              <Ellipse />
              <ArrowLeft/>
            </View>
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

            <View style={styles.loginNumberContainer}>
              
            </View>
          </View>

          {/* 로그인 버튼 */}
          <View style={styles.loginButtonContainer}>

          </View>
          
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

export default Login;