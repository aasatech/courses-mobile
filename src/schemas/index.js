import React from 'react';

import {useFormik} from 'formik';

import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string().min(5).max(20).required('Password is required'),
});
export const SignUpSchema = Yup.object({
  username: Yup.string().max(10).required('Username is required'),
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string().min(5).max(20).required('Password is required'),
  cfpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .min(5)
    .max(20)
    .required('Password is required'),
});
