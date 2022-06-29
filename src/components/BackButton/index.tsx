import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container
} from './styles';

import { useTheme } from 'styled-components';

import { BorderlessButtonProps } from 'react-native-gesture-handler';


export function BackButton({ ...rest }: BorderlessButtonProps) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialIcons
        name='arrow-back'
        size={32}
        color={theme.colors.text_dark}
      />
    </Container>
  );
}