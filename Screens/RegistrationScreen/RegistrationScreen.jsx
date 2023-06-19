import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import bgImage from '../../assets/bg.png';
import {ImageBackground, Text,View, StyleSheet, TextInput, Pressable,KeyboardAvoidingView,StatusBar} from 'react-native';

function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [borderColor, setBorderColor] = useState('black');
  const [textColor, setTextColor] = useState('black');
  const handleInputChange = (text) => {
   
    if (text.length > 0) {
      setBorderColor('#FF6C00');
      setTextColor('#212121');
    } else {
      setBorderColor('#E8E8E8');
      setTextColor('#BDBDBD');
    }
  };
  console.log(isShowKeyboard);
 return (
  //  <View style={{ flex: 1 }}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}
        //  style={{flex:1}}
        //  style={{ ...styles.container, marginTop: isShowKeyboard ? 147 : 263 }}
       >
         {/* <View
           style={{ ...styles.container, marginTop: isShowKeyboard ? 147 : 263 }}
           style={styles.container}
         > */}
        
         <View style={styles.frameAvatar}>
           <AntDesign name="pluscircleo" size={24} 
             style={styles.iconAddAvatar } />
         </View>
                 <Text style = {styles.title}>Реєстрація</Text>
                 <TextInput
           placeholderTextColor={styles.placeholder.color}       
           placeholder='Логін'
           style = {styles.input}
          //  style={[styles.input, { borderColor: borderColor, color: textColor }]}
          //  onChangeText={handleInputChange}
          //  onFocus={()=>setIsShowKeyboard(true)}
         >
          </TextInput>
                 <TextInput
          //  style={[styles.input, { borderColor: borderColor, color: textColor }]}
          //  onChangeText={handleInputChange}
          //  onFocus={()=>setIsShowKeyboard(true)}
           style={styles.input}
            placeholderTextColor={styles.placeholder.color} 
                     textContentType='emailAddress'
                     placeholder = 'Адреса електронної пошти'>
         </TextInput>
         <View style={styles.passwordInputContainer}>
                <TextInput
          //    style={[styles.input, { borderColor: borderColor, color: textColor }]}
          //  onChangeText={handleInputChange}
          //    onFocus={()=>setIsShowKeyboard(true)}
              style={styles.input}
            placeholderTextColor={styles.placeholder.color} 
                     secureTextEntry={true}
                     textContentType= 'password'
                     placeholder='Пароль'>
         </TextInput>
         <Pressable>
           <Text style={styles.passwordText}>Показати</Text>
         </Pressable>
           </View> 
        
         <Pressable style={styles.registrationBtn}>
           <Text style={styles.textBtn}>Зареєструватися</Text>
         </Pressable> 
         <Pressable>
           <Text style={styles.textEnter}>Вже є акаунт? Увійти</Text>
           </Pressable>
           
         {/* </View> */}
           </KeyboardAvoidingView> 
      </ImageBackground>
    // </View>
  );
}
  const styles = StyleSheet.create({
      container: {
    
          flex: 1,
          alignItems: 'center',
          marginTop: 263,
         paddingHorizontal: 16,
          borderTopLeftRadius: 25,
        borderTopRightRadius:25,
          backgroundColor: "#fff",
    },
    frameAvatar: {
      position: 'absolute',
      top: -60,
      
      backgroundColor:'#F6F6F6',
      borderRadius:16,
      width: 120,
      height:120,
    },
    iconAddAvatar: {
    position: 'absolute',
    right: -(25 / 2),
      bottom: 16,
      borderRadius: 50,
      backgroundColor: '#FFFFFF',
    color: '#FF6C00',
    },
    form: {
     flex:1,
      width: '100%',
      alignItems: 'center',
    },
    title: {
        textAlign:'center',
          color: '#212121',
          marginTop: 92,
          marginBottom: 25,
          fontFamily: 'Roboto',
           fontSize: 30,
            fontWeight: 600,
         },
    image: {
      flex: 1,
      justifyContent: 'center',
      },
    
      input: {
          color:'#212121',
        fontFamily: 'Roboto',
        
       fontSize: 16,
       width: '100%',
    height: 46,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 15,
          paddingHorizontal: 16,
    backgroundColor:'#F6F6F6',
    },
    placeholder: {
       color:'#BDBDBD',
     }, 
    passwordInputContainer: {
      position: 'relative', 
      width: '100%',
       marginBottom:25,
    
    },
    passwordText: {
        position: 'absolute',
      fontSize: 16,
      right: 0,
      bottom:0,
        transform: [{ translateX: -16},{translateY:-26}],
       
        color: '#1B4371',
    }, 
    registrationBtn: {
      justifyContent: 'center',
      width: '100%',
      height: 48,
      marginBottom:15,
      backgroundColor: '#FF6C00',
      borderRadius: 100,
    },
    textBtn: {
     color:'#fff',
      fontSize: 16,
     textAlign:'center',
    },
    textEnter: {
       fontSize: 16,
      color:'#1B4371',
      textAlign:'center',
    }
  });
export default RegistrationScreen