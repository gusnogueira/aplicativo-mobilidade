/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';


export const Container = styled.View`
    background: transparent;
    height: 210px;
    width: 100%;
    position: absolute;
    bottom: 0;
    align-items: center;
    padding: 20px;
`;

export const TypeTitle = styled.Text`
    font-size: 20px;
    color: #FFF; 
`;

export const TypeDescription = styled.Text`
    color: #FFF;
    font-size: 16px
`;


export const RequestButton = styled.TouchableOpacity`
    background: #000;
    justify-content: center;
    align-items: center;
    height: 51px;
    width: 325px;
    align-self: center;
    margin-top: 80px;
    border-radius: 10px;
    elevation: 5
`;

export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;

`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 20px

`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
    
`;

export const FormInput = styled.TextInput`
    margin-bottom: 200px;
    border-radius: 10px;
    background: #FFF;
    elevation: 5
`;
