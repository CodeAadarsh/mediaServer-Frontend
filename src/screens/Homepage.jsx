import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Sizes from '../constants/Sizes'
import {fontStyles,constantStyles,ImagesData} from '../constants/styles'
import MediaCarousel from '../components/MediaCarousel'
import ExploreNews from '../components/ExploreNews'
import { Hoverable } from 'react-native-hoverable';

const Homepage = () => {
  const [activeItem,setActiveItem] = React.useState({})
  const [activeNewsItem,setActiveNewsItem] = React.useState({})
    
  const handleItem = (item) => {
    setActiveItem(item)
  }
  
  const HandleNews = (item) => {
    setActiveNewsItem(item)
  }
  

  return (
    <View style={styles.child}>
     <ImageBackground source={activeItem?activeItem?.backgroundImage:ImagesData.exploreBg} style={styles.imageBackground}>
        {/* Dark overlay */}
        <View style={styles.overlay} />
    <View style={{width:Sizes.fullWidth,height:Sizes.fullHeight}}>
      <Header background={'rgba(35,130,160,0)'}/>
      <View style={{borderWidth:0,width:Sizes.fullWidth,height:Sizes.fullHeight/3.5,padding:30,paddingLeft:90}}>
        <MediaCarousel onselectItem={handleItem}/>
      </View>
      {/* Main Body */}
      {
        activeItem?.name==='explore'?
        (
          <ExploreNews onselectItem={HandleNews}/>
        ):
        (
          null
        )
      }
      
    </View>
      </ImageBackground>
    </View>

  )
}

export default Homepage

const styles = StyleSheet.create({
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity:'0.5'
    // Set additional styles for the ImageBackground if needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // <-- Color you want to use as overlay
  },
})