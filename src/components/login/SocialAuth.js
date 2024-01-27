import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GoogleLogo from '../../assets/svg/Google-Logo.wine.svg';
import FacebookLogo from '../../assets/svg/Facebook-Logo.wine.svg';
export default function SocialAuth() {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity>
        <GoogleLogo width={120} height={40} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FacebookLogo width={120} height={40} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 20,
  },
});
