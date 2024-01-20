import React from 'react';
import Layout from '../../components/ui/Layout';
import {Text} from 'react-native';
import Button from '../../components/ui/Button';
import {routeApp} from '../../routes/Routes';

export default function Account({navigation}) {
  function logOut() {
    navigation.replace(routeApp.Main);
  }
  return (
    <Layout>
      <Text>Welcome to Account Screen</Text>
      <Button label={'Logout'} onPress={logOut} />
    </Layout>
  );
}
