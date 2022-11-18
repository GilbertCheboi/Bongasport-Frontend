import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { Image, Avatar, Divider } from "react-native-elements";
// import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {

  

  const [data, setData] = useState([])
  const {userToken} = useContext(AuthContext)
  const {userInfo} = useContext(AuthContext);
  const username = userInfo.user.username
  const loadData = () => {
    fetch('http://gilscore.azurewebsites.net/api/profiles/Gilly/',{
     method: 'GET',
     headers:{
      'Authorization': 'Token ' + userToken
     }
    })

    .then(resp => resp.json())
    .then(data => {
       console.log(data)
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
    <ScrollView>
      <Image
        source={{ uri: "https://www.clactonandfrintongazette.co.uk/resources/images/16030527/?type=responsive-gallery-fullscreen"}}
        style={styles.cover}
      />
      <Avatar
        rounded
        size="large"
        source={{ uri: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta18ee49d1accc927/6336dc51e0d20d1ce84da1ff/GettyImages-1421030506.jpg"
        //   uri: profile ? profile.avatar.filename : null,
        }}
        containerStyle={styles.avatar}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{data.email}</Text>
        <Text style={styles.username}>@{username}</Text>
        <Text style={styles.bio}>{data.bio}</Text>
        <Text style={styles.bio}>{data.follower_count}</Text>
        <Text style={styles.bio}>{data.following_count} </Text>
       
        
      </View>
      <TouchableOpacity 
      onPress={ () => navigation.navigate('Edit')}>
      
      <Text style={styles.edit_button}>Edit Profile</Text>
    </TouchableOpacity>
    {/* <TouchableOpacity
        style={styles.button}
        onPress ={ () => navigation.navigate('not')}
      >
        <Text>Get started with CallCenterAfrica</Text>
      </TouchableOpacity> */}
      <Divider />
    </ScrollView>
  )
  
  }





const styles = StyleSheet.create({
    container: {},
    cover: {
      width: "100%",
      height: 100,
    },
    avatar: {
      marginLeft: 20,
      marginTop: -40,
      borderWidth: 3,
      borderColor: "white",
      borderStyle: "solid",
    },
    profileInfo: {
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    bio: {
      marginTop: 10,
      marginBottom: 10,
      marginRight: 100,
    },
    name: {
      fontSize: 20,
      fontWeight: "900",
      lineHeight: 21,
    },
    username: {
      color: "#657786",
    },
    location: {
      color: "#657786",
    },
    regDate: {
      color: "#657786",
    },
    follow: {
      fontSize: 16,
    },
    followers: {
      marginRight: 10,
    },
    edit_button: {
        backgroundColor: 'red',
    },
  });





