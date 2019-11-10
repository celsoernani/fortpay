import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export const Container = styled.View`

`
export const Header = styled.View`
  background-color:#138646
  height:${getStatusBarHeight(true) + 50}


`
export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px

`

export const TextName = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.025;
  marginLeft:10px;
`
