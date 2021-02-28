import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useContext} from 'react/cjs/react.development';
import {ContextApi} from '../Provider/ContextApi';
import {
  Button,
  Container,
  ElementText,
  Title,
} from './styles/LoginScreenElement';

const LoginScreen = ({navigation}) => {
  const route = (props) => {
    navigation.navigate(props);
  };
  const {logout, user} = useContext(ContextApi);
  useEffect(() => {
    if (user) logout();
  }, []);
  return (
    <Container>
      <Title>Login</Title>

      <Button onPress={() => route('StudentSignIn')}>
        <ElementText>Sign In as Student</ElementText>
      </Button>

      <Button onPress={() => route('CompanySignIn')}>
        <ElementText>Sign In as Company</ElementText>
      </Button>

      <Button onPress={() => route('AdminSignIn')}>
        <ElementText>Sign In as Admin</ElementText>
      </Button>
    </Container>
  );
};

export default LoginScreen;
