import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Header  as HeaderRNE, HeaderProps, Icon  } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tweet from '../components/Tweet';
import { useNavigation} from '@react-navigation/native';



export default function Home() {
  const navigation =useNavigation();
  return (
    <SafeAreaProvider>
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
    <Tweet />
  </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// export default () => {
//   return (
//     <Header
//       backgroundImageStyle={{}}
//       barStyle="default"
//       centerComponent={{
//         text: "MY TITLE",
//         style: { color: "#fff" }
//       }}
//       centerContainerStyle={{}}
//       containerStyle={{ width: 350 }}
//       leftComponent={{ icon: "menu", color: "#fff" }}
//       leftContainerStyle={{}}
//       linearGradientProps={{}}
//       placement="center"
//       rightComponent={{ icon: "home", color: "#fff" }}
//       rightContainerStyle={{}}npm install react-native-safe-area-context
//       statusBarProps={{}}
//     />
//   );
// }