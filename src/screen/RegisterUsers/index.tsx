import React from 'react';
import { BackButton } from '../../components/BackButton';
import { RegisterForm } from '../../components/RegisterForm';
import githubPNG from '../../assets/github.png';

import {
    Container,
    Header,
    Content,
    GitHubLogo,
    Description,
    Footer,
} from './styles';

export function RegisterUsers() {
    return (
        <Container>
            <Content>
                <Header>
                    <BackButton onPress={() => {}} />
                </Header>
                <GitHubLogo
                    source={githubPNG}
                />
                <RegisterForm
                    title='Buscar usuário'
                    description='Adicione seus novos usuários do GitHub'
                    buttonAction='Cadastrar'
                />
            </Content>
            <Footer>
                <Description>Termos de política e privacidade</Description>
            </Footer>
        </Container>
    );
}