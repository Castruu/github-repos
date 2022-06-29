import React from 'react';

import githubPNG from '../../assets/github.png';
import { UserCard } from '../../components/UserCard';

import {
  Container,
  Header,
  GitHubLogo,
  AddButton,
  Title,
  Content,
} from './styles';

export function Users(){
  return (
    <Container>
        <Header>
            <GitHubLogo source={githubPNG}/>
            <AddButton onPress={() => {}}>
                <Title>
                    Adicionar novo
                </Title>
            </AddButton>
        </Header>
        <Content>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </Content>
    </Container>
  );
}