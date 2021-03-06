import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImage = type => {
    if (type === 'RideX') {
      return require('../../assets/images/top-RideX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-RideXL.png');
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={[styles.map, {width: '100%', height: '100%'}]}
      region={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{width: 70, height: 70, resizeMode: 'contain'}}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#2545',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomeMap;
