import React from 'react'
import userPhoto from '../assets/userPhoto.jpg'
import {Text,View, StyleSheet,Image,FlatList} from 'react-native';
import Post from '../components/Post';
import { useRoute } from '@react-navigation/native';


const postsData = [
  {
    id: '1', uri: null, picName: 'Ліс', locality: 'Ivano-Frankivsk Region, Ukraine',
    commentCount: 0, likeCount: 10, latitude: 0, longitude:0
  },
  {
    id: '2', uri: null, picName: 'Море', locality: 'Ivano-Frankivsk Region, Ukraine',
    commentCount: 10, likeCount: 5,latitude: 0, longitude:0
  },
  {
    id: '3', uri: null, picName: 'Вовки', locality: 'Ivano-Frankivsk Region, Ukraine',
    commentCount: 5, likeCount: 56, latitude: 0, longitude:0
  },
];
function PostsScreen() {
  const { params: { newPost} } = useRoute();
   if (newPost) {
    postsData.push(newPost);
  } 
  
  return (
    <View style={styles.container}>
         <View style={styles.userCard} >
          <Image source={userPhoto} />
          <View style={styles.userContacts}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
                 </View>
    </View>
      <FlatList
        data={postsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} isProfileScreen={false}/>}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop:32,
  backgroundColor:'#fff'
  },
    
  userCard: {
    flexDirection: 'row',
     alignItems: 'center', 
  },
  userContacts: {
    marginLeft: 8, 
  
  },
  userName: {
color:'#212121',    
fontWeight: 700,
fontSize: 13,
lineHeight: 15,
  },
  userEmail: {
    color:'#212121',    
fontWeight: 400,
fontSize: 11,
lineHeight: 13,
  },
})
export default PostsScreen