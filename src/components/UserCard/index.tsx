import React from 'react';

import user_photo from '../../assets/user_photo.png';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    Icon,
    Content,
    UserWrapper,
    UserPhoto,
    UserInfoWrapper,
    UserName,
    UserId,
    DeleteWrapper,
    Footer,
    Detail,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function UserCard() {
    const theme = useTheme();
    return (
        <Container>
            <Content>
                <UserWrapper>
                    <UserPhoto source={user_photo} />
                    <UserInfoWrapper>
                        <UserName>John Doe Santos</UserName>
                        <UserId>@johndoesantos</UserId>
                    </UserInfoWrapper>
                    <Feather
                        name='chevron-right'
                        size={RFValue(24)}
                        color={theme.colors.text_dark}
                    />
                </UserWrapper>
                <DeleteWrapper>
                    <MaterialIcons
                        name='delete'
                        size={RFValue(16)}
                        color={theme.colors.text_dark}
                    />
                </DeleteWrapper>
            </Content>
            <Footer>
                <Icon name='business' />
                <Detail>
                    GO.K Digital
                </Detail>
                <Icon name='place' />
                <Detail>
                    São Paulo, Brazil
                </Detail>
                <Icon name='star' />
                <Detail>
                    2
                </Detail>
            </Footer>

        </Container>
    );
}