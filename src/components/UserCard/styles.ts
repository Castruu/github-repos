import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;

  box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.text_dark}FF;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.background};

  padding: 32px 24px;

  margin-top: 8px;
`;

export const Content = styled.View`
  flex-direction: row;
  width: 100%; 
  
  margin-bottom: 16px;
`;

export const UserPhoto = styled.Image`
  height: 64px;
  width: 64px;
`;

export const UserWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;

  margin-right: 40px;
`;

export const UserInfoWrapper = styled.View`
  margin-left: 16px;
  margin-right: 8px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mulish_bold};
  font-size: ${RFValue(16)}px;

  color:  ${({ theme }) => theme.colors.text_dark};
  margin-bottom: 10px;
`;

export const UserId = styled.Text`
    font-family: ${({ theme }) => theme.fonts.mulish_regular};
  font-size: ${RFValue(14)}px;

  color:  ${({ theme }) => theme.colors.text_dark};
`;

export const DeleteWrapper = styled.View`
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  height: 24px;
  width: 24px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Detail = styled.Text`
  margin-right: 16px;
  margin-left: 4px;

  font-family: ${({ theme }) => theme.fonts.mulish_regular};
  font-size: ${RFValue(12)}px;

  color:  ${({ theme }) => theme.colors.text_detail};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;



export const Icon = styled(MaterialIcons).attrs(({ name, theme }) => ({
  size: RFValue(16),
  color: theme.colors.background_secondary
}))`

`