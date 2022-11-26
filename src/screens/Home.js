import React, { useState } from "react";

import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native"
import { COLORS, NFTData} from '../constants'
import HomeHeader from "../components/HomeHeader";
import FocusedStatusBar from "../components/FocusedStatusBar";
import NFTcards from "../components/NFTcards";
 
const Home = ()=>{

    const [nftData, setNftData] = useState(NFTData);

    return(
     <SafeAreaView style={Styles.container}>
       <FocusedStatusBar backgroundColor={COLORS.primary}/>
       <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
            <FlatList
            data={nftData}
            renderItem={({item})=><NFTcards data={item}/>}
            keyExtractor={(item)=>item.id}
            showsVerticalScrollIndicator= {false}
            ListHeaderComponent={<HomeHeader />}
            />
        </View>
       </View>
       <View style={{
        position: 'absolute',
        top: 0,
        bottom:0,
        left: 0,
        right: 0,
        zIndex: -1
       }}>
        <View style={{
            height: 300,
            backgroundColor: COLORS.primary
        }}/>
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white
        }}/>
       </View>
     </SafeAreaView>
    )
};

export default Home;

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})