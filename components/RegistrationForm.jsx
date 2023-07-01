import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { commonStyles } from './commonStyles';

const { colorAccent, colorText, colorWhite, colorBgInput } = commonStyles.vars;
export function RegistrationForm({ isRegistrationScreen }) {
    const [isActiveInput, setActiveInput] = useState(null);
     
  const handleFocus = (id) => {
    setActiveInput(id);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };
    return (
        <View style = {styles.container}>
            {isRegistrationScreen && <TextInput
                placeholderTextColor={styles.placeholder.color}
                placeholder='Логін'
                style={[styles.input, isActiveInput === 1 && styles.focusedInput]}
                onFocus={() => handleFocus(1)}
                onBlur={handleBlur}
            >
            </TextInput>}
            <TextInput
               
                placeholderTextColor={styles.placeholder.color} 
                textContentType='emailAddress'
                placeholder='Адреса електронної пошти'
                style={[styles.input, isActiveInput===2 && styles.focusedInput]}
                onFocus={()=>handleFocus(2)}
                onBlur={handleBlur}
                >
            </TextInput>
            <View style={styles.passwordInputContainer}>
                <TextInput
                    placeholderTextColor={styles.placeholder.color} 
                    secureTextEntry={true}
                    textContentType= 'password'
                    placeholder='Пароль'
                    style={[styles.input, isActiveInput===3 && styles.focusedInput]}
                    onFocus={()=>handleFocus(3)}
                    onBlur={handleBlur}
                >
                </TextInput>
                <Pressable>
                    <Text style={styles.passwordText}>Показати</Text>
                </Pressable> 
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex:1,
        // width: '200%',
    },
    input: {
        ...commonStyles.fonts,
        color: colorText,
        width: '100%',
        height: 46,
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
        width: '100%',
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
