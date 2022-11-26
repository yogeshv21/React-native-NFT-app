import React, { useState } from "react";

import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native"
import { COLORS, NFTData} from '../constants'
import SearchHeader from "../components/SearchHeader";
import FocusedStatusBar from "../components/FocusedStatusBar";
import NFTcards from "../components/NFTcards";
 
const Search = ()=>{

    const [nftData, setNftData] = useState(NFTData);
    const handleSearch = (value)=>{
        if(!value.length)return setNftData(NFTData)
 
        const filterData = NFTData.filter((item)=>{
          return(
             item.name.toLowerCase().includes(value.toLowerCase())
          )
        })
 
        if(filterData.length){
         setNftData(filterData)
        }else{
         setNftData(NFTData)
        }
     }
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
            ListHeaderComponent={<SearchHeader onSearch={handleSearch}/>}
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

export default Search;

const Styles = StyleSheet.create({
    container: {
        flex: 1
    }
})