import React from 'react';

import {useFormik} from 'formik';

import * as Yup from 'yup';
const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const LoginSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email()
    .matches(emailRegex, 'Invalid Email Address Format')
    .label('Email'),
  password: Yup.string().min(8).max(20).required('Password is required'),
});
export const SignUpSchema = Yup.object({
  username: Yup.string().min(10).max(20).required('Username is required'),
  email: Yup.string()
    .required('Email is required')
    .email()
    .matches(emailRegex, 'Invalid Email Address Format')
    .label('Email'),
  password: Yup.string().min(8).max(20).required('Password is required'),
  comfirmpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .min(8)
    .max(20)
    .required('Password is required'),
});
