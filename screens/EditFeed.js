import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Button } from '@rneui/base'



export default function EditFeed(props) {

    const data = props.route.params.data;

    const [title, setTitle]= useState(data.title)
    const [detail, setDetail]=  useState(data.detail)
    const [tips, setTips]=  useState(data.tips)

    const updateLoad= () => {
        fetch(`http://192.168.25.107:8000/api/predictions/${data.id}/`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({title:title, detail, tips})
        })
        .then(resp => resp.json())
        .then(data => {
            props.navigation.navigate('Games', {data:data})
        })
    }
    

  return (
        <View>
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
            <Button
            buttonStyle={{ width: 150, alignSelf: 'center' }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
                borderWidth: 2,
                borderColor: "#00F"
            }}
            disabledTitleStyle={{ color: "#00F" }}
            iconContainerStyle={{ background: "#000" }}
            onPress={() => updateLoad()}
            title="Update"
            titleStyle={{ marginHorizontal: 5 }}
            />
            </View>
  )
}

const styles= StyleSheet.create({
input:{
margin: 10,
}
})