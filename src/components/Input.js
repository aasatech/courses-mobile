/* eslint-disable react/self-closing-comp */
import React, {useRef, useState} from 'react';

import HeadLine from './ui/HeadLine';
import {Text, StyleSheet, TextInput, View, Pressable} from 'react-native';
import {GColor} from '../constants/Global';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Input({
  placeholder = 'Enter Text',
  label = 'Enter ....',
  returnKeyType = 'done',
  ...props
}) {
  const [isShow, setShow] = useState(props?.secureTextEntry);
  const textRef = useRef(null);

  return (
    <Pressable
      // onPress={() => textRef.current.focus()}
      style={[
        styles.inputContainer,
        // props?.secureTextEntry === true && styles.securePasswordLayout,
      ]}>
      <View>
        <TextInput
          {...props}
          placeholder={placeholder}
          returnKeyType={returnKeyType}
          secureTextEntry={isShow}
          ref={textRef}></TextInput>
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
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    backgroundColor: GColor.secondary100,
    padding: 2,
    borderRadius: 10,
    // position: 'relative',
  },
  // securePasswordLayout: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  iconSecureText: {
    position: 'absolute',
    right: 0,
    // zIndex: 100,
    // backgroundColor:'grey',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
