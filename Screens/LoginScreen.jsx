import bgImage from '../assets/bg.png';
import {SafeAreaView, Keyboard,TouchableWithoutFeedback,Platform, ImageBackground, Text,View, StyleSheet,KeyboardAvoidingView,StatusBar} from 'react-native';
import { RegistrationForm,commonStyles,FormSubmitButton,FormToggle } from '../components';
import { useState } from 'react';
import RegistrationScreen from './RegistrationScreen';

const { colorText, colorWhite} = commonStyles.vars; 

function LoginScreen() {
  const [isClickedSubmit, setIsClickedSubmit] = useState(false); 
 
   const handleSubmit = (isPressSubmit) => {
    setIsClickedSubmit(isPressSubmit);
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
       
        <View style={styles.container}>
        <KeyboardAvoidingView
           behavior={Platform.OS == "ios" ? "padding" : "height"}
           style={{width:'100%'}}
          >
           <Text style = {styles.title}>Увійти</Text>
              <RegistrationForm
                isRegistrationScreen={false}
                isClickedSubmit={isClickedSubmit}
                handleSubmit={handleSubmit}
              />
              <FormSubmitButton
                text={'Увійти'}
                customStyle={{ marginBottom: 15, color:colorWhite }}
                handleSubmit={() => {
                  setIsClickedSubmit(true);
                }}
              />
              <FormToggle
                text={'Немає акаунту? Зареєструватися'}
                routeName={'RegistrationScreen'}
              />
 </KeyboardAvoidingView> 
    </View>  
      </ImageBackground>
       </TouchableWithoutFeedback>
      </SafeAreaView>
  );
}
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 144,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        backgroundColor: colorWhite,
    },
   
    title: {
        textAlign:'center',
        color: colorText,
        marginTop: 25,
        marginBottom: 25,
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 600,
         },
      image: {
      flex: 1,
      justifyContent: 'flex-end',
      },    
  });
export default LoginScreen;