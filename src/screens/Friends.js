import { View, Text, Button } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'


const Friends = () => {
    const navigation = useNavigation();
    function demo(){
      navigation.navigate('Home')
    }

  return (
    <View>
      <Text>Friends</Text>
      <Button title='Go to home' onPress={()=>demo()}/>
    </View>
  )
}

export default Friends