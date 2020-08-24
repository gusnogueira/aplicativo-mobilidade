/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Container, RequestButton, RequestButtonText } from './styles';

const Background = ({ children }) => {
  return (
      <LinearGradient colors={['#057371', '#333']} style={{
          height: 150,
          width: '100%',
      }}>
        { children }
      </LinearGradient>
  );
};

export default function Details () {
const { navigate } = useNavigation();

    return (
       <Background>
          <Container>
                    <RequestButton onPress={() => {navigate('Start');}}>
                      <RequestButtonText>Avançar</RequestButtonText>
                    </RequestButton>
          </Container>
        </Background>
    );



}
