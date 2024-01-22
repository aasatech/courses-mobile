import React from 'react';
import Layout from '../../components/ui/Layout';
import {Text} from 'react-native';
import Button from '../../components/ui/Button';
import {routeApp} from '../../routes/Routes';
import {GColor} from '../../constants/Global';
import {useDispatch} from 'react-redux';
import {logoutAuth} from '../../store/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account({navigation}) {
  const dispatch = useDispatch();
  async function logOut() {
    // navigation.replace(routeApp.Main);
    navigation.reset({
      index: 0,
      routes: [{name: routeApp.Main}],
    });
    dispatch(logoutAuth());
    await AsyncStorage.removeItem('token');
  }
  return (
    <Layout>
      <Text style={{color: GColor.accent300}}>Welcome to Account Screen</Text>
      <Button label={'Logout'} onPress={logOut} />
    </Layout>
  );
}
