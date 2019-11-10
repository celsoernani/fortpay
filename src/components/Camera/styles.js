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