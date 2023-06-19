import React from 'react'
import userPhoto from '../../assets/userPhoto.jpg'
import {Text,View, StyleSheet, Pressable,StatusBar,Image} from 'react-native';
import { Feather,Ionicons,AntDesign } from '@expo/vector-icons';
function PostsScreen() {
  return (
    <View style={styles.container}>
     
      <View style ={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <Feather name="log-out" size={24}
          style={styles.iconLogoutHeader} />
      </View>
      <View style={styles.postsList}>
        <View style={styles.userCard} >
          <Image source={userPhoto} />
          <View style={styles.userContacts}>
          <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
            </View>
        </View>
      </View>
      <View style={styles.tabBar}>
        <Ionicons name="grid-outline" size={24} color="#212121" />
        <Pressable style={styles.plusBtn}>
           <AntDesign name="plus" size={24} color="#fff" />
        </Pressable>
        <Feather name="user" size={24} color="#212121" />
      
      </View> 
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  justifyContent:'space-between',
  },
  header: {
    height: 88,
    paddingTop: 55,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BDBDBD',
   
  },
  title: {
     color: '#212121',
    fontSize: 17,
    lineHeight: 22,
    fontWeight:500,
    textAlign:'center',
  },
  iconLogoutHeader: {
    position: 'absolute',
    right: 10,
    bottom:10,
    color: '#BDBDBD',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    height: 88,
    paddingTop:19,
    borderTopWidth: 0.5,
    borderTopColor: '#BDBDBD',
  },
  plusBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    color: '#fff',
    backgroundColor: '#FF6C00',
    borderRadius: 20,
    marginLeft: 31,
    marginRight:31,
  },
  postsList: {
    flex:1,
  paddingTop:32, 
  paddingLeft:10
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