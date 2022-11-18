import { ScrollView, Text, StyleSheet, Alert,Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@rneui/base'
import * as ImagePicker from 'expo-image-picker';
// import * as DocumentPicker from 'expo-document-picker';


import DocumentPicker from 'react-native-document-picker';

export default function CreateFeed(props) {
  

    const [title, setTitle]= useState("")
    const [detail, setDetail]=  useState("")
    const [tips, setTips]=  useState("") 
    const [game_image, setGame_image] = useState(null);
    const [gae_image, setGameImage] = useState(null);


  const uploadImage = async () => {
    // Check if any file is selected or not
    if (game_image != null) {
      // If file selected then create FormData
      // const matchifo = {title:title, detail:detail, tips:tips};
      // const fileToUpload = game_image;
      const form_data = new FormData();
      form_data.append({title:title, detail:detail, tips:tips})
      form_data.append('game_image',game_image, "image.jpeg")
      // ,{
      //   uri: result.uri,
      //   type: result.type,
      //   name
      // });
      // form_data.append('matchifo',  JSON.stringify(matchifo))
      // Please change file upload URL  
  let result = await fetch(
    'http://192.168.25.107:8000/api/predictions/',
    {
      method: 'post',
      body: form_data,
      headers: {
        'Content-Type': 'multipart/form-data; ',
        'X-CSRFToken':Cookies.get('csrftoken')
      },
    }
  );

  let responseJson = await result.json();

  if (responseJson.status == 1) {

    alert('Upload Successful');
  }
} else {
  // If no file selected the show alert
  alert('Please Select File first');
}

};

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


// const selectFile = async () => {

//   // Opening Document Picker to select one file

//   try {

//       // No permissions request is necessary for launching the image library
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });


//     // Printing the log realted to the file
//     console.log('result : ' + JSON.stringify(result));
//     // Setting the state to show single file attributes
//     setGame_image(result);
//   } catch (err) {
//     setGame_image(null);

//     // Handling any exception (If any)
//     if (ImagePicker.isCancel(err)) {
//       // If user canceled the document selection
//       alert('Canceled');

//     } else {
//       // For Unknown Error
//       alert('Unknown Error: ' + JSON.stringify(err));
//       throw err;

//     }

//   }

// };

  return (
    <ScrollView>
      <TextInput style={styles.input}
      label="Title"
      value={title}
      mode= 'outlined'
      onChangeText={text => setTitle(text)}
    />
      <TextInput style={styles.input}
      label="Detail"
      value={detail}
      mode= 'outlined'
      multiline
      numberOfLines={12}
      onChangeText={text => setDetail(text)}
    />
      <TextInput style={styles.input}
      label="Tips"
      value={tips}
      mode= 'outlined'
      onChangeText={text => setTips(text)}
    />
    <Button title="Pick an image from camera roll" onPress={selectFile} />
      {game_image && <Image source={{ uri: game_image }} style={{ width: 200, height: 200 }} />}
    <Button
      buttonStyle={{ width: 150, alignSelf: 'center' }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      iconContainerStyle={{ background: "#000" }}
      onPress={uploadImage}
      title="Submit"
      titleStyle={{ marginHorizontal: 5 }}
    />
    </ScrollView>
  )
}
const styles= StyleSheet.create({
  input:{
    margin: 10,
  }
})