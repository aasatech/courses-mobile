import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import GetLocation from 'react-native-get-location';
export default function MapBuild() {
  const [marker, setMarker] = useState();
  const handlePressMap = event => {
    console.log(event.nativeEvent.coordinate);
    setMarker(event.nativeEvent.coordinate);
  };
  console.log('region', marker);

  useLayoutEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
        setMarker({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      {marker && (
        <MapView
          zoomEnabled={true}
          maxZoomLevel={12}
          mapType="standard"
          onPress={handlePressMap}
          style={{
            //   backgroundColor: 'red',
            flex: 1,
          }}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          initialRegion={marker}
          loadingBackgroundColor='red'
          loadingIndicatorColor="red">
          <Marker coordinate={marker} />
        </MapView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({});
