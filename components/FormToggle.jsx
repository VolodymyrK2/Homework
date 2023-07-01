import { Text, StyleSheet, Pressable } from 'react-native';
import { commonStyles } from './commonStyles';

const { colorAccent, colorWhite} = commonStyles.vars;
export function FormToggle({text}) {
  return (
     <Pressable>
          <Text style={styles.textEnter}>{text}</Text>
     </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
     
    },
    textEnter: {
      ...commonStyles.fonts,
      color:'#1B4371',
      textAlign: 'center',
        }
})