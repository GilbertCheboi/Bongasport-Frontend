import { View, Text, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  FAB } from "@rneui/themed";
import { Card } from 'react-native-paper';


export default function BackendTest(props) {

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(true)

    const loadData = () => { 
      fetch('http://192.168.25.107:8000/api/predictions/', {
        method: 'GET'
       }) 
       .then(resp => resp.json())
       .then(data => {
          setData(data)
          setLoading(false)
       })
       .catch(error => Alert.alert('Error', error.message))
     }

    useEffect(() => {
       loadData();
      }, [])

      const clickedItem = (data) => { 
        props.navigation.navigate('Details',{data:data}) }

    const renderData = (item) => {      
        return(
            <Card style={{padding:10, margin: 5}} onPress = {() => clickedItem(item)} >
                <Text>{item.title}</Text>
            </Card>
        )
    }
  return (
    <View >
      <FlatList         
        data={data}
        renderItem={({ item }) => {
            return renderData(item)
        }}
        refreshing={loading}
        onRefresh={loadData}
        keyExtractor={(item) => `${item.id}`}
      />
       <FAB
      style={{ margin: 20, position: 'absolute', bottom: 0, right: 0, flex:1 }}
      placement="right"
      size="large"
      overlayColor="#454545"
      icon={{ name: "edit", color: "#fff" }}
      onPress= {() => props.navigation.navigate('Create')}
    />
    </View>
  )
}
