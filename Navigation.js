import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Splash from './screens/Splash/Splash';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Auth from './screens/Auth/Auth';
import SignIn from './screens/signin';
import KaKaoLogin from './screens/kakaoLogin';
//import Home from './screens/home';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';

const TopTab = createMaterialTopTabNavigator();

function Top1() {
  return (
    <TopTab.Navigator screenOptions={{ tabBarActiveTintColor: 'purple' }}>
      <TopTab.Screen name="Top1 Screen1" component={Screen1} />
      <TopTab.Screen name="Top1 Screen2" component={Screen2} />
    </TopTab.Navigator>
  )
}

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
      <Stack.Screen name="KaKaoLogin" component={KaKaoLogin} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={BottomStack} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function SettingScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Screen4"
    >
      <Stack.Screen name="Screen4" component={Screen4} options={{headerShown: false}} />
      <Stack.Screen name="Screen5" component={Screen5} options={{headerShown: false}} />
      <Stack.Screen name="Screen6" component={Screen6} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}


const BottomTab = createBottomTabNavigator();

function BottomStack() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown : false
      }}
    >
      <BottomTab.Screen
        name="Top1"
        component={Top1}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bottom"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat-alert" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen>
        <BottomStack />
      </StackScreen>
    </NavigationContainer>
  );
}

export default Navigation;