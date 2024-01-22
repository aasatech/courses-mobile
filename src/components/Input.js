/* eslint-disable react/self-closing-comp */
import React, {useRef, useState} from 'react';

import HeadLine from './ui/HeadLine';
import {Text, StyleSheet, TextInput, View, Pressable} from 'react-native';
import {GColor} from '../constants/Global';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ErrorMessage} from 'formik';
export default function Input({
  placeholder = 'Enter Text',
  label = 'Enter ....',
  returnKeyType = 'done',
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const [isShow, setShow] = useState(props?.secureTextEntry);
  const textRef = useRef(null);

  console.log(props.id);
  return (
    <View>
      <Pressable style={[styles.inputContainer]}>
        <View>
          <TextInput
            // {...field}
            {...props}
            id={props.id}
            placeholder={placeholder}
            returnKeyType={'next'}
            secureTextEntry={isShow}
            placeholderTextColor={GColor.accent300}
            style={styles.textInput}
            ref={textRef}
          />
          {props?.secureTextEntry && (
            <View style={styles.iconSecureText}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{padding: 5}}
                onPress={() => setShow(pre => !pre)}>
                {isShow ? (
                  <Icon name="eye-off" size={20} color={GColor.accent300} />
                ) : (
                  <Icon name="eye" size={20} color={GColor.accent300} />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Pressable>
      <Text style={styles.errorText}>
        {touched[props.id] && errors[props.id]}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
    backgroundColor: GColor.grey400,
    padding: 2,
    borderRadius: 10,
    // position: 'relative',
  },
  textInput: {
    color: GColor.accent300,
  },

  iconSecureText: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
  },
});
