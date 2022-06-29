import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_ternary};
`;

export const Header = styled.View`
    width: 100%;
    padding: 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background};

`;

export const UserPhoto = styled.Image`
    width: 32px;
    height: 32px;

`;

export const Content = styled.View`
    padding: 16px;
`;

export const SearchBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InputWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    
    margin-right: 8px;
    padding: 8px 16px;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  color:  ${({ theme }) => theme.colors.text_dark};

  margin-left: 8px;
`;

export const FilterWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 8px;
`;

export const RepositoriesWrapper = styled.View`
`;
