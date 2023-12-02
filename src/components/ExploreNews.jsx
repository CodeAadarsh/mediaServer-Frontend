import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Sizes from '../constants/Sizes'
import {fontStyles,constantStyles,ImagesData} from '../constants/styles'
import { Hoverable } from 'react-native-hoverable';

const ExploreNews = ({onselectItem}) => {
    let data = [
        // {id:0,name:'Home',backgroundImage:ImagesData.callOfDutyBg,time:'4 hours ago',news:'The Spider-Man(No Way Home) and MJ (No Way Home) Outfits will be in the item Shop starting December 16...',source:'Official news from Fortnite',heading:`No Way Home Spider-Man &
        // MJ`},
        {id:1,name:'Call of Duty',backgroundImage:ImagesData.callOfDutyBg,time:'4 hours ago',news:'The Spider-Man(No Way Home) and MJ (No Way Home) Outfits will be in the item Shop starting December 16...',source:'Official news from Fortnite',heading:`No Way Home Spider-Man &
        MJ`},
        {id:2,name:'God of War 5',backgroundImage:ImagesData.godOfWar5Bg,time:'4 hours ago',news:'The Spider-Man(No Way Home) and MJ (No Way Home) Outfits will be in the item Shop starting December 16...',source:'Official news from Fortnite',heading:`No Way Home Spider-Man &
        MJ`},
        {id:3,name:'Fortnite',backgroundImage:ImagesData.fortniteBg,time:'4 hours ago',news:'The Spider-Man(No Way Home) and MJ (No Way Home) Outfits will be in the item Shop starting December 16...',source:'Official news from Fortnite',heading:`No Way Home Spider-Man &
        MJ`},
        {id:4,name:'Cyberpunk 2077',backgroundImage:ImagesData.cyberpunk2077Bg,time:'4 hours ago',news:'The Spider-Man(No Way Home) and MJ (No Way Home) Outfits will be in the item Shop starting December 16...',source:'Official news from Fortnite',heading:`No Way Home Spider-Man &
        MJ`},
    ]

    const [activeIndex,setActiveIndex] = React.useState(2)
    const [activeItem,setActiveItem] = React.useState({...data[0]})

    React.useEffect(()=>{
      onselectItem(activeItem)
  }
    
  ,[activeItem])

  return (
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',borderWidth:0,margin:30,paddingLeft:60}}>
    <Text style={{...fontStyles.TextSmallWhite,fontSize:24,color:'white',textAlign:'center'}}>{activeItem?.source} | {activeItem?.time}</Text>
    <Text style={{...fontStyles.nonSelectedText,fontSize:50,color:'white',textAlign:'left',marginTop:0}}>{activeItem?.heading}</Text>
    <Text style={{...fontStyles.TextSmallWhite,fontSize:28,color:'white',textAlign:'left',marginTop:0,width:Sizes.fullWidth/2}}>T{activeItem?.news}</Text>
  
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:20,borderWidth:0,width:Sizes.fullWidth*0.9,height:Sizes.fullHeight/4,alignSelf:'center'}}>

  {
    
    data.map((item,index) => {
        return(
          <Hoverable
                    onMouseEnter={() => [setActiveIndex(item.id),setActiveItem(item)]}
                   
            >
                {({ hovered }) => (
            <TouchableOpacity  onPress={()=>{ setActiveIndex(item.id),setActiveItem(item)}} style={{justifyContent:'center',alignItems:'center',width:Sizes.fullWidth/6,paddingLeft:20}}>
              <Image source={item.backgroundImage} style={{width:"100%",height:Sizes.fullHeight/5,resizeMode:'contain',borderWidth:0,position:'relative'}}/>
              <View style={{position:'absolute',top:25,left:30,flexDirection:'row',backgroundColor:'rgba(0,0,0,0.6)',padding:5,alignItems:'center'}}>
                <Image source={ImagesData.newspaper} style={{width:20,height:20,resizeMode:'contain',borderWidth:0}}/>
                <Text style={{...fontStyles.TextSmallWhite,fontSize:18,color:'white',textAlign:'center',}}> Your News</Text> 
              </View>
            </TouchableOpacity>)}
      </Hoverable>  
        )
    
        })  }
    
    
    </ScrollView>
    </View>
    )
}

export default ExploreNews

const styles = StyleSheet.create({})