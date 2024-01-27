import React from 'react';
import Layout from '../../components/ui/Layout';
import {Text, View} from 'react-native';
import Button from '../../components/ui/Button';
import {routeApp} from '../../routes/Routes';
import {GColor} from '../../constants/Global';
import {useDispatch} from 'react-redux';
import {logoutAuth, resetState} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account({navigation}) {
  const dispatch = useDispatch();
  async function logOut() {

    dispatch(resetState());
    navigation.reset({
      index: 0,
      routes: [{name: routeApp.Main}],
    });
  }
  return (
    <Layout>
      <Text style={{color: GColor.accent300}}>Welcome to Account Screen</Text>
      <View
        style={{
          marginVertical: 30,
        }}>
        <Button label={'Logout'} onPress={logOut} bgColor={GColor.accent300} />
      </View>
    </Layout>
  );
}
