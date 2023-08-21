import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { commonStyles } from '../components';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars;

export const CommentItem = ({ comment }) => {
    return (
        <View style={[styles.container, comment.isOwnComment
            ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }]}>
            <View>
                <Image source={comment.isOwnComment
                    ? require('../assets/avatar_own.jpg') : require('../assets//avatar_other.jpg')}
                    style={styles.avatar} />
            </View>
            <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>{comment.text}</Text>
                <Text style={styles.commentTimestamp}>
                    {comment.data}
                </Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 32,
    borderRadius: 8,
  },
   image: {
        width:'100%',
      borderRadius: 8,
    },
    avatar: {
    borderRadius: 20,
    marginRight: 8,
  },
  commentTextContainer: {
    flex: 1,
    borderRadius:6,
    marginHorizontal: 16,
    padding:16,
    backgroundColor: '#00000008',
  },
    commentText: {
    color:'#212121',
    fontSize: 16,
    lineHeight: 18,
  },
  commentTimestamp: {
    marginTop:10,
    fontSize: 10,
    color: '#BDBDBD',
    },
});
