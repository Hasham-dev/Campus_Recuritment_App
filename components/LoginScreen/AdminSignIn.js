import React, { useContext } from 'react';
import {useState} from 'react';
import {ScrollView, Text, View, Alert} from 'react-native';
import {
  SignInButton,
  Container,
  ElementText,
  TextInputLabel,
  TextInputLine,
  Title,
  LinkText,
} from './SignInElement';
import * as yup from 'yup';
import {Formik} from 'formik';
import { ContextApi } from '../Provider/ContextApi';

const AdminSignIn = ({navigation}) => {

  const {setStatus} = useContext(ContextApi);
  const reviewSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Container>
        <Formik
          initialValues={{
            email: '',
            password: '',
            uid: '22',
          }}
          validationSchema={reviewSchema}
          onSubmit={(values) => {
            console.log(values);

            if (values.email === 'vakanihasham' && values.password === '12345') {
              navigation.navigate('Dashboard');
              setStatus('admin')
            } else {
              Alert.alert('Error', 'Wrong Email/Password', [
                {
                  text: 'Continue',
                },
              ]);
            }
          }}>
          {(props) => (
            <Container>
              <Title>Admin Login</Title>

              <TextInputLine
                onChangeText={props.handleChange('email')}
                autoCompleteType={'email'}
                placeholder={'Email'}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />

              <TextInputLine
                onChangeText={props.handleChange('password')}
                autoCompleteType={'password'}
                secureTextEntry={true}
                placeholder={'Password'}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />

              <SignInButton onPress={props.handleSubmit}>
                <ElementText>Sign In</ElementText>
              </SignInButton>
            </Container>
          )}
        </Formik>
      </Container>
    </ScrollView>
  );
};

export default AdminSignIn;
