/* eslint-disable react-native/no-inline-styles */
import Geolocation from '@react-native-community/geolocation';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
export default function MapViewCustom() {
  //   const [marker, setMarker] = useState();
  const route = useRoute().params;
  const handlePressMap = event => {
    setUserlocation(event.nativeEvent.coordinate);
  };
  const [userLocation, setUserlocation] = useState('');

  useLayoutEffect(() => {
    setUserlocation({
      latitude: route.location.latitude,
      longitude: route.location.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
  }, []);
  useEffect(() => {
    // Start watching position when the component mounts
    const watchId = Geolocation.watchPosition(
      position => {
        console.log('MapView', position);
        setUserlocation(position?.coords);
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
    <View style={{flex: 1}}>
      {userLocation && (
        <MapView
          showsUserLocation={true}
          zoomEnabled={true}
          minZoomLevel={10}
          followsUserLocation={true}
          // onRegionChange={event => {
          //   console.log(event);
          //   setUserlocation(event);
          // }}
          mapType="standard"
          // onPress={handlePressMap}
          style={{
            //   backgroundColor: 'red',
            flex: 1,
          }}
          provider={PROVIDER_GOOGLE}
          initialRegion={userLocation}
          loadingBackgroundColor="red"
          loadingIndicatorColor="red">
          <Marker
            coordinate={userLocation}
            title="Your Location"
            description="You are here!"
          />
        </MapView>
      )}
      <Text style={{fontSize: 25}}>
        Current Position: {JSON.stringify(userLocation)}{' '}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({});
