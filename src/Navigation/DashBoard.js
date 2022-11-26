import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Home, Search, Friends} from "../screens/index"

const TopTab = createMaterialTopTabNavigator()

const DashBoard = ()=>{
    return(
       <TopTab.Navigator 
       initialRouteName= "Home"
       tabBar={() => null}>
            <TopTab.Screen name="Search" component={Search}/>
            <TopTab.Screen name="Home" component={Home}/>
            <TopTab.Screen name="Friends" component={Friends}/>
       </TopTab.Navigator>
    )
}

export default DashBoard;
