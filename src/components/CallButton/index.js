/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const CallButton: () => React$Node = ( { onPress } ) => {

  return (
<>

<LinearGradient colors={['#03615B', '#05A196']} style={styles.container}>

        <View style={styles.button}>
          <View>
            <TouchableHighlight
              onPress={onPress}
              activeOpacity={0.85}
              underlayColor = "#333"
              hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}>
                <Image
                  source={require('../../../resources/icone15.png')}
                  style={styles.icone}/>
            </TouchableHighlight>
          </View>
          <View>
              <Text style={styles.textStyle}>Principal </Text>
          </View>
        </View>
</LinearGradient>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34,
    width: 65,
    height: 65,
    marginBottom: 25,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 3,
    fontSize: 13,
  },

  icone: {
    margin: -7,
    marginTop: 4,
  },

});

export default CallButton;
