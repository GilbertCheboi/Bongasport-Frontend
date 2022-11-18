import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext}from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import { Avatar, } from '@rneui/base/dist/Avatar';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';


export default function CustomDrawerContent(props) {

    const {logout} = useContext(AuthContext);
     
  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#09899b' }}>
            <View>
                <Avatar rounded size="large" title="MD" activeOpacity={0.7} containerStyle={{backgroundColor: 'white', color:'#62bd69' }}/>
                <Text style={{color: '#fff', fontSize: 18, padding: 10, }}>Maritim Deno</Text>
                <Text style={{color: '#fff', paddingLeft: 10, }}>@soberkd</Text>
            
            </View>
            <View style={{backgroundColor: '#fff', marginTop:20, }}>
            <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
        <View>
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                <TouchableOpacity style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="cog-outline" size={22} />
                    <Text style={{paddingLeft: 10}}>Settings</Text>
                </View>
                 </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="share-variant" size={22} />
                    <Text style={{paddingLeft: 10}}>Tell a Fun</Text>
                </View>
                 </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical: 10}} onPress={()=>{logout()}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="exit-to-app" size={22} />
                    <Text style={{paddingLeft: 10}}>Sign Out</Text>
                </View>
                 </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}