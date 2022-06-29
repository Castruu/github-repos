import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 40px;
  
  justify-content: flex-end;

  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
`;


export const GitHubLogo = styled.Image`
  height: 80px;
  width: 200px;

`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.mulish_regular};
  font-size: ${RFValue(15)}px;
  
  
  color:  ${({ theme }) => theme.colors.text_detail};
  `;

export const Footer = styled.View`
    width: 100%;
    align-items: center;

    margin-top: 200px;
`;