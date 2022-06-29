import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;

  flex: 1;
  justify-content: space-between;
  align-items: center;

  padding: 40px;
  padding-bottom: 32px;

  background-color: ${({theme}) => theme.colors.background};
`;

export const GitHubLogo = styled.Image`
  height: 80px;
  width: 200px;

  margin: 60px 0 80px;
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.mulish_regular};
  font-size: ${RFValue(15)}px;


  color:  ${({theme}) => theme.colors.text_detail};
`;

export const Footer = styled.View``;
