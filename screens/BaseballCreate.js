import { ScrollView, Text, StyleSheet, View, Alert,Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@rneui/base'
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../context/AuthContext';
// import * as DocumentPicker from 'expo-document-picker';


import DocumentPicker from 'react-native-document-picker';


export default function BaseballCreate(props) {

    const [content, setContent]=  useState();
    const [image, setGame_image] = useState(null);
    const {userToken, userInfo} = useContext(AuthContext);
    // const csrftoken = userToken;

    const createLoad =() => {
        const data = new FormData();
        data.append('content', content);
        //data.append('image', image);
        fetch('http://gilscore.azurewebsites.net/api/Baseball/create/', {
          method: 'POST',
          headers: {
            'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
            // 'Content-Type':'application/x-www-form-urlencoder',
            'Authorization': 'Token ' + userToken
          },
            // body: createFormData(content, {userId: userInfo.user.id})
            body: data,
        })
        .then(resp => resp.json())
        .then(data => { 
          console.log(data)
          props.navigation.navigate('Baseball Home')
        })
        .catch(error=> Alert.alert('Error', error.message))
      }
      const selectFile = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [1, 1],
          quality: 1,
        });
      
        console.log(result);
      
        if (!result.cancelled) {
          setGame_image(result.uri);
        }
      };
     
     

  return (
    <ScrollView>
      <View style={styles.innerHeaderContainer}>
                <View style={styles.photoContainer}>
                  {/* <View style={styles.innerPhotoContainer}>
                    <TouchableOpacity>
                    <Image
                      style={styles.photo}
                      source={{uri: item.user.image}}/>
                    </TouchableOpacity>
                  </View> */}
                </View>              
                <View style={styles.info}>
                  <View style={styles.userDetails}>
                    <Text style={styles.userName}>Deno
                      <Text style={styles.userHandleAndTime}>  @Sober </Text>
                    </Text>
                  </View>
                </View>
                                
              </View>
      <TextInput style={styles.input}
      // label="content"
      value={content}
      // mode= 'outlined'
      maxLength={240}
      placeholder="What's up with your favorite team "
      multiline
      numberOfLines={6}
      onChangeText={content => setContent(content)}
    />
    <Button title="Pick an image from camera roll" onPress={selectFile} />
      {image && <Image source={{ uri:image }} style={{ width: 200, height: 200 }} />}
    <Button
      buttonStyle={{ width: 150, alignSelf: 'center' }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      iconContainerStyle={{ background: "#000" }}
      onPress={() => createLoad()}
      title="Post"
      titleStyle={{ marginHorizontal: 5 }}
    />
    </ScrollView>
  )
}
const styles= StyleSheet.create({
  input:{
    margin: 10,
    // marginTop:70,
    // padding: 20
  },
  userDetails: {
    borderColor: "blue",
    // borderWidth: 1,
    marginBottom: 10,
    // marginTop: 10,
    marginLeft: 10,
    margin: 50
  },
  userName: { color: "black", fontWeight: "bold", fontSize:12, },
  userHandleAndTime: {
    // color: "rgb(136, 153, 166)",
    fontWeight: "bold",
    color: "#09899b",
    fontSize:15,
    marginLeft: 5,
    
    fontStyle: 'italic',
  },
  innerHeaderContainer: { 
    // backgroundColor: '#FFf',
    // backgroundColor: '#B6D0E2',
    // borderRadius: 10,
    // alignItems:'center',
    borderColor: "#09899b",
    // borderWidth: 1,
    // borderBottomWidth: 1,
    flexDirection:'row',
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    // borderLeftWidth: 1,
    justifyContent: 'space-between',
  },
})