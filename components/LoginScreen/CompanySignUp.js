import React from 'react';
import {useContext} from 'react';
import {ScrollView} from 'react-native';
import {
  SignInButton,
  Container,
  ElementText,
  TextInputLine,
  Title,
  LinkText,
} from './SignInElement';
import * as yup from 'yup';
import {Formik} from 'formik';
import {ContextApi} from '../Provider/ContextApi';

const CompanySignUp = ({navigation}) => {
  const {EmailSignUp,setStatus} = useContext(ContextApi);


  const reviewSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  return (
    <ScrollView
    contentContainerStyle={{flex:1}}
    
    >
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
            EmailSignUp(values.email, values.password);
            setStatus('company')
          }}>
          {(props) => (
            <Container>
              <Title>Company SignUp</Title>

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
                <ElementText>Sign Up</ElementText>
              </SignInButton>
            </Container>
          )}
        </Formik>
        <LinkText onPress={() => navigation.navigate('CompanySignIn')}>
          Have an account? SignIn
        </LinkText>
      </Container>
    </ScrollView>
  );
};

export default CompanySignUp;
