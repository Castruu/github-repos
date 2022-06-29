import React from 'react';
import { useTheme } from 'styled-components';

import githubPNG from '../../assets/github.png';
import { RegisterForm } from '../../components/RegisterForm';

import {
  Container,
  GitHubLogo,
  Description,
  Footer,
} from './styles';

export function Login(){
  const theme = useTheme();

  return (
    <Container>
        <GitHubLogo source={githubPNG}/>
        <RegisterForm 
          title='Buscar usuário'
          description='Crie sua conta através do seu usuário do GitHub'
          buttonAction='Cadastrar'
        />
        <Footer>
            <Description>Termos de política e privacidade</Description>
        </Footer>
    </Container>
  );
}