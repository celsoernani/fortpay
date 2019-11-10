import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  flex:1
  margin-top: 50px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0 10px;
`;

export const TabsItens = styled.View`
  width: 130px;
  height: 100px;
  background: #F0F0F0;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px
  padding: 20px;
  margin-bottom: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const TabsText = styled.Text`
  font-size: 15px;
  color: #045901;
  text-align: center;
`;
