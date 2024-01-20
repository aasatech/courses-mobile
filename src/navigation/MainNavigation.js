/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes, routeApp} from '../routes/Routes';
import Intro from '../screens/Intro';
import Login from '../screens/Login.js/Login';
import Register from '../screens/Register/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Courses from '../screens/Home/Courses';
import Contact from '../screens/Home/Contact';
import Account from '../screens/Home/Account';
import {GColor} from '../constants/Global';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MainNavigation() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName={routeApp.Home.welcome}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GColor.secondary100,
          tabBarInactiveTintColor: GColor.accent300,
          tabBarIconStyle: {},
          // tabBarActiveBackgroundColor:'black',
          tabBarStyle: {
            backgroundColor: GColor.primary500,
          },
        }}>
        <Tab.Screen
          name={routeApp.Home.welcome}
          options={{
            title: 'Home',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="home-sharp" size={size} color={color} />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name={routeApp.Home.course}
          component={Courses}
          options={{
            title: 'Courses',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="book-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={routeApp.Home.contact}
          component={Contact}
          options={{
            title: 'Contacts',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="mail" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={routeApp.Home.account}
          component={Account}
          options={{
            title: 'Account',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator initialRouteName={routeApp.Main}>
      <Stack.Screen
        name={routeApp.Main}
        component={Intro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routeApp.Login}
        component={Login}
        options={{
          headerShown: false,
          // animationEnabled: false,
        }}
      />
      <Stack.Screen
        name={routeApp.Register}
        component={Register}
        options={{
          headerShown: false,
          // animationEnabled: false,
        }}
      />

      <Stack.Screen
        name={routeApp.Home.main}
        component={TabScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
