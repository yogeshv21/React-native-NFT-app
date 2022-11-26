import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {Home, Profile, Details, Friends} from "../screens/index"

import DashBoard from './DashBoard';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    backGround: 'transparent'
  }
}

const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}
       initialRouteName='Dashboard'>
        <Stack.Screen name="Dashboard" component={DashBoard}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation