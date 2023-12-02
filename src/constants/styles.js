import Sizes from "./Sizes"

const fontStyles = {
    selectedText :{
        fontWeight:'600',fontSize:36,color:'#fff'
    },
    nonSelectedText:{
        fontWeight: '300',fontSize:36,color:'#BFBFBF'
    },
    TextSmallWhite:{
        fontWeight:'200',fontSize:18,color:'#fff'
    },
    BoldTextLargeWhite:{
        fontWeight:'600',fontSize:30,color:'#fff'
    },
    BoldTextSmallBlack:{
        fontWeight:'600',fontSize:30,color:'#000'
    },

    
    
}
const constantStyles = {
    boxExpand: {borderWidth:5,width:Sizes.fullWidth/10,height:Sizes.fullWidth/10,borderRadius:20,marginLeft:10,alignItems:'center',justifyContent:'center',position:'relative',backgroundColor:`rgba(0,0,0,0.6)`,borderColor:`rgba(255,255,255,0.8)`,},
    boxNormal: {borderWidth:0,width:Sizes.fullWidth/17,height:Sizes.fullWidth/17,borderRadius:20,marginLeft:10,alignItems:'center',justifyContent:'center',position:'relative',backgroundColor:`rgba(0,0,0,0.6)`},


    
    
}
const ImagesData = {
    store:require('../../assets/store.png'),
    storeBg:require('../../assets/storeBg.jpg'),
    explore:require('../../assets/explore.png'),
    spiderman2:require('../../assets/spiderman2ICO.jpg'),
    godOfWar5:require('../../assets/gow5ICO.png'),
    callOfDuty:require('../../assets/codICO.png'),
    spiderman2Bg:require('../../assets/spiderman2BG.jpg'),
    godOfWar5Bg:require('../../assets/gow5Bg.jpg'),
    callOfDutyBg:require('../../assets/codBg.jpg'),
    exploreBg:require('../../assets/exploreBg.jpg'),
    fortniteBg:require('../../assets/fortniteBg.jpeg'),
    cyberpunk2077Bg:require('../../assets/cyberpunk2077Bg.jpg'),
    gtaVbg:require('../../assets/gtaVbg.jpg'),
    newspaper:require('../../assets/Newspaper.png'),



    
    
}

export  {fontStyles,constantStyles,ImagesData}