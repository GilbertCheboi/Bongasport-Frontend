import { View, Text, FlatList, TextInput, Dimensions,SafeAreaView, Alert, Image, Button, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { FAB } from "@rneui/base";
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Header, Icon } from "@rneui/base";
// import { Header  as HeaderRNE, HeaderProps, Icon  } from "@rneui/themed";
import { AuthContext } from '../context/AuthContext';


export default function NBADetail(props) {
  const dataa = props.route.params.data;
  const id = dataa.id
  const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState([]) 
  const {userToken, userInfo} = useContext(AuthContext);
  const [content, setContent] = useState([]) ;



  const loadComment = () => { 
    fetch(`https://gilscore.azurewebsites.net/api/NBA/tweetcomments/${id}/`, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json',

        'Authorization': 'Token ' + userToken
      }
     }) 
     .then(resp => resp.json())
     .then(data => {
        setData(data)
        console.log(data)
        setLoading(false)
     })
     .catch(error =>
      console.log(error, 'Error'))
     }

  useEffect(() => {
     loadComment();
    }, [])
    
    const createLoad =() => {
      const fomdata = new FormData();
      fomdata.append('id', id);
      fomdata.append('content', content);
      //data.append('image', image);
        fetch('https://gilscore.azurewebsites.net/api/NBA/commentweet/', {
        method: 'POST',
        headers: {
          'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
            // 'Content-Type':'application/x-www-form-urlencoder',
            'Authorization': 'Token ' + userToken
        },
          // body: createFormData(content, {userId: userInfo.user.id})
          body: fomdata,
      })
      .then(resp => resp.json())
      .then(created => { 
        console.log(created)
        // props.navigation.navigate('Detail NBA')
      })
      .catch(error=> Alert.alert('Error', error.message))
    }
    

    const renderComment = (item) => {  

      return(
          <Card>
                         
            <View style={styles.background}>
            <View style={styles.container}>
              <View style={styles.innerContainer}>
                <View style={styles.innerHeaderContainer}>
                  <View style={styles.photoContainer}>
                    <View style={styles.innerPhotoContainer}>
                      <TouchableOpacity onPress={ () => clickedProfile(item)}>
                      <Image
                        style={styles.photo}
                        source={{uri: item.user.image}}/>
                      </TouchableOpacity>
                    </View>
                  </View>              
                  <View style={styles.info}>
                    <View style={styles.userDetails}>
                      <Text style={styles.userName}>{item.user.first_name}
                        <Text style={styles.userHandleAndTime}>  @{item.user.username} {item.timestamp}   {}</Text>
                        
                      </Text>
                    </View>
                  </View>
                  <View style={styles.innerClubContainer}>
                      <TouchableOpacity>
                      <Image
                        style={styles.photo}
                        source={{uri: item.user.NBA}}/>
                      </TouchableOpacity>
                  </View> 
                  
                </View>
                <View style={styles.BodyContainer}>
                <View style={styles.tweetBodyContainer}>
                  <View style={styles.tweetTextContainer}>
                    <Text style={styles.tweetText}> {item.content}</Text>
                  </View>
                  <View>
                  {item.image !== null ? <Image
                      style={styles.stretch}
                      source={{uri: item.image}}
                      /> : <Image
                      style={{height: "auto"}}
                      source={{uri: item.image}}
                      />}
                  </View>
                  <View>
                    <View style={styles.tweetActionsContainer}>
                      <TouchableOpacity style={styles.commentButton}>
                        <MaterialCommunityIcons name="reply" style={styles.commentButtonIcon} size={20} color={'#09899b'} />
                        <Text style={styles.commentsCount}>4</Text>
                      </TouchableOpacity>
                      <TouchableOpacity  style={styles.retweetButton}>
                        {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                        <MaterialCommunityIcons name="repeat" size={20} color={'#09899b'} />
                        <Text style={[styles.retweetButtonIcon, {color:"#09899b",fontWeight:"bold"}]}></Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.likeButton} onPress={() => likeAction()}>
                      <MaterialCommunityIcons
                        name={liked ? "heart" : "heart-outline"}
                        size={20}
                        color={liked ? "red" : "black"}
                      />
                        <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>{item.likes}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.shareButton}>
                        {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                        <MaterialCommunityIcons name="share-variant" size={16} color={'#09899b'} />
  
                      </TouchableOpacity>
                    </View>
                  </View>                  
                </View>
                </View>
             
              </View>
            </View>
            </View>
              
          </Card>
      )
  }
  
  return (
  
                           
              <View style={styles.background}>
              <ScrollView style={styles.container}>
                <View style={styles.innerContainer}>
                  <View style={styles.innerHeaderContainer}>
                    <View style={styles.photoContainer}>
                      <View style={styles.innerPhotoContainer}>
                        <TouchableOpacity>
                        <Image
                          style={styles.photo}
                          source={{uri: dataa.user.image}}/>
                        </TouchableOpacity>
                      </View>
                    </View>              
                    <View style={styles.info}>
                      <View style={styles.userDetails}>
                        <Text style={styles.userName}>{dataa.user.first_name}
                          <Text style={styles.userHandleAndTime}>  @{dataa.user.username} ·{dataa.timestamp}   :{}</Text>
                          <Text>IEBC</Text>
                        </Text>
                      </View>
                    </View>
                    <View style={styles.innerClubContainer}>
                        <TouchableOpacity>
                        <Image
                          style={styles.photo}
                          source={{uri: dataa.user.NBA}}/>
                        </TouchableOpacity>
                    </View> 
                    
                  </View>
                  <View style={styles.BodyContainer}>
                  <View style={styles.tweetBodyContainer}>
                    <View style={styles.tweetTextContainer}>
                      <Text style={styles.tweetText}> {dataa.content}</Text>
                    </View>
                    <View>
                      <Image
                        style={styles.stretch}
                        source={{uri: dataa.image}}
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
                          <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>{dataa.likes}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareButton}>
                          {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                          <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />

                        </TouchableOpacity>
                      </View>
                    </View>                  
                  </View>
                  </View>
                  <View style={styles.comment}>
                        <TextInput style={styles.input}
                    label="content"
                    value={content}
                    mode= 'outlined'
                    multiline
                    placeholder="Comment"
                    numberOfLines={3}
                    onChangeText={content => setContent(content)}
                  /> 
                  <TouchableOpacity style={styles.commentButton}
                  onPress={() => createLoad()}
                  >
                      {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                      <MaterialCommunityIcons name="send" size={30} color={'rgb(136, 153, 166)'} />

                    </TouchableOpacity>
                </View>
                <FlatList         
               data={data}
                renderItem={({ item }) => {
                    return renderComment(item)
                }}
                // refreshing={loading}
                // onRefresh={loadData}
                keyExtractor={(item) => `${item.id}`}
              />
                
                </View>
              </ScrollView>
     
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
      // width: 200,
      height: 300,
      // resizeMode: 'stretch',
      // maxHeight: 400,                         
      maxWidth: '100%',
      // position: 'relative',
      // width: width * .2,  //its same to '20%' of device width
      // aspectRatio: 1, // <-- this
      // resizeMode: 'contain', //optional
      // height: 'auto',
    },
    input:{
      //   // margin: 10,
      //   borderColor: "red",
      backgroundColor: '#D3D3D3',
      borderRadius: 15,
      //   borderWidth: 2,
      //   position: "absolute",
        marginLeft: 10,
      width: '80%',
      //   flex: 1,
        padding:10,
      //   alignItems: 'center',
      //   justifyContent: 'center',
        marginTop: 10,
      //   // marginBottom: 100,
      },
      comment:{
        // position: 'relative',
        // borderWidth: 2,
        borderColor: 'red',
        flexDirection: "row",
        // left: 0, 
        // right: 0,
        // bottom: 0,
        // height: '90%',
      },
      commentButton:{
        marginTop: 30,
        margin: 10,
      }
});
