import { Animated, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;

  margin-left: 10px;
  padding: 10px;

  border-radius: 3px;

  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.2);
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #FFF;
`;