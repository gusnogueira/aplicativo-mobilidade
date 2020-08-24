/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';


export const Container = styled.View`
    width: 330px;
    height: 420px;
    background: rgba(255,255,255,0.2);
    border-radius: 3px;
    padding: 0px;
    align-items: center;
    align-self: center;
    top: 20px;  
  
`;
export const ContainerDetail = styled.View`
    width: 100%;
    height: 90px;
    background: transparent;
    border-radius: 3px;
    padding: 0px;
    align-items: center;
    align-self: center;
    margin-top: 20px;
    flex-direction: row;
  
`;

export const RequestButton = styled.TouchableOpacity`
    background: #000;
    justify-content: center;
    align-items: center;
    height: 51px;
    width: 300px;
    align-self: center;
    border-radius: 10px;
    elevation: 5;
    margin-top: 15px;  
`;

export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;

`;
