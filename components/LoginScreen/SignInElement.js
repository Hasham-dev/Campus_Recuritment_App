import styled from 'styled-components';
import {TextInput, Button, View, Text, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  text-align: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 40px;
`;
export const TextInputLine = styled(TextInput)`
  border: solid 1px black;
  width: 300px;
  height: 70px;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 30px;
`;

export const TextInputLabel = styled(Text)`
  font-size: 20px;
  margin-top: 40px;
`;

export const ElementText = styled(Text)`
  font-size: 30px;
`;
export const SignInButton = styled(TouchableOpacity)`
  background-color: pink;
  color: #fff;
  padding: 10px;
  width: 300px;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
`;
export const LinkText = styled(Text)`
  color: #4c8ffc;
  margin-bottom: 10px;
  font-size: 18px;
  position: absolute;
  bottom: 10px;
`;
