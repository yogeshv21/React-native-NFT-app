import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native'
import { COLORS, SIZES, assets } from '../constants';
import {useNavigation} from '@react-navigation/native'


function HomeHeader() {
  const navigation = useNavigation();
  function profileHendler(){
    navigation.navigate('Profile')
  }
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
       <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
       }}>
         <Image source={assets.logo} 
          resizeMode='contain'
          style={{
          width: 90,
          height:25
         }}
         />
        <TouchableOpacity onPress={()=>profileHendler()}>
         <View style={{
          height: 45,
          width: 45,
          borderRadius: 100
          }}>
           <Image source={assets.person01} 
           style={{
            height: '100%',
            width: '100%'
           }}
           />
         </View>
        </TouchableOpacity>

       </View>
       <View style={{
        marginVertical : SIZES.font
       }}>

        <Text  style={{
          color: COLORS.gray,
          fontSize: SIZES.medium
        }}>
          Hello, Yogesh 
        </Text>
        <Text  style={{
          color: COLORS.white,
          fontSize: SIZES.extraLarge
        }}>
          Here Today's Feeds
        </Text>
       </View>
    </View>
  )
}

export default HomeHeader;



