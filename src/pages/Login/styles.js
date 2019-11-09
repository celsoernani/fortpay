import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export const Container = styled(LinearGradient).attrs(props => ({
  colors: ['#025920', '#09A603'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex: 1;
  padding-top: ${getStatusBarHeight(true) + 80}px;
  align-items:center
`;


export const Form = styled.View`
  flex-direction: column;
  margin-top: 30px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  width:325px;
  margin-bottom: 10px;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 20px;
  color: #fff;
  border-top-width:0px;
  border-right-width:0px;
  border-left-width:0px;

  border: 2px solid ${props => (props.error ? '#FF7272' : '#FFf')};
`;

export const Submit = styled.TouchableOpacity`
  background: #025920;
  height: 52px;
  border-radius: 4px;
  width:50%
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  flex-direction:row;
`;

export const SubmitText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  margin-right:20px;
`
export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#fff'
})``
