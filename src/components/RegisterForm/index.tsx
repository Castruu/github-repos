import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { DefaultButton } from '../DefaultButton';

import {
    Container,
    Title,
    Description,
    InputContainer,
    Input,
} from './styles';

interface Props {
    title: string;
    description: string;
    buttonAction: string;
}

export function RegisterForm({title, description, buttonAction} : Props) {
    const theme = useTheme();
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <InputContainer>
                <MaterialIcons
                    name='account-circle'
                    size={RFValue(24)}
                    color={theme.colors.text_detail}
                />
                <Input placeholder="@username" />
            </InputContainer>
            <DefaultButton title={buttonAction} />
        </Container>
    );
}