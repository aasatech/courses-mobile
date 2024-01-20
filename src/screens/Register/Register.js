import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Layout from '../../components/ui/Layout';
import AppLogo from '../../components/AppLogo';
import HeadLine from '../../components/ui/HeadLine';
import Input from '../../components/Input';
import ButtonApp from '../../components/ui/Button';
import {GColor} from '../../constants/Global';
import {Routes, routeApp} from '../../routes/Routes';

export default function Register({navigation}) {
  return (
    <Layout>
      <View style={styles.outerContainer}>
        <View style={styles.imgContainer}>
          <AppLogo />
        </View>

        <View style={styles.textHeader}>
          <HeadLine
            color={GColor.accent300}
            label="Create an Account"
            size={'lg'}
          />
        </View>
        <Input
          label="Name"
          placeholder="Name"
          returnKeyType="next"
          secureTextEntry={false}
        />

        <Input
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <Input
          label="Password"
          placeholder="Password "
          returnKeyType="next"
          secureTextEntry
        />
        <Input
          label="Password Comfirmation"
          placeholder="Password Comfirmation"
          returnKeyType="next"
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <ButtonApp
            onPress={() => navigation.replace(routeApp.Home.main)}
            label={'Sign Up'}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <HeadLine label="Already have an account?" color={GColor.accent300}/>
          <Pressable onPress={() => navigation.navigate(routeApp.Login)}>
            <HeadLine label="Login Here" color={GColor.primary500} />
          </Pressable>
        </View>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  outerContainer: {flex: 1, justifyContent: 'center'},
  imgContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 15,
    paddingBottom: 25,

    
  },
});
