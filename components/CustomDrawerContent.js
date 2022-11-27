import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext,useEffect, useState}from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import { Avatar, } from '@rneui/base/dist/Avatar';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../context/AuthContext';


export default function CustomDrawerContent(props) {

    const {logout} = useContext(AuthContext);
    const [data, setData] = useState([])
    const {userToken} = useContext(AuthContext)
    const {userInfo} = useContext(AuthContext);
    const username = userInfo.user.username
  const loadData = () => {
    fetch(`http://gilscore.azurewebsites.net/api/profiles/${username}/`,{
     method: 'GET',
     headers:{
      'Authorization': 'Token ' + userToken
     }
    })

    .then(resp => resp.json())
    .then(data => {
      //  console.log(data)
       setData(data)
       setLoading(false)
    })
    .catch(error => Alert.alert('Error', error.message))
  }

  useEffect(() =>{
    loadData();
   }, [])

  const navigation = useNavigation();
     
  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#286086' }}>
            <View>
                <Avatar rounded size="large" source={{ uri:data.image}} activeOpacity={0.7} containerStyle={{backgroundColor: 'white', color:'#62bd69' }}/>
                <Text style={{color: '#fff', fontSize: 14, padding: 10, }}>Followers: {data.follower_count}</Text>
                <Text style={{color: '#fff', fontSize: 14, padding: 10, }}>Following: {data.following_count}</Text>
                <Text style={{color: '#fff', paddingLeft: 10, }}>@{data.username}</Text>
                <TouchableOpacity 
               onPress={ () => navigation.navigate('Edit')}>
      
      <Text style={{color:'fff', padding: 10,}}>Edit Profile</Text>
    </TouchableOpacity>
                
            
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