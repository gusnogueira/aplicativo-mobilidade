/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 330px;
  height: 590px;
  background: rgba(255,255,255,0.2);
  border-radius: 15px;
  padding: 0px;
  align-items: center;
  align-self: center;
  top: 30px;  
`;

export const PriceHolder = styled.View`
  width: 170px;
  height: 170px;
  background: #000;
  border-radius: 100px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  align-self: center;
  top: 23px;
  
`;

export const PriceHolderText = styled.Text`
    color: #FFF;
    font-size: 65px
`;

export const PriceHolderValue = styled.Text`
    color: #FFF;
    font-size: 15px
`;

export const PriceHolderDecimal = styled.Text`
    color: #FFF;
    font-size: 15px
`;

export const NextButton = styled.TouchableOpacity`
    background: #000;
    justify-content: center;
    align-items: center;
    height: 51px;
    width: 300px;
    align-self: center;
    margin-top: 70px;
    border-radius: 10px;
    elevation: 5;
    padding: 10px;
`;


export const ButtonView = styled.View`
    top: 40px;
    flexDirection: row;
    align-items: center;
    align-self: center;
    
`;

export const NextButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;

`;


export const FormObs = styled.View`
    align-self: stretch;
    paddingLeft: 20px;
    paddingRight: 20px;
    paddingTop: 20px;
    paddingBottom: 25px;

    
`;

export const FormInput = styled.TextInput`
    background: #FFF;
    elevation: 5;
    height: 54px;
    borderRadius: 10px;
    paddingLeft: 15px;
    paddingRight: 15px;
    elevation: 5;
    shadowColor: #000;
    shadowOpacity: 0.1;
    shadowRadius: 15px;
    fontSize: 15px;
    
`;

export const FormInputCupom = styled.TextInput`
    background: #FFF;
    height: 54px;
    paddingRight: 15px;
    margin-top: 17px;
    margin-left: 5px;
    flexDirection: row;
    flex: 1;

        
`;

export const ContainerOptions = styled.View`
    width: 290px;
    height: 300px;
    background: #FFF;
    border-radius: 15px;
    padding: 0px;
    align-items: center;
    align-self: center;

`;

export const ViewRow = styled.View`
    flexDirection: row;

`;






