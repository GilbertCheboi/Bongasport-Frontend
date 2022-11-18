import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Button } from "@rneui/base";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DetailNotification(props) {
; const data = props.route.params.data;
const [liked, setLiked] = useState(false);

  const loadDelete = (data) =>{
    fetch(`http://192.168.25.107:8000/api/predictions/${data.id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'aplication/json'
      }
    })
    .then(data => {
      props.navigation.navigate('Games')
    })
  }

  return (
    <ScrollView>
        <Text>{data.title}</Text>
        <Text>{data.detail}</Text>
        <Text>{data.tips}</Text>
        <Image
        style={styles.stretch}
        source={{uri: data.game_image}}
      />
        <View style={styles.buttons}>
        <Button
          buttonStyle={{ width: 150 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          icon={<MaterialCommunityIcons name="pencil-outline" size={22}  color="#0FF"/>}
          
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => props.navigation.navigate("Edit", {data:data})}
          title="Edit"
          titleStyle={{ marginHorizontal: 5 }}
    />
        <Button
          buttonStyle={{ width: 150 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          icon={<MaterialCommunityIcons name="delete" size={22}  color="#0FF"/>}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => loadDelete(data)}
          title="Delete"
          titleStyle={{ marginHorizontal: 5 }}
    />
        </View>
    </ScrollView>
  )
} const styles= StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
  stretch: {
    width: 300,
    height: 700,
    resizeMode: 'stretch',
  },
});