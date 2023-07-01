import { AntDesign } from '@expo/vector-icons'; 
import bgImage from '../../assets/bg.png';
import {ImageBackground, Text,View, StyleSheet,KeyboardAvoidingView,StatusBar} from 'react-native';
import { RegistrationForm,commonStyles,FormSubmitButton,FormToggle } from '../../components/index';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars; 

function LoginScreen() {

  return (
   <View style={{flex:1,justifyContent: "flex-end"}}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
           style={{width:'100%'}}
          >
           
            <Text style = {styles.title}>Увійти</Text>
              <RegistrationForm isRegistrationScreen={false} />
             
        </KeyboardAvoidingView> 
          <FormSubmitButton text={'Увійти'} customStyle={{marginBottom:15}}/>
            <FormToggle text={'Немає акаунту? Зареєструватися'} />
        </View>  
      </ImageBackground>
   </View>
  );
}
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 323,
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
      justifyContent: 'center',
      },    
  });
export default LoginScreen