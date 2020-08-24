/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
  state = {
    searchFocused: false,
  }

  render() {
    const { onLocationSelected } = this.props;
    const { searchFocused } = this.state;

    return (
        <GooglePlacesAutocomplete
          placeholder = "Escolha o destino."
          placeholderTextColor = "#777"
          onPress = { onLocationSelected }
          query = {{
            key: 'AIzaSyDau5HXJgc5kyVcCYA-1PChb8Ugnukz60Y',
            language: 'pt',
            components: 'country:br',
          }}
          textInputProps = {{
            onFocus: () => {this.setState({ searchFocused: true });},
            onBlur: () => {this.setState({ searchFocused: false });},
            autoCapitalize: 'none',
            autoCorrect: false,
          }}
          listViewDisplayed = { searchFocused }
          fetchDetails
          enablePoweredByContainer={false}
          styles={{
            container: {
              position: 'absolute',
              top: Platform.select({ ios: 40, android: 35 }), //verifica a distancia de acordo com a plataforma
              width: '100%',
              alignSelf: 'center',

            },
            textInputContainer: {
              flex: 1,
              backgroundColor: 'transparent',
              height: 54,
              marginHorizontal: 20,
              borderTopWidth: 0,
              borderBottomWidth: 0,

            },
            textInput: {
              height: 54,
              margin: 0,
              borderRadius: 10,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { x: 0, y: 0 },
              shadowRadius: 15,
              borderWidth: 1,
              borderColor: '#DDD',
              fontSize: 15,
            },

            listView: {
              borderWidth: 1,
              borderColor: '#DDD',
              backgroundColor: '#FFF',
              marginHorizontal: 20,
              borderRadius: 10,
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { x: 0, y: 0 },
              shadowRadius: 15,
              fontSize: 15,
              marginTop: 10,
            },

            desctiption: {
              fontSize: 12,
            },

            row: {
              padding: 20,
              height: 58,
            },

          }}
        />
    );
  }
}
