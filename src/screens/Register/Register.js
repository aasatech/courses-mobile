import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Layout from '../../components/ui/Layout';
import AppLogo from '../../components/AppLogo';
import HeadLine from '../../components/ui/HeadLine';
import Input from '../../components/Input';
import ButtonApp from '../../components/ui/Button';
import {GColor} from '../../constants/Global';
import {Routes, routeApp} from '../../routes/Routes';
import {Field, Form, Formik} from 'formik';
import {SignUpSchema} from '../../schemas';

export default function Register({navigation}) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    cfpassword: '',
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
            label="Create an Account"
            size={'lg'}
          />
        </View>
        <Formik
          initialValues={form}
          validationSchema={SignUpSchema}
          onSubmit={(values, action) => {
            action.resetForm();
            console.log(values);
            handleSubmit(values);
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
                  id="cfpassword"
                  label="Password Comfirmation"
                  placeholder="Password Comfirmation"
                  keyboardType="default"
                  secureTextEntry
                  returnKeyType="next"
                  value={props.values.cfpassword}
                  onChangeText={props.handleChange('cfpassword')}
                  onBlur={props.handleBlur('cfpassword')}
                  component={Input}
                />

                <View style={styles.buttonContainer}>
                  <ButtonApp onPress={props.handleSubmit} label={'Sign Up'} />
                </View>
              </>
            );
          }}
        </Formik>

        <View style={{alignItems: 'center'}}>
          <HeadLine label="Already have an account?" color={GColor.accent300} />
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
