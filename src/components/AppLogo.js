import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function AppLogo() {
  return (
    <View>
      <Image
        style={styles.imgCover}
        source={require('../assets/Images/applogo.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imgCover: {},
});
