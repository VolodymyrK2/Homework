import React, { useState } from 'react';
import { View, TextInput, Pressable, FlatList, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/uk';
import commonStyles from '../components/commonStyles';
import CommentItem from '../components/CommentItem';

const commentsData = [
  { id: '1', text: 'Це виглядає дуже круто!', isOwnComment: false, data: '09 червня, 2020 | 08:40' },
  { id: '2', text: 'Я вражений цим дизайном.', isOwnComment: true,data: '09 червня, 2020 | 08:40' },
  { id: '3', text: 'Якщо додати ще можливостей, буде найкращий чат!', isOwnComment: false,data: '09 червня, 2020 | 08:40' },
];
const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars; 

const CommentsScreen = () => {
  const [inputText, setInputText] = useState('');
  const [comments, setComments] = useState(commentsData);

  const handleSendComment = () => {
    if (inputText.trim() !== '') {
      const newComment = {
        id: String(Date.now()),
        text: inputText,
        isOwnComment: true,
        data: String(moment().format('DD MMMM YYYY | H:mm')),
      };
      setComments(prevComments => [...prevComments, newComment]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/photo1.jpg')}
                style={styles.image}
            />
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CommentItem comment={item} />}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          placeholderTextColor = '#BDBDBD'
          value={inputText}
          onChangeText={setInputText}
        />
        <Pressable onPress={handleSendComment} style={styles.sendButton}>
          <AntDesign name="arrowup" size={24} style={styles.sendButtonIcon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop:32,
    backgroundColor: colorWhite,
      },
   image: {
        width:'100%',
      borderRadius: 8,
    },
  
  inputContainer: {
    flexDirection: 'row',
    paddingTop: 16,
    marginBottom:16,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor:'#F6F6F6',
    borderRadius: 25,
    marginRight: 10,
    ...commonStyles.fonts,
  },
  sendButton: {
    position: 'absolute',
    right: 18,
    bottom :8,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colorAccent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonIcon: {
    color: 'white',
  },
});

export default CommentsScreen;
