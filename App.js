import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import PostsScreen from './Screens/PostsScreen/PostsScreen';
export default function App() {
   const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
   });
   if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style='auto' />
      {/* <LoginScreen/> */}
      {/* <RegistrationScreen /> */}
      <PostsScreen/>
      </>
  );
}
  
