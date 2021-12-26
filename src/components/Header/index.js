import React from 'react';

import { Feather } from '@expo/vector-icons';

import { 
  Container,

  Top,
  Logo,
  Title
} from './styles';

import logo from '../../assets/Nubank_Logo.png';

function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Matheus</Title>
      </Top>

      <Feather name="chevron-down" size={20} color='#FFF' />
    </Container>
  );
};

export default Header;