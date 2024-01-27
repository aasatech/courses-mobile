import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ErrorMessage({
  placeholder = 'Error Message',
  txtColor,
}) {
  return (
    <View style={styles.outerContainer}>
      <Text style={[styles.txtShow, ]}>{placeholder}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#D04848',
    padding: 6,
    // borderRadius:10
    


  },
  txtShow: {
    fontSize: 18,
    color: '#FFB0B0',
    fontWeight: '400',
  },
});
