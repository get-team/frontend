import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native';
import styles from "./splashStyles"

const Splash = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>      
      {/* 최상단 */}
      <StatusBar style='auto' />

      {/* 로고 */}
      <Image 
        source={require('../../assets/images/Logo.png')} 
        style={styles.mainImage}
      />

      {/* 설명 */}
      <View style={styles.mainTextContent}>
        <Text style={styles.mainTile}>우리 동네 환경 구하기,{'\n'}당신도 에코히어로</Text>
        <Text style={styles.mainText}>환경친화적인 가치 있는 소비 플랫폼</Text>
      </View>

      {/* 버튼 */}
      <View style={styles.mainButtonContent}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signin", { screen: 'Signin' })}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>로그인 화면으로</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Signin", { screen: 'Signin' })}
          style={styles.signInButton}
        >
          <Text style={styles.signInButtonText}>에코히어로 시작하기</Text>
        </TouchableOpacity>

        <Text style={styles.lookAround}>둘러볼래요!</Text>
      </View>

    </View>
  )
}

export default Splash;