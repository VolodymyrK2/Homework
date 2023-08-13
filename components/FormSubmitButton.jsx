import { Text, StyleSheet, Pressable } from 'react-native';
import { commonStyles } from './commonStyles';

const { colorAccent, colorWhite} = commonStyles.vars;
export function FormSubmitButton({text, customStyle, handleSubmit}) {
  return (
    <Pressable
      style={[styles.container, customStyle]}
      onPress = {handleSubmit} 
    >
          <Text style={styles.text}>{text}</Text>
     </Pressable> 
  )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      width: '100%',
      height: 51,
      backgroundColor: colorAccent,
      borderRadius: 100,
    },
    text: {
     color:colorWhite,
      ...commonStyles.fonts,
     textAlign:'center',
    },
})
