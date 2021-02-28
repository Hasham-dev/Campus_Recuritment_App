import React from 'react';
import {useContext} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {
  SignInButton,
  Container,
  ElementText,
  TextInputLine,
  Title,
  LinkText,
} from './StudentFormElemet';
import * as yup from 'yup';
import {Formik} from 'formik';
import {ContextApi} from '../../Provider/ContextApi';
import FontAwesomeTwo from 'react-native-vector-icons/AntDesign';

const StudentForm = ({setDonorModal, donorModal}) => {
  const {EmailSignUp, setStatus, user, FirebaseStudentInput} = useContext(
    ContextApi,
  );

  const reviewSchema = yup.object({
    firstName: yup.string().required(),
    surName: yup.string().required(),
  });
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Container>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => setDonorModal(!donorModal)}>
          <FontAwesomeTwo name="close" size={30}  />
        </TouchableOpacity>
        <Formik
          initialValues={{
            firstName: '',
            surName: '',
            userId: user.uid,
            age: '',
            gender: '',
            department: '',
            skills: '',
            email: '',
            contactNumber: '',
          }}
          validationSchema={reviewSchema}
          onSubmit={(values) => {
            console.log(values);

            setDonorModal(!donorModal);
            FirebaseStudentInput(values);
          }}>
          {(props) => (
            <Container>
              <Title>Student Registration</Title>

              <TextInputLine
                onChangeText={props.handleChange('firstName')}
                placeholder={'firstName'}
                value={props.values.firstName}
                onBlur={props.handleBlur('firstName')}
              />

              <TextInputLine
                onChangeText={props.handleChange('surName')}
                placeholder={'surName'}
                value={props.values.surName}
                onBlur={props.handleBlur('surName')}
              />

              <TextInputLine
                onChangeText={props.handleChange('age')}
                placeholder={'age'}
                value={props.values.age}
                onBlur={props.handleBlur('age')}
              />

              <TextInputLine
                onChangeText={props.handleChange('gender')}
                placeholder={'gender'}
                value={props.values.gender}
                onBlur={props.handleBlur('gender')}
              />

              <TextInputLine
                onChangeText={props.handleChange('department')}
                placeholder={'department'}
                value={props.values.department}
                onBlur={props.handleBlur('department')}
              />

              <TextInputLine
                onChangeText={props.handleChange('skills')}
                placeholder={'skills'}
                value={props.values.skills}
                onBlur={props.handleBlur('skills')}
              />

              <TextInputLine
                onChangeText={props.handleChange('email')}
                placeholder={'email'}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />

              <TextInputLine
                onChangeText={props.handleChange('contactNo')}
                placeholder={'contactNo'}
                value={props.values.contactNo}
                onBlur={props.handleBlur('contactNo')}
              />

              <SignInButton onPress={props.handleSubmit}>
                <ElementText>Submit</ElementText>
              </SignInButton>
            </Container>
          )}
        </Formik>
      </Container>
    </ScrollView>
  );
};

export default StudentForm;
