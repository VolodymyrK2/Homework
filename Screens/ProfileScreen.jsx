import React from 'react'
import avatarPhoto from '../assets/avatar.jpg'
import bgImage from '../assets/bg.png';
import { Feather, Entypo } from '@expo/vector-icons'; 
import { FlatList, Pressable, Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Post from '../components/Post';
import commonStyles from '../components/commonStyles';
import { useNavigation} from '@react-navigation/native';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars; 
const postsData = [
  {
    id: '1', uri: null, picName: 'Ліс', locality: 'Ukraine',
    commentCount: 0, likeCount: 10, latitude: 0, longitude:0
  },
  {
    id: '2', uri: null, picName: 'Море', locality: 'Ukraine',
    commentCount: 10, likeCount: 5,latitude: 0, longitude:0
  },
  {
    id: '3', uri: null, picName: 'Вовки', locality: 'Ukraine',
    commentCount: 5, likeCount: 56, latitude: 0, longitude:0
  },
];
function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
       <View style={styles.frameAvatar}>
          <Entypo name="cross" size={24} 
            style={styles.iconAddAvatar} />
          <Image source={avatarPhoto} style={{borderRadius:16}} />
      </View>
      <Pressable
        onPress={() => navigation.navigate('LoginScreen')}
      style={styles.btnLogout}
      >
              <Feather name="log-out" size={24} color='#BDBDBD' />
             </Pressable> 
          
    <View style={styles.container}>
      
      <Text style = {styles.title}>Natali Romanova</Text>
        <FlatList
        data={postsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} />}
      /> 
     </View>
      </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop:92,
    marginTop: 147,
    borderTopLeftRadius: 25,
    borderTopRightRadius :25,
    backgroundColor: '#fff',
  },
   frameAvatar: {
      position: 'absolute',
      top: 85,
      left: '50%',
      transform: [{ translateX: -50 }],
      backgroundColor:'#000',
      borderRadius:16,
      width: 120,
     height: 120,
     zIndex:1,
   
    },
    iconAddAvatar: {
    position: 'absolute',
    right: -(25 / 2),
    bottom: 16,
    borderRadius: 50,
    backgroundColor: colorWhite,
    color: "#BDBDBD",
    zIndex:2,
  }, 
  title: {
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
    alignSelf: "center",
    },
  btnLogout: {
    position: 'absolute',
    right: 16,
    top:165,
    zIndex:2,
  },

  image: {
      flex: 1,
      justifyContent: 'flex-end',
      },    
})
export default ProfileScreen;