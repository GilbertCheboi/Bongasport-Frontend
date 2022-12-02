// import { Image, ImageBackground, StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
// import React, { useState, useContext } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../context/AuthContext';
// import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

import { AuthContext } from '../context/AuthContext';
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput, Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Divider } from "react-native-elements";
import {Picker} from '@react-native-picker/picker';

export default function EditProfile() {

      const [soccerIcon, setSoccerIcon] = useState();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [selectedClub, setSelectedClub] = useState();
  const [selectedNBA, setSelectedNBA] = useState();
  const [selectedF1, setSelectedF1] = useState();
  const {userToken} = useContext(AuthContext)
  const {userInfo} = useContext(AuthContext);
  const {data, setData} = useContext([]);
  const usernamee = userInfo.user.username
  // const navigation =useNavigation();

  const editData = (bio, location, name, last_name, first_name) => {
    fetch(`http://gilscore.azurewebsites.net/api/profiles/${usernamee}/edit`,{
     method: 'PUT',
     headers:{
      'Content-Type':'application/json',
      'Authorization': 'Token ' + userToken
     },
     body: JSON.stringify(bio)
    })

    .then(resp => resp.json())
    .then(data => {
       setData(data)
       console.log(data)
       setLoading(false)
    })
    .catch(error => Alert.alert('Error', error.message))
  }

  useEffect(() =>{
    editData();
   }, [])


  return (
    <View style={styles.container}>
    <Image style={styles.image}  />

    <StatusBar style="auto" />
    <Text style={styles.loginHeader} >Edit Profile</Text>

    <Avatar
        rounded
        size="large"
        // source={{ uri:data.image}}
        containerStyle={styles.avatar}
      />
    {/* <View style={styles.inputView}>
  <MaterialCommunityIcons name="account" size={20} />
    <TextInput
      style={styles.TextInput}
      placeholder="First Name"
      placeholderTextColor="#333"
      onChangeText={(firstName) => setFirstName(firstName)}
    />
  </View> */}
  {/* <View style={styles.inputView}>
  <MaterialCommunityIcons name="account" size={20} />
    <TextInput
      style={styles.TextInput}
      placeholder="Last Name"
      placeholderTextColor="#333"
      onChangeText={(lastName) => setLastName(lastName)}
    />
  </View> */}

  <View style={styles.inputView}>
  <MaterialCommunityIcons name="at" size={20} />
    <TextInput
      style={styles.TextInput}
      placeholder="Username"
      placeholderTextColor="#333"
      value={username}
      onChangeText={(username) => setUserName(username)}
    />
  </View>

    <View style={styles.inputView}>
    <MaterialCommunityIcons name="at" size={20} />
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        keyboardType="email-address"
        placeholderTextColor="#333"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.inputView}>
       <TextInput
      style={styles.TextInput}
      placeholder="bio"
      placeholderTextColor="#333"
      value={data.bio}
      onChangeText={(bio) => setBio(bio)}
    />
    </View>
    
    {/* <View style={styles.inputView}>
    <MaterialCommunityIcons name="lock" size={20} />
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm Password."
        placeholderTextColor="#333"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View> */}
{/* <View style={styles.selectView}> */}
{/* <Text style={styles.label}>Football</Text>
    <Picker
        selectedValue={selectedClub}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedClub(itemValue)}
      >
        <Picker.Item label="Select club" value="afc" />
        <Picker.Item label="Arsenal" value="afc" />
        <Picker.Item label="Manchester United" value="mufc" />
      </Picker>
      </View>
      <View style={styles.selectView}>
<Text style={styles.label}>F1</Text>
    <Picker
        selectedValue={selectedF1}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedF1(itemValue)}
      >
        <Picker.Item label="Select team" value="afc" />
        <Picker.Item label="Red Bull" value="rb" />
        <Picker.Item label="Mercedes" value="3stars" />
      </Picker>
      </View>
      <View style={styles.selectView}>
<Text style={styles.label}>NBA</Text>
    <Picker
        selectedValue={selectedNBA}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedNBA(itemValue)}
      >
        <Picker.Item label="Select club" value="afc" />
        <Picker.Item label="LA Lakers" value="la" />
        <Picker.Item label="Celtic" value="ct" />
      </Picker>
      </View> */}

      {/* <DropDownPicker 
      soccerIcon  = {[
        {
          label: "select Team",
          value: "Arsenal",
          icon:() => (<Image source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1R-LFIkOkOT7a8eTuK31_HOMY7tHSJHTFLw&usqp=CAU" />) 
        },
        {
          label: "select Team",
          value: "Chelsea",
          icon:() => (<Image source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMZHl9Azb-w3Gtgh7sTWiWbWcB06d4WxfYw&usqp=CAU" />) 
        }
      ]}
      label = "Select your soccer team"
      placeholder='*********'
      defaulValue={soccerIcon}
      containerStyle = {{ height:80 }}
      dropDownMaxHeight= {300}
      searchable={true}
      style= {{
        backgroundColor: "#fafafa",
        margin:10,
        height:50,
      }}
      onChangeSearchItem={(soccerIcon)=> {setSoccerIcon(soccerIcon.icon);}}
    />   */}

    <TouchableOpacity style={styles.loginBtn} onPress={()=>{editData(bio)}}>
      <Text style={styles.loginText}>Save</Text>
    </TouchableOpacity>

    {/* <View  style={styles.register}>
    <Text >Already Registered:  </Text>
    <TouchableOpacity 
    // onPress={ () => navigation.navigate('login')}
    >
      <Text style={styles.register_button}>Login</Text>
    </TouchableOpacity>
    </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
  avatar: {
    // marginLeft: 10,
    // marginTop: 0,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
 
  image: {
    marginBottom: 40,
  },
  loginHeader: {
    fontSize: 28,
    marginBottom: 20 ,
    color: 'red', 
    // justifyContent: "center",

  },
  inputView: {
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    // width: "70%",
    marginBottom: 20,
    flexDirection: 'row',
 
    // alignItems: "center",
  },
  selectView: {
    borderBottomColor:'#ccc',
    // borderBottomWidth:1,
    // width: "70%",
    marginBottom: 10,
    flexDirection: 'row',
 
    // alignItems: "center",
  },
 
  TextInput: {
    // height: 50,
    flex: 1,
    paddingVertical:0,
    paddingLeft:10,
    // padding: 10,
    // backgroundColor:'#ccc',

    color: '#333',
  },
 
  register_button:{
    color: 'red'
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "red",
  },
  register:{
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 30,
  }
});



// export default function EditProfile() {
//     const navigation =useNavigation();
//     const [content, setContent]=  useState();
//     const [image, setGame_image] = useState(null);
//     const [soccerIcon, setSoccerIcon] = useState();
//     const {userToken, userInfo} = useContext(AuthContext);
//     // const csrftoken = userToken;

//     const createLoad =() => {
//         const data = new FormData();
//         data.append('content', content);
//         data.append('image', image);
//         data.append('soccerIcon', soccerIcon)
//         fetch('http://gilscore.azurewebsites.net/api/profiles/Gilly/edit', {
//           method: 'POST',
//           headers: {
//             'Content-Type':'multipart/form-data',
//             // 'Content-Type':'application/x-www-form-urlencoder',
//             'Authorization': 'Token ' + userToken
//           },
//             // body: createFormData(content, {userId: userInfo.user.id})
//             body: data,
//         })
//         .then(resp => resp.json())
//         .then(data => { 
//           console.log(data)
//           props.navigation.navigate('Formular1')
//         })
//         .catch(error=> Alert.alert('Error', error.message))
//       }
//       const selectFile = async () => {
//         // No permissions request is necessary for launching the image library
//         let result = await ImagePicker.launchImageLibraryAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.All,
//           allowsEditing: true,
//           aspect: [1, 1],
//           quality: 1,
//         });
      
//         console.log(result);
      
//         if (!result.cancelled) {
//           setGame_image(result.uri);
//         }
//       };
     
//   return (
    
//     <ScrollView>

//       <Text>Edit your Profile</Text>
//     {/* <DropDownPicker 
//       soccerIcon  = {[
//         {
//           label: "select Team",
//           value: "Arsenal",
//           icon:() => (<Image source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1R-LFIkOkOT7a8eTuK31_HOMY7tHSJHTFLw&usqp=CAU" />) 
//         },
//         {
//           label: "select Team",
//           value: "Chelsea",
//           icon:() => (<Image source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMZHl9Azb-w3Gtgh7sTWiWbWcB06d4WxfYw&usqp=CAU" />) 
//         }
//       ]}
//       label = "Select your soccer team"
//       placeholder='*********'
//       defaulValue={soccerIcon}
//       containerStyle = {{ height:80 }}
//       dropDownMaxHeight= {300}
//       searchable={true}
//       style= {{
//         backgroundColor: "#fafafa",
//         margin:10,
//         height:50,
//       }}
//       onChangeSearchItem={(soccerIcon)=> {setSoccerIcon(soccerIcon.icon);}}
//     />   */}
//    <TextInput style={styles.input}
//     // label="content"
//     value={content}
//     // mode= 'outlined'
//     maxLength={240}
//     placeholder="What's up with your favorite team "
//     multiline
//     numberOfLines={6}
//     onChangeText={content => setContent(content)}
//   />
//   <Button title="Pick an image from camera roll" onPress={selectFile} />
//   {image && <Image source={{ uri:image }} style={{ width: 200, height: 200 }} />}
// <Button
//   buttonStyle={{ width: 150, alignSelf: 'center' }}
//   containerStyle={{ margin: 5 }}
//   disabledStyle={{
//     borderWidth: 2,
//     borderColor: "#00F"
//   }}
//   disabledTitleStyle={{ color: "#00F" }}
//   iconContainerStyle={{ background: "#000" }}
//   onPress={() => createLoad()}
//   title="Post"
//   titleStyle={{ marginHorizontal: 5 }}
// />
// </ScrollView>

//   )
// }

// const styles = StyleSheet.create({
//     screenContainerJb: {
//         justifyContent: 'space-evenly',
//       },
//       // avatar: {
//       //       marginLeft: 20,
//       //       marginTop: -40,
//       //       borderWidth: 3,
//       //       borderColor: "white",
//       //       borderStyle: "solid",
//       //     },
//       // viewKs: {
//       //   justifyContent: 'space-between',
//       //   flexDirection: 'row',
//       // },
//       // viewYR: {
//       //   justifyContent: 'space-between',
//       //   flexDirection: 'row',
//       // },
//       // viewS1: {
//       //   flexDirection: 'row',
//       //   justifyContent: 'space-between',
//       // },
//       // viewAl: {
//       //   justifyContent: 'space-between',
//       //   flexDirection: 'row',
//       // },
//       // imageBackgroundNb: {
//       //   width: '100%',
//       //   height: 250,
//       // },
//       // imageA3: {
//       //   height: 120,
//       //   width: 120,
//       // },
//       // containerEA: {
//       //   alignItems: 'center',
//       //   marginTop: -65,
//       // },
//       // textPr: {
//       //   width: '100%',
//       //   textAlign: 'center',
//       //   marginTop: 16,
//       // },
//       // touchableOk: {
//       //   borderTopWidth: 1,
//       //   paddingTop: 12,
//       //   paddingBottom: 12,
//       //   marginTop: 32,
//       // },
//       // iconFE: {
//       //   height: 24,
//       //   width: 24,
//       // },
//       // iconCl: {
//       //   width: 24,
//       //   height: 24,
//       // },
//       // iconZz: {
//       //   width: 24,
//       //   height: 24,
//       // },
//       // iconZb: {
//       //   height: 24,
//       //   width: 24,
//       // },
//       buttonP2: {
//         marginTop: 16,
//         alignSelf: 'center',
//         width: '50%',
//       },
//       touchableOm: {
//         paddingBottom: 12,
//         paddingTop: 12,
//         borderTopWidth: 1,
//       },
//       touchableBp: {
//         paddingBottom: 12,
//         paddingTop: 12,
//         borderTopWidth: 1,
//       },
//       touchableJg: {
//         paddingBottom: 12,
//         paddingTop: 12,
//         borderTopWidth: 1,
//       },
//     });

