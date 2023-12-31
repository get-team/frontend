import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const KaKaoLogin = () => {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>카카오 화면</Text>
      <TouchableOpacity
          onPress={() => navigation.navigate("SignUp", { screen: 'SignUp' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>회원가입 화면으로</Text>
        </TouchableOpacity>
    </View>
  )
}

export default KaKaoLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
  },
  NextBottom: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "20%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: 'white',
    textAlign: "center",
  }
})