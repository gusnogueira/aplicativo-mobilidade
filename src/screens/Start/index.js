/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Container, NextButton, ButtonView, PriceHolder,
         NextButtonText, PriceHolderText, PriceHolderValue, PriceHolderDecimal,
         FormObs, FormInput, ContainerOptions,FormInputCupom, ViewRow,
         } from './styles';

const Background = ({ children }) => {
  return (
    <LinearGradient colors={['#05A196', '#222']} style={{flex: 1}}>
        { children }
      </LinearGradient>
  );
};

const Start: () => React$Node = () => {
  const [isSelectedDinheiro, setSelectionDinheiro] = useState(false);
  const [isSelectedCartao, setSelectionCartao] = useState(false);

  return (
  <>
  <Background>
      <Container>
          <FormObs>
            <FormInput
              autoCorrect={false}
              autoCaputalize="none"
              placeholder="Observações"
            />
          </FormObs>
          <ContainerOptions>
           <ViewRow style={styles.inputCupom}>
              <Icon name="tag-plus-outline" size={25} color="#777" style={styles.iconCupom}/>
              <FormInputCupom
                  autoCorrect={false}
                  autoCaputalize="none"
                  placeholder="Cupom promocional"
                />
            </ViewRow>
            <View style={styles.payment}>
                <View style={styles.viewMetod} >
                    <Icon name="cash-plus" size={25} color="#777" style={styles.iconMetod}/>
                    <Text style={styles.paymentText}>Forma de Pagamento</Text>
                </View>
                <ViewRow>
                    <View style={styles.metod}>
                        <CheckBox
                        value={isSelectedDinheiro}
                        onValueChange={setSelectionDinheiro}
                        style={styles.checkMoney}
                        />
                        <Text style={styles.paymentMetod}>Dinheiro</Text>
                        <CheckBox
                        value={isSelectedCartao}
                        onValueChange={setSelectionCartao}
                        style={styles.checkCard}
                        />
                        <Text style={styles.paymentMetod}>Cartão</Text>
                    </View>
                </ViewRow>
            </View>
            <PriceHolder>
                <PriceHolderText>
                  <PriceHolderValue>R$ </PriceHolderValue>
                  20
                  <PriceHolderDecimal>,00</PriceHolderDecimal>
                </PriceHolderText>
            </PriceHolder>
          </ContainerOptions>
        <ButtonView>
          <NextButton onPress={() => {}}>
              <NextButtonText>Confirmar</NextButtonText>
          </NextButton>
        </ButtonView>
      </Container>
  </Background>
  </>
  );
};


const styles = StyleSheet.create({
  iconCupom: {
    marginTop:30,
    marginLeft:10,
  },

  inputCupom: {
    borderBottomWidth: 1,
    borderColor: '#9999',
    width: 260,
  },

  iconMetod: {
    marginLeft:10,
  },

  payment: {
    borderBottomWidth: 1,
    borderColor: '#9999',
    width: 260,
    marginTop:25,
    paddingBottom: 20,
  },

  paymentText: {
    color:'#888',
    marginLeft:10,
    marginTop:3,
  },

  paymentMetod: {
    color:'#777',
    marginLeft:5,
    marginTop:5,
  },

  metod: {
    flexDirection: 'row',
    marginTop:25,
  },

  checkMoney: {
    marginLeft:20,
  },

  checkCard: {
    marginLeft:20,
  },

  viewMetod:{
    flexDirection: 'row',
  },

});

export default Start;
