import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Sizes from '../constants/Sizes'
import {fontStyles} from '../constants/styles'
import { MagnifyingGlassIcon,Cog6ToothIcon,UserIcon } from "react-native-heroicons/solid";
import dayjs from 'dayjs'
const Header = (background) => {
    const props = background
    
    const [date, setDate] = useState(dayjs())
    const [selectedScreen, setSelectedScreen] = useState('1')


    useEffect(()=>{
        const interval = setInterval(() => {
            setDate(dayjs());
        }, 1000*1);
        return () => clearInterval(interval)
    },[])
  return (
    <View style={{backgroundColor:props.background}}>
        <View style={{borderWidth:0,width:Sizes.fullWidth,height:Sizes.fullHeight/12,justifyContent:'center',marginTop:20}}>
            <View style={{borderWidth:0,width:Sizes.fullWidth*0.96,alignSelf:'center',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',width:Sizes.fullWidth*0.2,borderWidth:0  }}>
                    <TouchableOpacity onPress={()=>{setSelectedScreen(`1`)}}><Text style={selectedScreen===`1`?fontStyles.selectedText:fontStyles.nonSelectedText}>Games </Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSelectedScreen(`2`)}}><Text style={selectedScreen===`2`?fontStyles.selectedText:fontStyles.nonSelectedText}>Media</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',width:Sizes.fullWidth*0.23,borderWidth:0  }}>
                    <TouchableOpacity> <MagnifyingGlassIcon size={30} color={'#fff'} /></TouchableOpacity>
                    <TouchableOpacity> <Cog6ToothIcon size={30} color={'#fff'} /></TouchableOpacity>
                    <TouchableOpacity> <UserIcon size={30} color={'#fff'} /></TouchableOpacity>
                    <Text style={fontStyles.nonSelectedText}>{date.format("hh:mm A")}</Text>
                </View>

            </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})