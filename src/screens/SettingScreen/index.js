/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import History from './history.js';
import Indicate from './indicate.js';
import Drive from './drive.js';
import Talk from './talk.js';


import { Container, TabsContainer, TabItem, TabText } from './styles';

const initialState = {
    history: false,
    indicate: false,
    driver: false,
    talk: false,
};

const SettingScreen: () => React$Node = () => {

const [tab, setTab] = useState(initialState);

function historySelected  () {
    setTab({
      ...tab,
        hystory: true,
        indicate: false,
        driver: false,
        talk: false,
    });
}

function indicateSelected  () {
    setTab({
      ...tab,
        hystory: false,
        indicate: true,
        driver: false,
        talk: false,
    });
}

function driveSelected  () {
    setTab({
      ...tab,
        hystory: false,
        indicate: false,
        driver: true,
        talk: false,
    });
}

function talkSelected  () {
    setTab({
      ...tab,
        hystory: false,
        indicate: false,
        driver: false,
        talk: true,
    });
}

  return (
  <>
  <LinearGradient colors={['#05A196', '#222']} style={{flex: 1}}>
     <Container>
        <TabsContainer>

            <TouchableOpacity onPress={historySelected}>
                <TabItem>
                    <Icon name="timeline" size={26} color="#FFF"/>
                    <TabText>Histórico</TabText>
                </TabItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={indicateSelected}>
                <TabItem>
                      <Icon name="monetization-on" size={26} color="#FFF"/>
                      <TabText>Indique e ganhe</TabText>
                </TabItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={driveSelected}>
                <TabItem>
                      <Icon name="local-taxi" size={26} color="#FFF"/>
                      <TabText>Seja um motorista</TabText>
                </TabItem>
            </TouchableOpacity>

            <TouchableOpacity onPress={talkSelected}>
                <TabItem>
                      <Icon name="phone" size={26} color="#FFF"/>
                      <TabText>Fale conosco</TabText>
                </TabItem>
            </TouchableOpacity>

      </TabsContainer>
     </Container>
      {
      tab.hystory === true ?
      <History/>
      :
      tab.indicate === true ?
      <Indicate/>
      :
      tab.driver === true ?
      <Drive/>
      :
      tab.talk === true ?
      <Talk/>
      :
      <History/>
       }

  </LinearGradient>
  </>
  );
};

export default SettingScreen;
