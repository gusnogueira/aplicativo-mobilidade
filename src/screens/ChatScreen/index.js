/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native';


const Chat: () => React$Node = () => {

  return (
  <LinearGradient colors={['#05A196', '#222']} style={{flex: 1}}>
    <Text>Aqui ficarão as mensagens</Text>
  </LinearGradient>

  );
};


export default Chat;
