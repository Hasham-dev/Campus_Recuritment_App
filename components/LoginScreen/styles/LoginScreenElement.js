import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  text-align: center;
  align-items: center;
  padding: 40px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 70px;
`;

export const ElementText = styled(Text)`
  font-size: 30px;

`;
export const Button = styled(TouchableOpacity)`
  background-color: pink;
  color: #fff;
  padding: 10px;
  width: 80%;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
`;
