import React from "react";
import { MaterialIcons,Feather } from '@expo/vector-icons';
import {
  TouchableWithoutFeedback, Pressable,
  Keyboard, KeyboardAvoidingView, View, Text, StyleSheet
} from "react-native";
import { CreatePostForm,commonStyles} from '../components';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars; 

const CreatePostsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.contentBlock}>
          <View style={styles.wrapperCamera}>
              <MaterialIcons name="camera-alt" size={24} color='#BDBDBD'/>
          </View>
        </View>
        <View style={styles.toDoTextContainer}>
        <Text style={styles.toDoText}>Завантажте фото</Text>
        </View>
        <CreatePostForm />
         <Pressable style={styles.btnTrash}>
              <Feather name="trash-2" size={24} color='#BDBDBD' />
              </Pressable>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal:16,
    backgroundColor: colorWhite,
    ...commonStyles.fonts,
  },
  contentBlock: {
    marginTop:32,
    height: 230,
    width: '100%',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    alignItems: "center",
    justifyContent: "center",
    
  },
  wrapperCamera: {
    color: colorBgInput,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  toDoText: {
    color: '#BDBDBD',
    ...commonStyles.fonts,
    },
  toDoTextContainer: {
    marginTop: 8,
    marginLeft: -220,
    marginBottom:28,
  },
   btnTrash: {
     marginTop: 110, 
     width: 70,
     height: 40,
     backgroundColor: '#F6F6F6',
     alignItems: "center",
     justifyContent: "center",
    borderRadius: 20,
    },
});

export default CreatePostsScreen;
