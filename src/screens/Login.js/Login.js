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

export default function Login({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = values => {
    if (values) {
      navigation.replace(routeApp.Home.main);
    }

    // alert(JSON.stringify(values, null, 2));
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
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            action.resetForm();
            // console.log(values);
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
