import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
import commonStyles from './commonStyles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { colorAccent, colorWhite,colorBgInput} = commonStyles.vars;
function Post({ post, isProfileScreen = true }) {
  const navigation = useNavigation(); 
  const {id, uri, picName, locality,  commentCount, likeCount, latitude, longitude} =post
    return (
      <View style={styles.container}>
            < Image 
        source={uri?{uri: uri}:require('../assets/photo1.jpg')}
          style={styles.image}
        />
            <Text style={styles.picName}>{picName}</Text>
            <View style={styles.locationContainer}>
          <View style={styles.locationBox}>
            <Pressable
            onPress={()=>navigation.navigate('CommentsScreen')}
            >
              <Feather name="message-circle" size={24} style={[styles.messageCircle,post.commentCount===0&&{color:'#BDBDBD'}]} />
            </Pressable>
                    
            <Text style={styles.numberComments}>{commentCount}</Text>
            {isProfileScreen && <>
              <Feather name="thumbs-up" size={24} style={[styles.thumbsUp,likeCount===0&&{color:'#BDBDBD'}]} />
              <Text style={styles.numberComments}>
                {likeCount}</Text>
          </>}
            </View>
          <View style={styles.locationBox}>
            <Pressable
              onPress={() => navigation.navigate('MapScreen',{latitude: latitude, longitude: longitude})}
            >
              <Feather name="map-pin" size={24} style={styles.iconMappin} />
              </Pressable>
            <Text style={styles.locality}>
              {locality}
            </Text>
                </View>
                   
            </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
     container: {
    flex: 1,
    alignItems: "center",
    marginTop:32,
    backgroundColor: colorWhite,
    },

  picName: {
    color: '#212121',
      ...commonStyles.fonts,
      fontWeight: 500,
    marginTop: 8,
      width:'100%',
    },
    image: {
      width: '100%',
      height: 240,
      borderRadius: 8,
    },
    locationContainer: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#BDBDBD',
       marginTop:11,
  },
    locationBox: {
    alignItems: 'center',
    flexDirection: 'row',
    },
    messageCircle: {
      color:colorAccent, 
  },
    thumbsUp:{
      color: colorAccent,
      marginLeft:24,
    },
    numberComments: {
        color: '#BDBDBD',
        ...commonStyles.fonts,
        marginLeft:4,
  },
  
    iconMappin: {
       color: '#BDBDBD',
    },
    locality: {
      color:'#212121',
      marginLeft: 4,
        textDecorationLine: 'underline',
      ...commonStyles.fonts,
    }
})
export default Post;