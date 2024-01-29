import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../components/ui/Button';
import Geolocation from '@react-native-community/geolocation';
import {GColor} from '../constants/Theme/Global';
import HeadLine from '../components/ui/HeadLine';
import Layout from '../components/ui/Layout';
export default function GeoLocate({navigation}) {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };
  const getCurrentLocation = async () => {
    try {
      const permission = await requestLocationPermission();
      if (permission) {
        Geolocation.getCurrentPosition(postion => {
          setLocation(postion.coords);
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    // Start watching position when the component mounts
    const watchId = Geolocation.watchPosition(
      position => {
        console.log('GeoLocation', position);
        setLocation(position?.coords);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );

    // Clear the watch when the component unmounts
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);
  return (
    <Layout>
      <View style={styles.container}>
        <HeadLine
          size={'lg'}
          label={`Your Current Location is ${location.latitude} ${location.longitude}`}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
          }}>
          {/* <View style={styles.button}>
            <Button
              label="Get Current Location"
              bgColor={GColor.primary500}
              onPress={getCurrentLocation}
            />
          </View> */}

          {!location.latitude ? (
            <View>
              <ActivityIndicator size={50} />
              <Text>Fetching User Location...</Text>
            </View>
          ) : (
            <View style={styles.button}>
              <Button
                bgColor={'green'}
                label="View On Map"
                onPress={() =>
                  navigation.navigate('ViewMap', {
                    location,
                  })
                }
              />
              <View style={{marginVertical: 5}}></View>
              <Button
                bgColor={'red'}
                label="DeepLink"
                onPress={() => navigation.navigate('DeepLink')}
              />
              <View style={{marginVertical: 5}}></View>
              <Button
                bgColor={'red'}
                label="DeepLink"
                onPress={() => navigation.navigate('DeepLink')}
              />
            </View>
          )}
        </View>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
});
