import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import PostsScreen from './Screens/PostsScreen/PostsScreen';
import Example from './components/Example';
export default function App() {
  
   const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
   });
   if (!fontsLoaded) {
    return null;
   }
    
  return (
    <>
      <StatusBar style='auto' />
{/* <Example/> */}
      <LoginScreen/>
      {/* <RegistrationScreen/> */}
      {/* <PostsScreen/> */}
      </>
  );
}
  
