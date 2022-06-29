import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

interface ButtonProps extends RectButtonProps {
  children: JSX.Element
}

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${({theme}) => theme.colors.background_ternary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  background-color: ${({theme}) => theme.colors.background};

`;

export const GitHubLogo = styled.Image`
  width: 100px;
  height: 40px;
`;

export const AddButton = styled(RectButton)<ButtonProps>`
  background-color:  ${({theme}) => theme.colors.text_dark};
  padding: 6px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.mulish_regular};
  font-size: ${RFValue(14)}px;

  color:  ${({theme}) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 0 16px;
`;
