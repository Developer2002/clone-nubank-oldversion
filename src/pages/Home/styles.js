import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;

  background: #8B10AE;
`;

export const Content = styled.View`
  flex: 1;

  max-height: 400px;

  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;

  height: 100%;

  margin: 0 20px;

  left: 0;
  right: 0;
  top: 0;

  position: absolute;

  border-radius: 4px;

  background-color: #FFF;
`;

export const CardHeader = styled.View`
  padding: 30px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CardContent = styled.View`
  flex: 1;

  padding: 0 30px;

  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;

  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  color: #333;

  margin-top: 3px;
`;

export const CardFooter = styled.View`
  padding: 30px;

  border-radius: 4px;

  background-color: #eee;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;