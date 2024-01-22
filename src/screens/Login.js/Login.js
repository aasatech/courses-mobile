import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Layout from '../../components/ui/Layout';
import AppLogo from '../../components/AppLogo';
import HeadLine from '../../components/ui/HeadLine';
import {GColor} from '../../constants/Global';
import ButtonApp from '../../components/ui/Button';
import {Routes, routeApp} from '../../routes/Routes';
import Input from '../../components/Input';
import {TextInput} from 'react-native-gesture-handler';
import {ErrorMessage, Field, Formik} from 'formik';
import {LoginSchema} from '../../schemas';
import {useDispatch} from 'react-redux';
import {login} from '../../store/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const txtPassword = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = async values => {
    if (values) {
      dispatch(login(values));

      navigation.reset({
        index: 0,
        routes: [{name: routeApp.Home.main}],
      });
      await AsyncStorage.setItem('token', values.email);
    }
  };
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
        <Formik
          initialValues={form}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            action.resetForm();
            console.log(values);
            handleSubmit(values);
          }}>
          {props => {
            return (
              <View>
                <Field
                  id="email"
                  label="Email"
                  placeholder="Email"
                  keyboardType="email-address"
                  secureTextEntry={false}
                  
             
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  component={Input}
                />

                <Field
                  id="password"
                  label="Password"
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  component={Input}
                />

                <View style={styles.buttonContainer}>
                  <ButtonApp onPress={props.handleSubmit} label={'Login'} />
                </View>
              </View>
            );
          }}
        </Formik>

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
