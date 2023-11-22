import React, { Fragment } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Animated 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../component/Svg/Logo.js"
import styles from "./SplashStyles"

const Splash = () => {

  const navigation = useNavigation();

  return (
    // 추후 묶기 위한 태그
    <Fragment>
      <SafeAreaView style={styles.container}>
        {/* 최상단 시계 및 색깔 보존 */}
        <StatusBar style='auto' />

        <View style={styles.containerArea}>      
          {/* 로고 */}
          <Logo style={styles.mainImage}/>

          {/* 설명 */}
          <View style={styles.mainTextContent}>
            <Text style={styles.mainTile}>우리 동네 환경 구하기,{'\n'}당신도 에코히어로</Text>
            <Text style={styles.mainText}>환경친화적인 가치 있는 소비 플랫폼</Text>
          </View>

          {/* 버튼 */}
          <View style={styles.mainButtonContent}>
            <TouchableOpacity
              onPress={() => {
                navigation.removeListener
                navigation.navigate("Login", { screen: 'Login' })
              }}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.removeListener
                navigation.navigate("SignUp", { screen: 'SignUp' })
              }}
              style={styles.signInButton}
            >
              <Text style={styles.signInButtonText}>에코히어로 시작하기</Text>
            </TouchableOpacity>

            <Text style={styles.lookAround}>둘러볼래요!</Text>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  )
}

export default Splash;