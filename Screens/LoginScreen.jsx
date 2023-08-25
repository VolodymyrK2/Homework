import bgImage from '../assets/bg.png';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Platform, ImageBackground, Text, View, StyleSheet, KeyboardAvoidingView, StatusBar } from 'react-native';
import RegistrationForm from '../components/RegistrationForm';
import commonStyles from '../components/commonStyles';
import FormToggle from '../components/FormToggle';

const { colorText, colorWhite} = commonStyles.vars; 

function LoginScreen() {
   
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