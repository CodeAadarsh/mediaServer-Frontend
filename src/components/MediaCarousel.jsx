import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Sizes from '../constants/Sizes'
import {fontStyles,constantStyles,ImagesData} from '../constants/styles'
import Hoverable from 'react-native-hoverable'

const MediaCarousel = ({onselectItem}) => {
    let hardCodedData = [
        {name:'Store',image:ImagesData.store,id:1,backgroundImage:ImagesData.storeBg},
        {name:'explore',image:ImagesData.explore,id:2,backgroundImage:ImagesData.exploreBg},
    ]
    let data = [
        {name:'spiderman2',image:ImagesData.spiderman2,id:3,backgroundImage:ImagesData.spiderman2Bg},
        {name:'godofwar5',image:ImagesData.godOfWar5,id:4,backgroundImage:ImagesData.godOfWar5Bg},
        {name:'callofduty',image:ImagesData.callOfDuty,id:5,backgroundImage:ImagesData.callOfDutyBg},
    ]
    const [activeIndex,setActiveIndex] = React.useState(2)
    const [activeItem,setActiveItem] = React.useState({...hardCodedData[1]})
    
    React.useEffect(()=>{
        onselectItem(activeItem)
    }
    ,[activeItem])
  return (
    <View style={{borderWidth:0,width:`100%`,height:`100%`,justifyContent:'flex-start',alignItems:'flex-start',padding:10,flexDirection:'row'}}>
      
        {
            hardCodedData.map((item,index)=>{
                return(
                    <Hoverable
                    onMouseEnter={() => [setActiveIndex(item.id),setActiveItem(item)]}
            >
                {({ hovered }) => (
                    <TouchableOpacity onPress={()=>{ setActiveIndex(item.id),setActiveItem(item)}} style={activeIndex===item.id?constantStyles.boxExpand:constantStyles.boxNormal}>
                        <Image source={item.image} style={{width:`50%`,height:`50%`,position:'absolute',borderRadius:15,resizeMode:'center',}}/>
                    </TouchableOpacity>
                    )}
                    </Hoverable>
                )
            })
        }
        {
            data.map((item,index)=>{
                return(
                    <Hoverable
                onMouseEnter={() => [setActiveIndex(item.id),setActiveItem(item)]}
               
            >
                {({ hovered }) => (
                    <TouchableOpacity onPress={()=>{ setActiveIndex(item.id),setActiveItem(item)}} style={activeIndex===item.id?constantStyles.boxExpand:constantStyles.boxNormal}>
                        <Image source={item.image} style={{width:`100%`,height:`100%`,position:'absolute',borderRadius:15,resizeMode:'cover',}}/>
                    </TouchableOpacity>)}
                    </Hoverable>
                )
            })
        }



</View>
  )
}

export default MediaCarousel

const styles = StyleSheet.create({})