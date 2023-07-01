import { AntDesign } from '@expo/vector-icons'; 
import bgImage from '../../assets/bg.png';
import {ImageBackground, Text,View, StyleSheet,KeyboardAvoidingView,StatusBar} from 'react-native';
import { RegistrationForm,commonStyles,FormSubmitButton,FormToggle } from '../../components/index';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars; 

function RegistrationScreen() {

  return (
   <View style={{flex:1,justifyContent: "flex-end"}}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
           style={{width:'100%'}}
        >
            <View style={styles.frameAvatar}>
                <AntDesign name="pluscircleo" size={24} 
                  style={styles.iconAddAvatar } />
            </View>
              <Text style = {styles.title}>Реєстрація</Text>
              <RegistrationForm isRegistrationScreen={'true'} />
        </KeyboardAvoidingView> 
          <FormSubmitButton text={'Зареєструватися'} customStyle={{marginBottom:15}}/>
            <FormToggle text={'Вже є акаунт? Увійти'} />
        </View>  
      </ImageBackground>
   </View>
  );
}
  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 263,
      paddingHorizontal: 16,
        paddingBottom: 70,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        backgroundColor: colorWhite,
    },
    frameAvatar: {
      position: 'absolute',
      top: -60,
      left: '50%',
      transform: [{ translateX: -60 }],
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
      justifyContent: 'center',
      },    
  });
export default RegistrationScreen