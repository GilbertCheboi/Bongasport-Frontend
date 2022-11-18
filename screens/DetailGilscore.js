
import { Text,FlatList,TextInput, Button, View, StyleSheet,TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native'
import React, { Component, useState,useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header  as HeaderRNE, HeaderProps, Icon  } from "@rneui/themed";

export default function DetailGilscore(props) {

  const data = props.route.params.data;
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState([]) 


  // const loadComment = () => { 
  //   fetch('http://192.168.25.107:8000/api/Baseball/commentfeed/', {
  //     method: 'GET'
  //    }) 
  //    .then(resp => resp.json())
  //    .then(comment => {
  //       setComent(comment.results)
  //       setLoading(false)
  //    })
  //    .catch(error => Alert.alert('Error', error.message))
  //  }

  // useEffect(() => {
  //    loadComment();
  //   }, [])
    

  // const CommentDelete = (data) =>{
  //   fetch(`http://192.168.25.107:8000/api/predictions/commentfeed${data.id}/`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':'aplication/json'
  //     }
  //   })
  // }

  const renderData = (item) => {      
    return(
        <Card style={{padding:10, margin: 5}} onPress = {() => clickedItem(item)} >
            <Text>Heel</Text>
        </Card>
    )
}
  return (
  
                           
              <View style={styles.background}>
                <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}>
              <Icon name="description" color="white"  onPress={()=> navigation.openDrawer()}/>
            </TouchableOpacity>
          </View>
      }
      centerComponent={{ text: 'Milan', style: styles.heading }}
    />
              <View style={styles.container}>
                <View style={styles.innerContainer}>
                  <View style={styles.innerHeaderContainer}>
                    <View style={styles.photoContainer}>
                      <View style={styles.innerPhotoContainer}>
                        <TouchableOpacity>
                        <Image
                          style={styles.photo}
                          source={{uri: data.user.image}}/>
                        </TouchableOpacity>
                      </View>
                    </View>              
                    <View style={styles.info}>
                      <View style={styles.userDetails}>
                        <Text style={styles.userName}>{data.user.first_name}
                          <Text style={styles.userHandleAndTime}>  @{data.user.username} ·{data.timestamp}   :{}</Text>
                          <Text>IEBC</Text>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.innerClubContainer}>
                        <TouchableOpacity>
                        <Image
                          style={styles.photo}
                          source={{uri: data.user.EnglishPremierLeague}}/>
                        </TouchableOpacity>
                    </View> 
                    
                  </View>
                  <View style={styles.BodyContainer}>
                  <View style={styles.tweetBodyContainer}>
                    <View style={styles.tweetTextContainer}>
                      <Text style={styles.tweetText}> {data.content}</Text>
                    </View>
                    <View>
                      <Image
                        style={styles.stretch}
                        source={{uri: data.image}}
                        />
                    </View>
                    <View>
                      <View style={styles.tweetActionsContainer}>
                        <TouchableOpacity style={styles.commentButton}>
                          <MaterialCommunityIcons name="repeat" style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                          <Text style={styles.commentsCount}>xxx</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.retweetButton}>
                          {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                          <MaterialCommunityIcons name="repeat" size={25} color={'rgb(136, 153, 166)'} />
                          <Text style={[styles.retweetButtonIcon, {color:"rgb(136, 153, 166)",fontWeight:"bold"}]}>xxx</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.likeButton} onPress={() => setLiked((isLiked) => !isLiked)}>
                        <MaterialCommunityIcons
                          name={liked ? "heart" : "heart-outline"}
                          size={20}
                          color={liked ? "red" : "black"}
                        />
                          <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>{data.likes}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareButton}>
                          {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                          <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />

                        </TouchableOpacity>
                      </View>
                    </View>                  
                  </View>
                  </View>
                        <TextInput style={styles.input}
                    label="content"
                    // value={content}
                    mode= 'outlined'
                    multiline
                    numberOfLines={6}
                    // onChangeText={text => setContent(text)}
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
                  onPress={() => createComment()}
                  title="Submit"
                  titleStyle={{ marginHorizontal: 5 }}
                /><FlatList         
               comment={comment}
                renderItem={({ item }) => {
                    return renderData(item)
                }}
                // refreshing={loading}
                // onRefresh={loadData}
                keyExtractor={(item) => `${item.id}`}
              />
                
                </View>
              </View>
     
              </View>
         
    )
}


const styles= StyleSheet.create({
  background:{
    backgroundColor:'#286086'
  },
  container: {
    borderBottomColor: "black",
    // borderBottomWidth: 2,
    paddingBottom:20,
    paddingTop: 13,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginLeft: 7.5,
    marginRight: 7.5,
    // flexDirection: "column",
  },
  isReplyContainer: {

    borderColor: "green",
    flexDirection: "row",
    borderWidth: 0,
    height: 20,
    marginTop: 5
  },
  innerContainer: {
    borderColor: "green",
    flexDirection: "column",
    borderWidth: 0,
    height: "auto",
    // alignItems: 'center',
  },
  photoContainer: {
    borderColor: "yellow",
    flexDirection: "column",
    marginLeft: 10,
    // borderWidth: 1,
  },
  innerPhotoContainer: { 
    height: 70, 
    borderColor: "black",
    // flexDirection: "row",
    // borderBottomWidth: 1,
    alignItems: "center" ,
  },
  innerClubContainer: { 
    // height: 70,
    borderColor: "black",
    justifyContent: 'flex-start',
    // flexDirection: "row", 
    // borderBottomWidth: 1,
    // alignItems: "center",
    left: 60,
    // borderLeftWidth: 1
  },

  innerHeaderContainer: { 
    // backgroundColor: '#FFf',
    backgroundColor: '#B6D0E2',
    borderRadius: 10,
    // alignItems:'center',
    // borderColor: "black",
    // borderWidth: 1,
    // borderBottomWidth: 1,
    flexDirection:'row',
    marginLeft: 10,
    marginRight: 10,
    // borderRightWidth: 1
    // borderLeftWidth: 1,
    // justifyContent: 'space-between',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 15
  },
  info: {
    width:'50%',
    // flex: 0.77,
    borderColor: "yellow",
    // flexDirection: "column",
    borderWidth: 0
  },
  userDetails: {
    borderColor: "blue",
    // borderWidth: 1,
    marginBottom: 0,
    marginTop: 10,
    marginLeft: 10,
  },
  userName: { color: "black", fontWeight: "bold", fontSize:12, },
  userHandleAndTime: {
    color: "rgb(136, 153, 166)",
    marginLeft: 5,
    fontStyle: 'italic',
  },
  BodyContainer:{
    alignItems: 'center',

  },
  tweetBodyContainer:{
    borderColor: "red", 
    // borderWidth: 1,
    width: '70%',
    justifyContent: 'center',

  },
  tweetTextContainer: { borderColor: "blue", borderWidth: 0, },
  tweetText: { color: "black", paddingRight: 10, fontSize:15,  },
  tweetActionsContainer: {
    borderColor: "blue",
    borderWidth: 0,
    marginTop: 5,
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  commentButton: {
    paddingLeft: 0,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  commentButtonIcon: {
    margin: 0,
    borderColor: "red",
    borderWidth: 0
  },
  commentsCount: {
    position: "absolute",
    left: 27,
    color: "rgb(136, 153, 166)",
  },
  retweetButton: {
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  retweetButtonIcon: {
    position: "absolute",
    left: 27,  
  },
  likeButton: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  likeButtonIcon: {
    position: "absolute",  
    marginLeft: 3,
    left: 27,
  },
  shareButton: {
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0, 
  },
  stretch: {
      width: 200,
      height: 200,
      // resizeMode: 'stretch',
      // maxHeight: 400,                         
      // maxWidth: '100%',
      // position: 'relative',
      // width: width * .2,  //its same to '20%' of device width
      // aspectRatio: 1, // <-- this
      // resizeMode: 'contain', //optional
      // height: 'auto',
    },
    input:{
      margin: 10,
      borderColor: "red",
      borderWidth: 2,
    },
});
