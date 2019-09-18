import React ,{Component} from 'react';
import { StyleSheet, Text,Image,View } from 'react-native';
import{Card} from 'react-native-element';

export default class Dog extends Component {
     
    render(){
    return (
        <Card title="CARD WITH DIVIDER">
        
         
            return (
              <View style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg' }}
                />
                <Text style={styles.name}>revathishivu</Text>
              </View>
            );
          
        
      </Card>
                  
    );
    }  
}

const styles = StyleSheet.create({
    user:{
        backgroundColor:'grey',
        marginLeft:10,
        marginRight:10,
    },
    name:{
        fontSize:20,
        color:'red',
    },
    image:{
        height:50,
        width:40,

    }
})