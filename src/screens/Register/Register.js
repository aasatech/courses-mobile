import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Layout from '../../components/ui/Layout';
import AppLogo from '../../components/AppLogo';
import HeadLine from '../../components/ui/HeadLine';
import Input from '../../components/Input';
import ButtonApp from '../../components/ui/Button';
import {GColor} from '../../constants/Global';
import {Routes, routeApp} from '../../routes/Routes';
import {Field, Form, Formik} from 'formik';
import {SignUpSchema} from '../../schemas';
import {useDispatch, useSelector} from 'react-redux';
import {
  authorizingUser,
  resetErrorMessage,
} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RegisterUser} from '../../actions/auth/Authentication';
import ErrorMessage from '../../components/ui/ErrorMessage';
import {persistance} from '../../redux/centralStore';

export default function Register({navigation}) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    comfirmpassword: '',
  });
  const [authState, setAuthState] = useState({
    isLoading: false,
    isError: false,
    errorMessage: '',
  });
  const auth = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const handleSubmit = async values => {
    if (values) {
      try {
        setAuthState(pre => {
          return {
            ...pre,
            isLoading: true,
          };
        });
        await dispatch(authorizingUser(values, true));
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

  return (
    <Layout>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
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
        <Formik
          initialValues={form}
          validationSchema={SignUpSchema}
          onSubmit={(values, action) => {
            handleSubmit(values);
            // action.resetForm();
          }}>
          {props => {
            return (
              <>
                <Field
                  id="username"
                  label="Username"
                  placeholder="Username"
                  keyboardType="email-address"
                  returnKeyType="next"
                  secureTextEntry={false}
                  value={props.values.username}
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  component={Input}
                />
                <Field
                  id="email"
                  label="Email"
                  placeholder="Email"
                  keyboardType="email-address"
                  returnKeyType="next"
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
                  returnKeyType="next"
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  component={Input}
                />

                <Field
                  id="comfirmpassword"
                  label="Password Comfirmation"
                  placeholder="Password Comfirmation"
                  keyboardType="default"
                  secureTextEntry
                  returnKeyType="next"
                  value={props.values.comfirmpassword}
                  onChangeText={props.handleChange('comfirmpassword')}
                  onBlur={props.handleBlur('comfirmpassword')}
                  component={Input}
                />

                {authState?.isError && (
                  <View style={{marginVertical: 10}}>
                    <ErrorMessage placeholder={authState?.errorMessage} />
                  </View>
                )}
                <View style={styles.buttonContainer}>
                  {authState?.isLoading ? (
                    <ActivityIndicator size={50} color={GColor.primary500} />
                  ) : (
                    <ButtonApp
                      onPress={props.handleSubmit}
                      bgColor={GColor.primary500}
                      label={'Sign Up'}
                    />
                  )}
                </View>
              </>
            );
          }}
        </Formik>

        <View style={{alignItems: 'center'}}>
          <HeadLine label="Already have an account?" color={GColor.accent300} />
          <Pressable
            onPress={() => {
              navigation.replace(routeApp.Login);
              dispatch(resetErrorMessage());
            }}>
            <HeadLine label="Login Here" color={GColor.primary500} />
          </Pressable>
        </View>
      </ScrollView>
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
