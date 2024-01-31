/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {routeApp} from '../routes/Routes';
import Intro from '../screens/Intro';
import Login from '../screens/Login.js/Login';
import Register from '../screens/Register/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Courses from '../screens/Home/Courses';
import Contact from '../screens/Home/Contact';
import Account from '../screens/Home/Account';
import {GColor} from '../constants/Theme/Global';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser, resetErrorMessage} from '../redux/reducers/authReducer';
import {AppState} from 'react-native';
import {storeWithoutPersist} from '../redux/store/storeNoPersist';
import CourseDetail from '../screens/Home/CourseDetail';
export default function MainNavigation() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const auth = useSelector(store => store.auth);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const CourseStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="init" component={CourseDetail} />
      </Stack.Navigator>
    );
  };

  const TabScreen = () => {
    return (
      <Tab.Navigator
        detachInactiveScreens={true}
        initialRouteName={routeApp.Home.welcome}
        // tabBar={() => null}
        screenOptions={({route}) => ({
          headerShown: false,

          tabBarActiveTintColor: GColor.secondary100,
          tabBarInactiveTintColor: GColor.accent300,
          tabBarStyle: {
            backgroundColor: GColor.primary500,
            display: route?.name === routeApp.Course.init ? 'none' : 'block',
          },
          headerTitleAlign: 'center',
        })}>
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
          name={routeApp.Course.init}
          component={CourseStack}
          options={{
            tabBarButton: () => null,
            header: () => null,
            headerTitle: '',
            headerShown: false,
            tabBarVisible: false, // Set tabBarVisible to false
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
        <Tab.Screen
          name={routeApp.Main}
          component={Intro}
          options={{
            tabBarButton: () => null,

            headerShown: false,
            tabBarStyle: {display: 'none'},
          }}
        />
      </Tab.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name={routeApp.Home.main}
          component={TabScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const NonAuthStack = () => {
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
          }}
        />
        <Stack.Screen
          name={routeApp.Register}
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  // dispatch(logoutUser());

  return auth?.token ? <AuthStack /> : <NonAuthStack />;
}
