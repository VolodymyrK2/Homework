import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import { RegistrationScreen, LoginScreen, PostsScreen, Home,CommentsScreen, CreatePostsScreen } from './Screens';


const MainStack = createStackNavigator();
export default function App() {
  
   const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
   });
   if (!fontsLoaded) {
    return null;
   }
    
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <MainStack.Navigator initialRouteName='RegistrationScreen' screenOptions={{ headerShown: false }} >
        <MainStack.Screen name='RegistrationScreen' component={RegistrationScreen}/>
        <MainStack.Screen name='LoginScreen' component={LoginScreen}  />
        <MainStack.Screen name='Home' component={Home} />
        <MainStack.Screen name='CreatePostsScreen' component={CreatePostsScreen}
        options={{headerShown: true}}

        />
        <MainStack.Screen name='CommentsScreen' component={CommentsScreen}
          options={{
            headerShown: true,
            title: "Коментарі",
             headerTitleAlign: 'center',
         
        headerStyle: {
             
          height: 88,
              borderBottomWidth: 0.5,
              borderBottomColor: '#BDBDBD',
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontSize: 17,
              lineHeight: 22,
              fontWeight:500,
              paddingTop:15,
          },
         
          }}/>
      </MainStack.Navigator>
      </NavigationContainer>
  );
}
  
