import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
// import userPhoto from '../assets/userPhoto.jpg'
import { CommentsScreen } from '../Screens';
import { commonStyles } from './commonStyles';
import { MaterialIcons,Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { colorAccent, colorWhite,colorBgInput} = commonStyles.vars;
export function Post({ post, isProfileScreen = true }) {
  const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
         <Image source={require('../assets/photo1.jpg')}
                style={styles.image}
            />
            <Text style={styles.picName}>{post.picName}</Text>
            <View style={styles.locationContainer}>
          <View style={styles.locationBox}>
            <Pressable
            onPress={()=>navigation.navigate('CommentsScreen')}
            >
              <Feather name="message-circle" size={24} style={[styles.messageCircle,post.commentCount===0&&{color:'#BDBDBD'}]} />
            </Pressable>
                    
            <Text style={styles.numberComments}>{post.commentCount}</Text>
            {isProfileScreen && <>
              <Feather name="thumbs-up" size={24} style={[styles.thumbsUp,post.likeCount===0&&{color:'#BDBDBD'}]} />
              <Text style={styles.numberComments}>
                {post.likeCount}</Text>
          </>}
            </View>
                <View style={styles.locationBox}>
                    <Feather name="map-pin" size={24} style={styles.iconMappin} />
            <Text style={styles.locality}>
              {post.locality}
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
        width:'100%',
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