import styled from 'styled-components';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

export const Navbar = styled(View)`
  flex: 1;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fae5ac;
`;

export const NavIcon = styled(TouchableOpacity)`
  left: 10px;
  margin-top: 5px;
`;
export const NavTitle = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  transform: translate(130px, 0px);
`;
export const Container = styled(ScrollView)`
  flex: 1;
`;
export const CardContainer = styled(View)`
  flex: 1;
  align-items: center;
`;
export const Card = styled(TouchableOpacity)`
  width: 80%;
  margin: 20px;
  align-items: center;
  background-color: #f2e5c2;
  flex: 3;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-opacity: 0.8;
  elevation: 4;
  border-radius: 6px;
  padding: 15px;
`;

export const CardTitle = styled(Text)`
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;

`;

export const CardNumber = styled(Text)`
  font-size: 40px;
  color: #62dcde;
  margin-top: 20px;
  font-weight: bold;
`;


