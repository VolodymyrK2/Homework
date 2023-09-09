import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Pressable,Alert } from 'react-native';
import commonStyles from './commonStyles';
import FormSubmitButton from './FormSubmitButton';
import { useNavigation } from '@react-navigation/native';
import { registerDB } from '../redux/auth/operations';
import { auth } from '../config';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars;
function RegistrationForm({isRegistrationScreen, isClickedSubmit}) {
    const [isActiveInput, setActiveInput] = useState(null);
    const [loginForm, setLoginForm] = useState(''); 
    const [emailForm, setEmailForm] = useState(''); 
    const [passwordForm, setPasswordForm] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const navigation = useNavigation();

    const resetForm = () => {
    setLoginForm('');
    setEmailForm('');
    setPasswordForm('');
    
  }  
    const handleSubmit= async () => {
        const isEmptyForm = isRegistrationScreen
            ? (loginForm === '' || emailForm === '' || passwordForm === '')
            : (emailForm === '' || passwordForm === '');
        if (isEmptyForm) {
            Alert.alert('Please fill in all fields');
            return;
        }
        try {
            // console.log('result', result);
            await createUserWithEmailAndPassword(auth, emailForm, passwordForm);
            // const result = await registerDB({ emailForm, passwordForm });
            
} catch (error) {
  console.error('Помилка реєстрації:', error);
}

        console.log(`\n Login: ${loginForm}\n Email: ${emailForm}\n Password: ${passwordForm}`);
        navigation.navigate('Home', {
            screen: 'PostsScreen',
                params: {newPost:null},
        });
        resetForm();
       };
    
    const handlePressShowButton = () => {
        setShowPassword(!showPassword);
  }  
  const handleFocus = (id) => {
    setActiveInput(id);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };
    return (
        <View style = {styles.container}>
            {isRegistrationScreen && <TextInput
                value={loginForm}
                onChangeText={setLoginForm} 
                placeholderTextColor={styles.placeholder.color}
                placeholder='Логін'
                style={[styles.input, isActiveInput === 1 && styles.focusedInput]}
                onFocus={() => handleFocus(1)}
                onBlur={handleBlur}
            >
            </TextInput>}
            <TextInput
                value={emailForm}
                onChangeText={setEmailForm} 
                placeholderTextColor={styles.placeholder.color} 
                keyboardType='email-address'
                textContentType='emailAddress'
                placeholder='Адреса електронної пошти'
                style={[styles.input, isActiveInput===2 && styles.focusedInput]}
                onFocus={()=>handleFocus(2)}
                onBlur={handleBlur}
                >
            </TextInput>
            <View style={styles.passwordInputContainer}>
                <TextInput
                    value={passwordForm}
                    onChangeText={setPasswordForm} 
                    placeholderTextColor={styles.placeholder.color} 
                    secureTextEntry={showPassword}
                    textContentType='password'
                    placeholder='Пароль'
                    style={[styles.input, isActiveInput===3 && styles.focusedInput]}
                    onFocus={()=>handleFocus(3)}
                    onBlur={handleBlur}
                >
                </TextInput>
                <Pressable onPress={handlePressShowButton}>
                    <Text style={styles.passwordText}>{showPassword ? 'Показати' : 'Приховати'}</Text>
                </Pressable> 
            </View>
             <FormSubmitButton
              text={isRegistrationScreen?'Зареєструватися':'Увійти'}
              customStyle={styles.btnSubmit}
                handleSubmit={handleSubmit}
               />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        ...commonStyles.fonts,
        color: colorText,
        height: 50,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 16,
        backgroundColor: colorBgInput,
    },
    placeholder: {
        color: '#BDBDBD',
    },
    passwordInputContainer: {
        position: 'relative',
        marginBottom: 25,
    },
    passwordText: {
        position: 'absolute',
        ...commonStyles.fonts,
        right: 0,
        bottom: 0,
        transform: [{ translateX: -16 }, { translateY: -28 }],
        color: '#1B4371',
    },
    focusedInput: {
        borderColor: colorAccent,
        backgroundColor: colorWhite,
        color: colorText,
    },
    btnSubmit: {
        marginBottom: 15,
        color: colorWhite
    }
});            
export default RegistrationForm;