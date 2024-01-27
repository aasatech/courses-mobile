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
import {GColor} from '../constants/Global';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {resetErrorMessage} from '../redux/reducers/authReducer';
import {AppState} from 'react-native';

export default function MainNavigation() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const auth = useSelector(store => store.auth);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const dispatch = useDispatch();
  const TabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName={routeApp.Home.welcome}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: GColor.secondary100,
          tabBarInactiveTintColor: GColor.accent300,
          tabBarStyle: {
            backgroundColor: GColor.primary500,
          },
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
      <Stack.Navigator>
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
  useLayoutEffect(() => {
    dispatch(resetErrorMessage());

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        dispatch(resetErrorMessage());
      }
      if (appState.current === 'active') {
        dispatch(resetErrorMessage());
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  return auth?.token ? <AuthStack /> : <NonAuthStack />;
}
