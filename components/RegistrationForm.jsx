import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, Pressable,Alert } from 'react-native';
import { commonStyles } from './commonStyles';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars;
export function RegistrationForm({isRegistrationScreen, isClickedSubmit,handleSubmit}) {
    const [isActiveInput, setActiveInput] = useState(null);
    const [loginForm, setLoginForm] = useState(''); 
    const [emailForm, setEmailForm] = useState(''); 
    const [passwordForm, setPasswordForm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const resetForm = () => {
    setLoginForm('');
    setEmailForm('');
    setPasswordForm('');
    
  }  
    useEffect(() => {
        const isEmptyForm = isRegistrationScreen ? (loginForm === '' || emailForm === '' || passwordForm === ''): (emailForm === '' || passwordForm === '');
        if (!isClickedSubmit) {
            return
        }
        if (isEmptyForm && isClickedSubmit) {
            Alert.alert('Please fill in all fields');
            handleSubmit(false);
            return;
        }
        
        console.log(`\n Login: ${loginForm}\n Email: ${emailForm}\n Password: ${passwordForm}`);
        handleSubmit(false);
        resetForm();
        
    }, [isClickedSubmit,loginForm,emailForm,passwordForm]);
    
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
                    secureTextEntry={!showPassword}
                    textContentType='password'
                    placeholder='Пароль'
                    style={[styles.input, isActiveInput===3 && styles.focusedInput]}
                    onFocus={()=>handleFocus(3)}
                    onBlur={handleBlur}
                >
                </TextInput>
                <Pressable onPress={handlePressShowButton}>
                    <Text style={styles.passwordText}>Показати</Text>
                </Pressable> 
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex:1,
        width: '100%',
    },
    input: {
        ...commonStyles.fonts,
        color: colorText,
        // width: '100%',
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
        // width: '100%',
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
});            
