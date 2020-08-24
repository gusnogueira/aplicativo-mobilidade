/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Call from './src/screens/Call/index.js';
import Chat from './src/screens/ChatScreen/index.js';
import Start from './src/screens/Start/index.js';
import SettingScreen from './src/screens/SettingScreen/index.js';
import CallButton from './src/components/CallButton/index.js';


Icon.loadFont();

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const icons = {
  Chat:{name:'chat'}, //verificar icones de outras libs
  Settings:{name:'settings'} //verificar icones de outras libs

};

function Tabs() {

  return (
    <Tab.Navigator
      initialRouteName="Call"
      screenOptions={({ route, navigation }) => ({ //mapeia todos os botões da tabnavigator
        tabBarIcon: ({ color, size}) => { //seta a cor do icone igual a do botão
          if (route.name === 'Call') { //se o route.name for o Call, chama o callbutton
           return (
           <CallButton
              onPress={() => { console.log(navigation); navigation.navigate('Call');}}
            />
           );
          }
          const { name } = icons[route.name]; //recupera o nome dentro de icons e atribui a route
          return <Icon name={name} size={size} color={color}/>;
        },
      })}
      tabBarOptions={{ //define as opções da tabbar
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#05A196',//define a cor quando o botão estiver ativo
        inactiveTintColor: '#92929b' //define a cor quando o botão estiver inativo
      }}
      >
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Mensagens'
        }}
        />
      <Tab.Screen
        name="Call"
        component={Call}
        options={{
          title: '',
        }}
        />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: 'Opções'
        }}
        />
    </Tab.Navigator>

  );
}

const App: () => React$Node = () => {

  return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
      headerShown: false
    }}>
          <Stack.Screen
            name="Principal"
            component={Tabs}
            />

          <Stack.Screen
            name="Start"
            component={Start}
            />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default App;
