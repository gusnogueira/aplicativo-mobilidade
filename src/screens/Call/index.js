/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import { ActivityIndicator, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Search from './search.js';
import Confirm from './confirm.js';
import MapViewDirections from 'react-native-maps-directions';
import backImage from '../../../resources/back.png';
import { Back } from './styles';

const initialState = {
    latitude: 0,
    longitude: 0,
};

const GOOGLE_MAPS_APIKEY = 'APIKEY';

const destination = {
      latitude: 0,
      longitude: 0,
};

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(initialState);
  const [posDestination, setPosDestination] = useState(destination);

useEffect(() => { //pega a posição atual do usuário
  Geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords;
    setCurrentPosition({
      currentPosition,
      latitude,
      longitude,
  });
  },
  error => console.log(error.message),
  { timeout: 50000, maximumAge: 0}
  );
},[currentPosition]);


function handleLocationSelected  (data, { geometry }) { //extrai latitude e longitude do destino
  const { location: { lat: latitude, lng: longitude } } = geometry;
    setPosDestination({
      ...posDestination,
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
    });
}

 return currentPosition.latitude !== 0 && currentPosition.longitude !== 0 ? (
      <>
      <MapView
        style={{ flex: 1 }}
        region = { {
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        } }
        showUserLocation = {false}
        scrollEnabled = {true}
        showsTraffic = {false}
        minZoomLevel = {10} //verificar com eder
        rotateEnabled = {false} //verificar com eder
        userLocationUpdateInterval = {5000000}
        userLocationFastestInterval = {5000000}
        followsUserLocation = {false}
        >
        <View style={{ position: 'absolute', top: 100, left: 50 }}/>
            <Marker
          coordinate={ {
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
          } }
          title={'Marcador'}
          description={'Você está aqui'}
            />
            <Marker
          coordinate={ {
            latitude: posDestination.latitude,
            longitude: posDestination.longitude,
          } }
          title={'Marcador'}
          description={'Seu destino'}
          />

         { posDestination.latitude !== 0 && posDestination.longitude !== 0 ? (
              <MapViewDirections
                    origin = {{
                      latitude: currentPosition.latitude,
                      longitude: currentPosition.longitude,
                }}
                    destination = {{
                      latitude: posDestination.latitude,
                      longitude: posDestination.longitude,
                }}
                apikey={ GOOGLE_MAPS_APIKEY }
                strokeWidth={5} //expessura da linha de trajeto
                strokeColor= "#05A196" //cor da linha de trajeto
                onReady={() => {}}
                />
         ) : <MapViewDirections
                apikey={ GOOGLE_MAPS_APIKEY }
                /> }

        </MapView>
        { posDestination.latitude !== 0 ? //se eu tiver um destino com latitude diferente de zero, exibe os comps abaixo
        <>
            <Back onPress={() => {
                setPosDestination({
                latitude: 0,
                longitude: 0,
                });}}>
                <Image source={backImage}/>
            </Back>
            <Confirm />
        </>
        :
        <>
        <Search onLocationSelected={handleLocationSelected} />
        </>
        }
        </>
  ) : <ActivityIndicator animating= {true} size="large" colors="#05A196" />;
  };



export default App;


