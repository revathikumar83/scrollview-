import React ,{Component} from 'react';
import { StyleSheet, ScrollView,Image,View,Text } from 'react-native';


export default class App extends Component {
  render(){
  return (
       <View style={styles.fly}>
        
        <ScrollView vertical={true} >

        <View style={styles.image}>
        <Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 350, height: 180,marginRight:20,}}/>
        </View>

     <View style={styles.container}>
       <ScrollView horizontal={true}  directionalLockEnabled={false}  >

    <View>
<Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 90, height: 60, justifyContent:'space-between',alignItems:'center',marginRight:20,}}/>
<Text>butterfly1</Text>
</View> 

<View>
<Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 90, height: 60,justifyContent:'space-between',alignItems:'center',marginRight:20,}}/>
<Text>butterfly2</Text>
</View>

<View>
<Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 90, height: 60,justifyContent:'space-between',alignItems:'center',marginRight:20,}}/>
<Text>butterfly3</Text>
</View>

<View>
<Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 90, height: 60,justifyContent:'space-between',alignItems:'center',marginRight:20,}}/>
<Text>butterfly4</Text>
</View>

<View> 
<Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 80, height: 60,justifyContent:'space-between',alignItems:'center',marginRight:20,}}/>
<Text>butterfly5</Text>
</View>

<View>
<Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 90, height: 60,justifyContent:'space-between',alignItems:'center',marginRight:20,}}/>
<Text>butterfly6</Text>
</View>

<View>
<Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 80, height: 60,justifyContent:'space-between',alignItems:'center',marginRight:20,}}/>
<Text>butterfly7</Text>
</View>

</ScrollView>
  </View>

  <View style={styles.image}>
        <Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 350, height: 180,marginRight:20,}}/>
        </View>

        

        <View style={styles.image}>
        <Image source={{uri:'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'}} style={{width: 350, height: 180,marginRight:20,}}/>
        </View>
</ScrollView>


  </View>
  
  );
}
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'lightblue',
    justifyContent:'center',
    paddingTop:20,
    
    
    
    
    
  },
  fly:{
    flex:1,
    backgroundColor:'white',

  },
  image:{
    
    marginTop:40,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    
    

  },
  position:{
    position:'absolute',
  }
});
