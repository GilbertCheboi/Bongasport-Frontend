import { View, Text, FlatList, Dimensions,SafeAreaView, Alert, Image, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { FAB } from "@rneui/base";
import { Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Header, Icon } from "@rneui/base";
// import { Header  as HeaderRNE, HeaderProps, Icon  } from "@rneui/themed";
import { AuthContext } from '../context/AuthContext';


export default function BaseballScreen(props) {

  const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false);
  const {userToken, userInfo} = useContext(AuthContext);

  const loadData = () => { 
    fetch('http://gilscore.azurewebsites.net/api/Baseball/feed/', {
      method: 'GET',
      headers:{
        'Authorization': 'Token ' + userToken
      }
     }) 
     .then(resp => resp.json())
     .then(data => {
        setData(data.results)
        setLoading(false)
     })
     .catch(error => Alert.alert('Error', error.message))
   }

   const likeAction =() => {
    fetch('http://gilscore.azurewebsites.net/api/Baseball/action/', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
        body: JSON.stringify(data)
    })
    // .then(resp => resp.json())
    // .then(data => { 
    //   console.log(data)
    //   props.navigation.navigate('Formular1')
    // })
    // .catch(error=> Alert.alert('Error', error.message))
  }
 
  useEffect(() => {
     loadData();
    }, [])  

    const clickedItem = (data) => { 
      props.navigation.navigate('Detail Baseball',{data:data}) }
      const clickedProfile = (data) => { 
        props.navigation.navigate('otherprofile',{data:data}) }

  const renderData = (item) => {  

    return(
        <Card        onPress= {() => clickedItem(item)} >
                       
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
                    <Text style={styles.userName}>{item.user.First_Name} {item.user.First_Name}
                      <Text style={styles.userHandleAndTime}>  @{item.user.username} {item.timestamp}   {}</Text>
                      
                    </Text>
                  </View>
                </View>
                <View style={styles.innerClubContainer}>
                    <TouchableOpacity>
                    <Image
                      style={styles.photo}
                      source={{uri: item.user.Baseball}}/>
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

const navigation =useNavigation();

 
  return (
    <SafeAreaView>
      <Header
      backgroundColor="#286086"
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={
      //   <Image
      //   style={styles.tinyLogo}
      //   source={require('../assets/f1.jpg')}
      // />
      {
        text: "Baseball",
        style: { color: "#fff",  fontSize: 22,
        fontWeight: 'bold', }
      }
    }
      centerContainerStyle={{}}
      // containerStyle={{ width: 350 }}
      leftComponent={ <View style={styles.headerRight}>
      <TouchableOpacity
        style={{ marginLeft: 10 }}>
        <Icon name= "menu" color="white"  onPress={()=> navigation.openDrawer()}/>
      </TouchableOpacity>
    </View>}
    // { icon: "menu", color: "#fff" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity
        style={{ marginLeft: 10 }}>
        <Icon name= "person-outline" color="white"  onPress={()=> navigation.navigate('profile')}/>
      </TouchableOpacity>
          
        </View>
      }
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
      {/* <HeaderRNE
      statusB
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}>
              <icon:"menu" color="white"  onPress={()=> navigation.openDrawer()}/>
            </TouchableOpacity>
          </View>
      }
      centerComponent={{ text: 'Formula 1', style: styles.heading }}
    /> */}
      <FlatList         
        data={data}
        renderItem={({ item }) => {
            return renderData(item)
        }}
        refreshing={loading}
        onRefresh={loadData}
        keyExtractor={(item) => `${item.id}`}
      />
       {/* <FAB
      style={{  right: 20, position: 'absolute', bottom: '15%', flex:1, }}
      size="large"
      overlayColor= "#ccc"
      icon={{ name: "edit", color: "#fff" }}
      
    /> */}
      <FAB
      // style={{ width: "40%", margin: 50, marginBottom: 200 }}
      style={{ width: "10%", margin: 50, marginBottom: "25%" }}
      placement="right"
      color="#09899b"
      size="large"
      visible
      overlayColor="#454545"
      icon={{ name: "edit", color: "#fff" }}
      onPress= {() => props.navigation.navigate('Create Baseball')}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    background:{
      backgroundColor:'#286086'
    }, 
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    container: {
      borderBottomColor: "black",
      // borderBottomWidth: 2,
      paddingBottom:20,
      paddingTop: 13,
      marginTop:5,
      // marginBottom: 10,
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
      // marginTop: 5
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
      // height: 50, 
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
       backgroundColor: '#286086',
       borderRadius: 10,
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
      // justifyContent: 'space-between',
    },
    tinyLogo: {
      width: 100,
      height: 40,
    },
    photo: {
      width: 50,
      height: 50,
      borderRadius: 50,
       marginTop: 5
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
      // marginTop: 10,
      marginLeft: 10,
    },
    userName: { color: "black", fontWeight: "bold", fontSize:12, },
    userHandleAndTime: {
      color: "rgb(136, 153, 166)",
      fontWeight: "bold",
      //color: "#09899b",
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
      borderColor: "#09899b",
      borderTopWidth: 0.3,
      width:"95%",
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
        width:"100%",
        height: 300,
        // height: '50%',
        resizeMode: 'cover',
        maxHeight: 400,                         
        // maxWidth: '100%',
        // position: 'relative',
        // aspectRatio: 1, // <-- this
        // resizeMode: 'contain', //optional
        // height: 'auto',
        // resizeMode: 'contain',
        // flex: 1,
        // aspectRatio: 1,
        // height: undefined,
      },
  })