import React, {useRef} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Layout from '../../components/ui/Layout';
import AppLogo from '../../components/AppLogo';
import HeadLine from '../../components/ui/HeadLine';
import {GColor} from '../../constants/Global';
import ButtonApp from '../../components/ui/Button';
import {Routes, routeApp} from '../../routes/Routes';
import Input from '../../components/Input';
import {TextInput} from 'react-native-gesture-handler';

export default function Login({navigation}) {
  return (
    <Layout>
      <View style={styles.outerContainer}>
        <View style={styles.imgContainer}>
          <AppLogo />
        </View>

        <View style={styles.textHeader}>
          <HeadLine
            color={GColor.accent300}
            label="Connect with your account"
            size={'lg'}
          />
        </View>

        <Input
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          secureTextEntry={false}
        />
        <Input
          label="Password"
          placeholder="Password"
          keyboardType="default"
          secureTextEntry
          returnKeyType="next"
        />

        <View style={styles.buttonContainer}>
          <ButtonApp
            onPress={() => navigation.replace(routeApp.Home.main)}
            label={'Login'}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <HeadLine label="Don't have an account? " color={GColor.accent300} />
          <Pressable onPress={() => navigation.navigate(routeApp.Register)}>
            <HeadLine label="Sign Up" color={GColor.primary500} />
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
