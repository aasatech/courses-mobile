import React from 'react';
import Layout from '../../components/ui/Layout';
import {Text} from 'react-native';
import Button from '../../components/ui/Button';
import {routeApp} from '../../routes/Routes';
import {GColor} from '../../constants/Global';

export default function Account({navigation}) {
  function logOut() {
    navigation.replace(routeApp.Main);
  }
  return (
    <Layout>
      <Text style={{color: GColor.accent300}}>Welcome to Account Screen</Text>
      <Button label={'Logout'} onPress={logOut} />
    </Layout>
  );
}
