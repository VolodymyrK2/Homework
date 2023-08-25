import { AntDesign } from '@expo/vector-icons'; 
import bgImage from '../assets/bg.png';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
}
  from 'react-native';
import RegistrationForm from '../components/RegistrationForm';
import commonStyles from '../components/commonStyles';
 import FormToggle from '../components/FormToggle';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars; 

function RegistrationScreen() {

   return (
   <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
       <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
        <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={{width:'100%'}}
        >
            <View style={styles.frameAvatar}>
                <AntDesign name="pluscircleo" size={24} 
                  style={styles.iconAddAvatar } />
              </View>
              
              <Text style = {styles.title}>Реєстрація</Text>
            <RegistrationForm
              isRegistrationScreen={'true'}
              />
           <View style={styles.containerButtons}>
            <FormToggle
                text={'Вже є акаунт? Увійти'}
                routeName={'LoginScreen'}
              />
             </View>   
            </KeyboardAvoidingView>      
          </View>  
        
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
  const styles = StyleSheet.create({
    container: {
      width:'100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 78,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        backgroundColor: colorWhite,
    },
    containerButtons: {
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: colorWhite,
    },
    frameAvatar: {
      position: 'absolute',
      top: -60,
      left: '50%',
      transform: [{ translateX: -50 }],
      backgroundColor:colorBgInput,
      borderRadius:16,
      width: 120,
      height:120,
    },
    iconAddAvatar: {
    position: 'absolute',
    right: -(25 / 2),
    bottom: 16,
    borderRadius: 50,
    backgroundColor: colorWhite,
    color: colorAccent,
    },
    title: {
        textAlign:'center',
        color: colorText,
        marginTop: 92,
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
export default RegistrationScreen