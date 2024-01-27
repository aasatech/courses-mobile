import React, {useState} from 'react';
import Layout from '../components/ui/Layout';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Button from '../components/ui/Button';
import {Permission} from 'react-native';
import LottieView from 'lottie-react-native';

import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

// import ImagePicker from 'react-native-image-picker/lib/commonjs';
export default function ImagePicker() {
  const [image, setImage] = useState(null);
  const handleImageLibrary = async () => {
    const image = await launchImageLibrary();
  };
  const checkCameraPermission = async () => {
    try {
      const cameraPermissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);

      if (cameraPermissionStatus === RESULTS.GRANTED) {
        // Permission already granted, proceed with camera-related logic
        return true
      } else if (cameraPermissionStatus === RESULTS.DENIED) {
        // Permission denied, request camera permission
        const result = await request(PERMISSIONS.ANDROID.CAMERA);

        if (result === RESULTS.GRANTED) {
          // Permission granted, you can proceed with camera-related logic
          return true;
        } else {
          // Permission denied, handle accordingly
          console.log('Camera permission denied');
          return false;
        }
      }
      return false
    } catch (error) {
      console.error('Error checking camera permission:', error);
    }
  };
  const handleCamera = async () => {
    // console.log('permission is', checkPermission());
    if (checkCameraPermission() === false) {
      return;
    }
    const file = await launchCamera({
      quality: 0.5,
      cameraType: 'front',
    });
    console.log(file);
    if (file.didCancel) {
      Alert.alert('You have not take a picture', 'Comfirm');
      return;
    }
    setImage(file?.assets[0].uri);
  };
  return (
    <Layout>
      <View style={styles.container}>
        <LottieView
          style={{width: '100%', height: '30%'}}
          source={require('../assets/lotties/lotties.json')}
          autoPlay
          loop
        />

        <Text>Upload an Images</Text>

        {image && (
          <Image
            source={{uri: image}}
            style={{
              width: 150,
              height: 150,
            }}
          />
        )}
        <View style={{marginBottom: 20}}></View>

        <Button label="Open Camera" onPress={handleCamera} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
});
