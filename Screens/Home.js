// Home.js

import React from 'react';

import { StyleSheet, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from './ProfileScreen';
import CreatePostsScreen from './CreatePostsScreen';

import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  
  return (
     <Tabs.Navigator
      initialRouteName='PostsScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;
          
          if (route.name === "PostsScreen") {
            iconComponent = <Ionicons name="grid-outline" size={size} color={color} />
          } else if (route.name === "CreatePostsScreen") {
            iconComponent = <AntDesign name="plus" size={size} color={color} />
          } else if (route.name === "ProfileScreen") {
            iconComponent = <Feather name="user" size={size} color={color} />
                        } 

          return iconComponent;
        },
        tabBarShowLabel:false,
        tabBarActiveBackgroundColor: '#FF6C00',  
        tabBarActiveTintColor: '#ffffff', 
        tabBarInactiveTintColor: '#212121CC', 
        headerShown: true,

        tabBarStyle: {
          height: 83,
          paddingTop: 10,
          paddingHorizontal: 40,
        },

        tabBarItemStyle: {
          borderRadius: 20,
          height: 40,
          width: 70,
        },
          
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
      })}
      
    > 
      <Tabs.Screen name="PostsScreen" component={PostsScreen}
        options={{
          title: 'Публікації',
             headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('LoginScreen')}
          >
              <Feather name="log-out" size={24}
                style={styles.iconLogoutHeader} />
             </Pressable> 
            ),
        }} 
      />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen}
        options={{
        tabBarStyle: {display:'none'},
        title: 'Створити публікацію',
         headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('PostsScreen',{newPost: null})}>
              <Ionicons name="arrow-back" size={24} style={styles.iconBackHeader} />
            </Pressable>
          ),
     }} 

      />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen}
      options={{headerShown:false}}
      />
      </Tabs.Navigator>
     
  );
};

const styles = StyleSheet.create({
  
  iconLogoutHeader: {
    position: 'absolute',
    right: 10,
    bottom:-20,
    color: '#BDBDBD',
  },
  iconBackHeader: {
    paddingTop: 15,
    marginLeft: 16, 
    color: '#212121CC', 

  },
});

export default Home;
