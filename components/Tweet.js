import { Text, View, StyleSheet,TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Tweet() {
  return (
    <ScrollView>
    <TouchableHighlight >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.photoContainer}>
                <View style={styles.innerPhotoContainer}>
                  <TouchableOpacity>
                  <Image
                    style={styles.photo}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.info}>

                <View style={styles.userDetails}>
                  <Text style={styles.userName}>THE ROCK
                    <Text style={styles.userHandleAndTime}>@gillykim · 8:17</Text>
                  </Text>
                </View>
              <View style={styles.tweetTextContainer}>
                <Text style={styles.tweetText}>Here we go. We have our first FunZone tweet.
                 It is going to be a fun 
                experiecs for all sports livers, from footbal all the 
                way to f1, baseball all the way to Golf. Enjoy Guys!!! </Text>

              </View>
              <View style={styles.tweetActionsContainer}>
                <TouchableOpacity style={styles.commentButton}>
                  <MaterialCommunityIcons name="repeat" style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                <Text style={styles.commentsCount}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.retweetButton}>
                  {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="repeat" size={25} color={'rgb(136, 153, 166)'} />
                  <Text style={[styles.retweetButtonIcon, {color:"rgb(136, 153, 166)",fontWeight:"bold"}]}>45</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeButton}>
                <MaterialCommunityIcons name="cards-heart-outline" size={20} color={'rgb(136, 153, 166)'} />
                <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>289</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>

                  {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />

                </TouchableOpacity>
              </View>
              
              </View>
            </View>
        </View>
    </TouchableHighlight>



    <TouchableHighlight >
        <View style={styles.container}>
             
            <View style={styles.isReplyContainer}>
            
                <View style={{flex:0.23, borderColor:"red", borderWidth:0, alignItems:"flex-end"}}>
                  <MaterialCommunityIcons name="repeat" size={22} color={'rgb(136, 153, 166)'} />
                </View>
                <Text style={{flex:0.5, color:"rgb(136, 153, 166)"}}> Retweeted</Text>
            </View>
           
            <View style={styles.innerContainer}>
            
              <View style={styles.photoContainer}>
                <View style={styles.innerPhotoContainer}>
                  <TouchableOpacity>
                  <Image
                    style={styles.photo}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.info}>

                <View style={styles.userDetails}>
                  <Text style={styles.userName}>THE ROCK
                    <Text style={styles.userHandleAndTime}>@gillykim · 8:17</Text>
                  </Text>
                </View>
              <View style={styles.tweetTextContainer}>
                <Text style={styles.tweetText}>Here we go. We have our first FunZone tweet.
                 It is going to be a fun 
                experiecs for all sports livers, from footbal all the 
                way to f1, baseball all the way to Golf. Enjoy Guys!!! </Text>

              </View>
              <View style={styles.tweetActionsContainer}>
                <TouchableOpacity style={styles.commentButton}>
                  <MaterialCommunityIcons name="repeat" style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                <Text style={styles.commentsCount}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.retweetButton}>
                  {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="repeat" size={25} color={'rgb(136, 153, 166)'} />
                  <Text style={[styles.retweetButtonIcon, {color:"rgb(136, 153, 166)",fontWeight:"bold"}]}>45</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeButton}>
                <MaterialCommunityIcons name="cards-heart-outline" size={20} color={'rgb(136, 153, 166)'} />
                <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>289</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>

                  {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />

                </TouchableOpacity>
              </View>
              
              </View>
            </View>
        </View>
    </TouchableHighlight>
    <TouchableHighlight >
        <View style={styles.container}>
             
            <View style={styles.isReplyContainer}>
            
                <View style={{flex:0.23, borderColor:"red", borderWidth:0, alignItems:"flex-end"}}>
                  <MaterialCommunityIcons name="repeat" size={22} color={'rgb(136, 153, 166)'} />
                </View>
                <Text style={{flex:0.5, color:"rgb(136, 153, 166)"}}> Retweeted</Text>
            </View>
           
            <View style={styles.innerContainer}>
            
              <View style={styles.photoContainer}>
                <View style={styles.innerPhotoContainer}>
                  <TouchableOpacity>
                  <Image
                    style={styles.photo}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.info}>

                <View style={styles.userDetails}>
                  <Text style={styles.userName}>Deno KO
                    <Text style={styles.userHandleAndTime}>@soberkd · 8:17</Text>
                  </Text>
                </View>
              <View style={styles.tweetTextContainer}>
                <Text style={styles.tweetText}>Here we go. We have our first FunZone tweet.
                 It is going to be a fun 
                experiecs for all sports livers, from footbal all the 
                way to f1, baseball all the way to Golf. Enjoy Guys!!! </Text>

              </View>
              <View style={styles.tweetActionsContainer}>
                <TouchableOpacity style={styles.commentButton}>
                  <MaterialCommunityIcons name="repeat" style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                <Text style={styles.commentsCount}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.retweetButton}>
                  {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="repeat" size={25} color={'rgb(136, 153, 166)'} />
                  <Text style={[styles.retweetButtonIcon, {color:"rgb(136, 153, 166)",fontWeight:"bold"}]}>45</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name="cards-heart-outline" size={20} color={'rgb(136, 153, 166)'} />
                <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>89</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>

                  {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />

                </TouchableOpacity>
              </View>
              
              </View>
            </View>
        </View>
    </TouchableHighlight>

    
    <TouchableHighlight >
        <View style={styles.container}>           
            <View style={styles.innerContainer}>
            
                <View style={styles.photoContainer}>
                    <View style={styles.innerPhotoContainer}>
                        <TouchableOpacity>
                            <Image
                                style={styles.photo}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.info}>
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>FootballPorn
                    <Text style={styles.userHandleAndTime}> @comicfootball · 8:17</Text>
                  </Text>
                </View>
                <View style={styles.tweetTextContainer}>
                    <Text style={styles.tweetText}>9️⃣ days until the Premier League returns.
                        The same number of goals Liverpool put past Manchester United last season 💀 </Text>
                </View>
                <View style={styles.tweetActionsContainer}>
                    <TouchableOpacity style={styles.commentButton}>
                        <MaterialCommunityIcons name="repeat" style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                        <Text style={styles.commentsCount}>278</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.retweetButton}>
                        <MaterialCommunityIcons name="repeat" size={25} color={'rgb(136, 153, 166)'} />
                        <Text style={[styles.retweetButtonIcon, {color:"rgb(136, 153, 166)",fontWeight:"bold"}]}>299</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="cards-heart-outline" size={20} color={'rgb(136, 153, 166)'} />
                        <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>2008</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton}>
                        <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    </TouchableHighlight>



    <TouchableHighlight >
        <View style={styles.container}>
             
            <View style={styles.isReplyContainer}>
            
                <View style={{flex:0.23, borderColor:"red", borderWidth:0, alignItems:"flex-end"}}>
                  <MaterialCommunityIcons name="repeat" size={22} color={'rgb(136, 153, 166)'} />
                </View>
                <Text style={{flex:0.5, color:"rgb(136, 153, 166)"}}> Retweeted</Text>
            </View>
           
            <View style={styles.innerContainer}>
            
              <View style={styles.photoContainer}>
                <View style={styles.innerPhotoContainer}>
                  <TouchableOpacity>
                  <Image
                    style={styles.photo}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.info}>

                <View style={styles.userDetails}>
                  <Text style={styles.userName}>Mesh
                    <Text style={styles.userHandleAndTime}>@crispy · 8:17</Text>
                  </Text>
                </View>
              <View style={styles.tweetTextContainer}>
                <Text style={styles.tweetText}>Here we go. We have our first FunZone tweet.
                 It is going to be a fun 
                experiecs for all sports livers, from footbal all the 
                way to f1, baseball all the way to Golf. Enjoy Guys!!! </Text>
                <Image
                    style={styles.stretch}
                    source={require('../stad.jpg')}
      />

              </View>
              <View style={styles.tweetActionsContainer}>
                <TouchableOpacity style={styles.commentButton}>
                  <MaterialCommunityIcons name="repeat" style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                <Text style={styles.commentsCount}>20</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.retweetButton}>
                  {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="repeat" size={25} color={'rgb(136, 153, 166)'} />
                  <Text style={[styles.retweetButtonIcon, {color:"rgb(136, 153, 166)",fontWeight:"bold"}]}>45</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name="cards-heart-outline" size={20} color={'rgb(136, 153, 166)'} />
                <Text style={styles.likeButtonIcon}>289</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>

                  {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                  <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />

                </TouchableOpacity>
              </View>
              
              </View>
            </View>
        </View>
    </TouchableHighlight>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      borderBottomColor: "black",
      borderBottomWidth: 0.5,
      flexDirection: "column",
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
      flexDirection: "row",
      borderWidth: 0,
      height: "auto"
    },
    photoContainer: {
      borderColor: "yellow",
      flexDirection: "column",
      borderWidth: 0
    },
    innerPhotoContainer: { height: 100, alignItems: "center" },
    photo: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginTop: 15
    },
    info: {
      flex: 0.77,
      borderColor: "yellow",
      flexDirection: "column",
      borderWidth: 0
    },
    userDetails: {
      borderColor: "blue",
      borderWidth: 0,
      marginBottom: 5
    },
    userName: { color: "black", fontWeight: "bold" },
    userHandleAndTime: {
      color: "rgb(136, 153, 166)",
      marginLeft: 5
    },
    tweetTextContainer: { borderColor: "blue", borderWidth: 0 },
    tweetText: { color: "black", paddingRight: 10 },
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
      left: 27,
    },
    stretch: {
        width: 250,
        height: 300,
        resizeMode: 'stretch',
      },
  })
  ;
  