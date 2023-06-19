
import { AntDesign } from '@expo/vector-icons'; 
import bgImage from '../../assets/bg.png';
import {ImageBackground, Text,View, StyleSheet, TextInput, Pressable,KeyboardAvoidingView,StatusBar} from 'react-native';

function LoginScreen() {
  
 return (
//    <View style={{ flex: 1 }}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}
        >
     
                 <Text style = {styles.title}>Увійти</Text>
                <TextInput
            style={styles.input}
            placeholderTextColor={styles.placeholder.color} 
                     textContentType='emailAddress'
                     placeholder = 'Адреса електронної пошти'>
         </TextInput>
         <View style={styles.passwordInputContainer}>
                <TextInput
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
           <Text style={styles.textBtn}>Увійти</Text>
         </Pressable> 
         <Pressable>
           <Text style={styles.textEnter}>Немає акаунту? Зареєструватися</Text>
           </Pressable>
          
             </KeyboardAvoidingView> 
              {/* <View>
      <View style={styles.line} />
    </View> */}
      </ImageBackground>
    // </View>
  );
}
  const styles = StyleSheet.create({
      container: {
          flex:1,
        //  alignItems: 'center',
          marginTop: 323,
        
          paddingBottom:144,
          paddingHorizontal: 16,
          borderTopLeftRadius: 25,
          borderTopRightRadius:25,
          backgroundColor: "#fff",
    },
   
   
    form: {
     flex:1,
      width: '100%',
      alignItems: 'center',
    },
    title: {
        textAlign:'center',
          color: '#212121',
          marginTop: 32,
          marginBottom: 32,
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
      },
    //   line: {
    //       position: 'absolute',
    //       bottom: 8,
    //       textAlign: 'center',
    //       transform: [{ translateX: 125 }],
    //       width: 134,
      
    //     height: 5,
    //     borderRadius: 100,
    //     backgroundColor:'#212121',
    // },
  });
export default LoginScreen