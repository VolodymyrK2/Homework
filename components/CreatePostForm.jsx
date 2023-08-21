import React, {useState} from "react";
import { View, TextInput, StyleSheet, Pressable, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FormSubmitButton } from "../components";
import { commonStyles } from "./commonStyles";
import { useNavigation } from '@react-navigation/native';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars;
export const CreatePostForm = () => {
  const [namePhoto, setNamePhoto] = useState(null);
  const [locality, setLocality] = useState(null);
  const navigation = useNavigation();
  // const [isEmptyForm, setIsEmptyForm] = useState(true);
  //  if (!namePhoto || !locality) {
  //   setIsEmptyForm(true)
  // } else {
  //     setIsEmptyForm(false);
  //   }
  const isEmptyForm = !namePhoto || !locality;
  const handleSubmit = () => {

    if (isEmptyForm) {
      Alert.alert('Please fill in all fields');
      return;
    }
    console.log(`\n namePhoto: ${namePhoto}\n locality: ${locality}`);
    setLocality(null);
    setNamePhoto(null);
    navigation.navigate('PostsScreen');
}
  return (
    <View style={styles.container}>
          <TextInput
             value={namePhoto}
                onChangeText={setNamePhoto} 
                placeholderTextColor={styles.placeholder.color} 
                placeholder='Назва...'
                style={styles.input}
             
          />
          <View >
           <Feather name="map-pin" size={24} style={styles.iconMappin} />
          <TextInput
             value={locality}
                onChangeText={setLocality} 
                placeholderTextColor={styles.placeholder.color} 
                placeholder='Місцевість...'
                  style={[styles.input, { paddingLeft: 45 }] }
                        />
             
          </View>
          <FormSubmitButton
               text={'Опублікувати'}
              customStyle={isEmptyForm?styles.btnSubmitDisable: styles.btnSubmitEnable}
                handleSubmit={handleSubmit}
          />
         
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        color: '#212121',
      height: 50,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        borderWidth: 0, 
        borderColor: 'transparent',
        marginBottom: 14,
        paddingHorizontal: 16,
        ...commonStyles.fonts,
       
    },
    placeholder: {
       
        color: "#BDBDBD",
    },
    iconMappin: {
        color: '#BDBDBD',
        position: 'absolute',
        bottom: 30,
        left: 16,
    },
    btnSubmitDisable: {
        color:'#BDBDBD', 
        marginTop: 16,
        backgroundColor:'#F6F6F6',
    },
   btnSubmitEnable: {
        color:colorWhite, 
        marginTop: 16,
        backgroundColor:colorAccent,
    },
});

