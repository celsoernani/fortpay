import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
`;
export const TitleContainer = styled.View`
  align-items: center;
  margin: 30px;
`;
export const Header = styled.View`
  background-color:#138646
  height:${getStatusBarHeight(true) + 50}
`;
export const Avatar = styled.Image`
  width: 100px;
  margin-top: 65;
  margin-left: 10px;
  height: 100px;
  border-radius: 50px;
  position: absolute;
  border: 5px solid #d9d9d9;
`;
export const Card = styled.View`
border-width: 1;
border-radius: 2;
border-color: #ddd;
margin-left: 5;
margin-right: 5;
margin-top: 10;
`;

export const TextName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.025;
  margin-left: 180px;
  color: #00000099;
`;
export const TextCard = styled.Text`
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.025;
  color: #00000099;
  padding: 5px;
`;

export const TextSubtitle = styled.Text`
  font-size: 15px;
  letter-spacing: 0.025;
  color: #00000099;
  padding: 5px;
`;
export const ChatLabel = styled.Text`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
`;
export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-radius: 4px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  border-color: #138646;
`;
export const Title = styled.Text`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  width: 300px;
`;
