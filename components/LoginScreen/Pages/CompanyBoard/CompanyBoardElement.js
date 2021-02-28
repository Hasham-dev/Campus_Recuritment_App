import styled from 'styled-components';
import {TouchableOpacity, View} from 'react-native';

export const CardContainer = styled(View)`
  flex: 1;
  align-items: center;
`;
export const Container = styled(View)`
  width: 80%;
  margin: 20px;
  align-items: center;
  background-color: #f2e5c2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-opacity: 0.8;
  elevation: 4;
  border-radius: 6px;
  padding: 15px;
`;
export const FontVector = styled(TouchableOpacity)`
position: relative;
left: 10px;
bottom: 10px;
transform: translate(180px,470px)
`
