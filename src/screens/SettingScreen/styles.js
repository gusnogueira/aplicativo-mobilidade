/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 110px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddinLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 120px;
  height: 110px;
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;

`;

export const TabText = styled.Text`
  font-size: 12px;
  color: #FFF;

`;


