import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import Home from './Screens/Home';
import CommentsScreen from './Screens/CommentsScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import MapScreen from './Screens/MapScreen';
import Snapshot from './components/Snapshot';

const MainStack = createStackNavigator();
export default function App() {
  
   const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
   });
   if (!fontsLoaded) {
    return null;
   }
    
  return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <StatusBar style='auto' />
      <MainStack.Navigator initialRouteName='RegistrationScreen' screenOptions={{ headerShown: false }} >
        <MainStack.Screen name='RegistrationScreen' component={RegistrationScreen}/>
        <MainStack.Screen name='LoginScreen' component={LoginScreen}  />
        <MainStack.Screen name='Home' component={Home} />
        <MainStack.Screen name='MapScreen' component={MapScreen}
          options={{
            headerShown: true,
            title: "Мапа",
            headerTitleAlign: 'center',
          }} />
        <MainStack.Screen name='Snapshot' component={Snapshot}/>
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
      </PersistGate>
      </Provider>
  );
}
  
