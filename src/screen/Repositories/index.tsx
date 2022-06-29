import React from 'react';
import { BackButton } from '../../components/BackButton';
import user_photo from '../../assets/user_photo.png';

import {
    Container,
    Header,
    UserPhoto,
    Content,
    SearchBar,
    InputWrapper,
    Input,
    FilterWrapper,
    RepositoriesWrapper,
} from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
export function Repositories() {
    const theme = useTheme();
    return (
        <Container>
            <Header>
                <BackButton />
                <UserPhoto
                    source={user_photo}
                />
            </Header>
            <Content>
                <SearchBar>
                    <InputWrapper>
                        <MaterialIcons
                            name='search'
                            size={24}
                            color={theme.colors.text_detail}
                        />
                        <Input
                            placeholder='Buscar um repositório'
                            placeholderTextColor={theme.colors.text_detail}
                        />
                    </InputWrapper>
                    <FilterWrapper>
                        <MaterialIcons
                            name='filter-list'
                            size={24}
                            color={theme.colors.text_detail}
                        />
                    </FilterWrapper>
                </SearchBar>
                <RepositoriesWrapper>
                    {/*<Repository />*/}
                </RepositoriesWrapper>
            </Content>
        </Container>
    );
}