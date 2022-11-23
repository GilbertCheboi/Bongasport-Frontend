import { Image, ImageBackground, StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

export default function EditProfile() {
    const navigation =useNavigation();
    const [content, setContent]=  useState();
    const [image, setGame_image] = useState(null);
    const [soccerIcon, setSoccerIcon] = useState();
    const {userToken, userInfo} = useContext(AuthContext);
    // const csrftoken = userToken;

    const createLoad =() => {
        const data = new FormData();
        data.append('content', content);
        data.append('image', image);
        data.append('soccerIcon', soccerIcon)
        fetch('http://gilscore.azurewebsites.net/api/profiles/Gilly/edit', {
          method: 'POST',
          headers: {
            'Content-Type':'multipart/form-data',
            // 'Content-Type':'application/x-www-form-urlencoder',
            'Authorization': 'Token ' + userToken
          },
            // body: createFormData(content, {userId: userInfo.user.id})
            body: data,
        })
        .then(resp => resp.json())
        .then(data => { 
          console.log(data)
          props.navigation.navigate('Formular1')
        })
        .catch(error=> Alert.alert('Error', error.message))
      }
      const selectFile = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
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

      <Text>Edit your Profile</Text>
    <DropDownPicker 
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
    />  
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

const styles = StyleSheet.create({
    screenContainerJb: {
        justifyContent: 'space-evenly',
      },
      avatar: {
            marginLeft: 20,
            marginTop: -40,
            borderWidth: 3,
            borderColor: "white",
            borderStyle: "solid",
          },
      viewKs: {
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      viewYR: {
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      viewS1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      viewAl: {
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      imageBackgroundNb: {
        width: '100%',
        height: 250,
      },
      imageA3: {
        height: 120,
        width: 120,
      },
      containerEA: {
        alignItems: 'center',
        marginTop: -65,
      },
      textPr: {
        width: '100%',
        textAlign: 'center',
        marginTop: 16,
      },
      touchableOk: {
        borderTopWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 32,
      },
      iconFE: {
        height: 24,
        width: 24,
      },
      iconCl: {
        width: 24,
        height: 24,
      },
      iconZz: {
        width: 24,
        height: 24,
      },
      iconZb: {
        height: 24,
        width: 24,
      },
      buttonP2: {
        marginTop: 16,
        alignSelf: 'center',
        width: '50%',
      },
      touchableOm: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
      },
      touchableBp: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
      },
      touchableJg: {
        paddingBottom: 12,
        paddingTop: 12,
        borderTopWidth: 1,
      },
    });


