import { Animated, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const Code = styled.View`
  padding: 10px;

  align-self: center;
  overflow: hidden;
`;

export const NavItem = styled.View`
  padding: 12px 0;

  align-items: center;
  flex-direction: row;

  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #FFF;

  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  margin-top: 15px;
  padding: 12px;

  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`

export const SignOutButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;

  color: #FFF;
`;