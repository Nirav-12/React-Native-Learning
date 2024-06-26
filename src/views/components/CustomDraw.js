import React from 'react';
import { View , Text , ImageBackground , Image , TouchableOpacity } from 'react-native';
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';


const CustomDraw = (props) => {
    return(
        <View style={{flex: 1,}}>
       <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground 
        source={require('../../assets/bgimg.jpg')}
        style={{padding:20}}
        >
            <Image source={require('../../assets/propic.jpg')}
            style={{height:80 , width: 80, borderRadius:40, marginBottom: 10 }}/>
            <Text style={{color: '#fff', fontSize:18}}>Malvin Buezo</Text>
            {/* <Icon name='coins' size={14} color="#fff"/> */}
        </ImageBackground>
        <View style={{flex:1, backgroundColor:'#fff', paddingTop:10,}}>
        <DrawerItemList {...props}/>
        </View>
       </DrawerContentScrollView>
       <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
            <View style={{flexDirection:'row' , alignItems: 'center'}}>
            <Icon name='share-social-outline' size={22} />
            <Text style={{fontSize:15, marginLeft:5}}>Share</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
            <View style={{flexDirection:'row' , alignItems: 'center'}}>
            <Icon name='exit-outline' size={22} />
            <Text style={{fontSize:15, marginLeft:5}}>LogOut</Text>
            </View>
        </TouchableOpacity>
       </View>
       </View>
    )
}
export default CustomDraw;