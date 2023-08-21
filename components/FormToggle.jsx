import { Text, StyleSheet, Pressable } from 'react-native';
import { commonStyles } from './commonStyles';
import { useNavigation } from '@react-navigation/native';

const { colorAccent, colorWhite} = commonStyles.vars;
export function FormToggle({ text, routeName }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(routeName)}
    >
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