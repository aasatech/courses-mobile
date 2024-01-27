import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Layout from '../../components/ui/Layout';
import AppLogo from '../../components/AppLogo';
import HeadLine from '../../components/ui/HeadLine';
import {GColor} from '../../constants/Global';
import ButtonApp from '../../components/ui/Button';
import {routeApp} from '../../routes/Routes';
import Input from '../../components/Input';
import {Field, Formik} from 'formik';
import {LoginSchema} from '../../schemas';
import {useDispatch, useSelector} from 'react-redux';
import {
  authorizingUser,
  resetErrorMessage,
} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialAuth from '../../components/login/SocialAuth';
import {persistance} from '../../redux/centralStore';

export default function Login({navigation}) {
  const [form, setForm] = useState({
    email: 'testxx@gmail.com',
    password: '121212121',
  });
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
  const [authState, setAuthState] = useState({
    isLoading: false,
    isError: false,
    errorMessage: '',
  });

  const handleSubmit = async values => {
    if (values) {
      try {
        setAuthState(pre => {
          return {
            ...pre,
            isLoading: true,
          };
        });
        await dispatch(authorizingUser(values, false));
      } catch (error) {
        setAuthState(pre => {
          return {
            ...pre,
            isError: true,
            errorMessage: error.message,
          };
        });
      } finally {
        setAuthState(pre => {
          return {
            ...pre,
            isLoading: false,
          };
        });
      }
    }
  };
  if (auth.token) {
    navigation.reset({
      index: 0,
      routes: [{name: routeApp.Home.main}],
    });
  }

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
          // enableReinitialize={false}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            handleSubmit(values);
            // action.resetForm();
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

                {authState?.isError && (
                  <View style={{marginVertical: 10}}>
                    <ErrorMessage placeholder={authState?.errorMessage} />
                  </View>
                )}

                <View style={styles.buttonContainer}>
                  {authState.isLoading ? (
                    <ActivityIndicator size={50} color={GColor.primary500} />
                  ) : (
                    <ButtonApp
                      onPress={props.handleSubmit}
                      bgColor={GColor.primary500}
                      label={'Login'}
                    />
                  )}
                </View>
              </View>
            );
          }}
        </Formik>

        <View style={{alignItems: 'center'}}>
          <HeadLine label="Don't have an account? " color={GColor.accent300} />
          <Pressable
            onPress={() => {
              navigation.replace(routeApp.Register);
            }}>
            <HeadLine label="Sign Up" color={GColor.primary500} />
          </Pressable>
        </View>

        <SocialAuth />
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
