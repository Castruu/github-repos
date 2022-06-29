import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color:  ${({theme}) => theme.colors.text_dark};
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.mulish_regular};
  font-size: ${RFValue(16)}px;

  color:  ${({theme}) => theme.colors.background};
`