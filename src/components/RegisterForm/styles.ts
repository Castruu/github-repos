import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.mulish_bold};
  font-size: ${RFValue(22)}px;

  color:  ${({theme}) => theme.colors.text_dark};
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.mulish_regular};
  font-size: ${RFValue(15)}px;


  color:  ${({theme}) => theme.colors.text_detail};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;

  border: 1px solid #E5E5E5;
  border-radius: 4px;

  padding: 16px;
  margin-top: 32px;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.roboto_regular};
  color:  ${({theme}) => theme.colors.text_dark};

  margin-left: 8px;
`;