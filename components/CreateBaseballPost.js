import { ScrollView, Text, StyleSheet, Alert,Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@rneui/base'
import * as ImagePicker from 'expo-image-picker';


export default function CreateBaseballPost(props) {
  

    const [title, setTitle]= useState("")
   
    const [Type,setType]=useState('')
    const [content, setContent]=  useState("")
    const [image, setImage] = useState(null);

    
      const pickImage = async () => {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              setType(result.uri.substring(result.uri.lastIndexOf(".") + 1));
              setImage(result.uri);
            }
          };

    const data= {content:content, image:image}
    
    const createLoad =() => {
      fetch('http://192.168.25.107:8000/api/Baseball/create/', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
          body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(data => { 
        console.log(data)
        props.navigation.navigate('Baseball')
      })
      .catch(error=> Alert.alert('Error', error.message))
    }
   


  return (
    <ScrollView>
      {/* <TextInput style={styles.input}
      label="Title"
      value={title}
      mode= 'outlined'
      onChangeText={text => setTitle(text)}
    /> */}
      <TextInput style={styles.input}
      label="content"
      value={content}
      mode= 'outlined'
      multiline
      numberOfLines={12}
      onChangeText={text => setContent(text)}
    />


<Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


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
      title="Submit"
      titleStyle={{ marginHorizontal: 5 }}
    />
    </ScrollView>
  )
}
const styles= StyleSheet.create({
  input:{
    margin: 10,
  },
})