import React, {createContext} from 'react';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
export const ContextApi = createContext();
import firestore from '@react-native-firebase/firestore';

export const ContextProvider = ({children, navigation}) => {
  const [status, setStatus] = useState();
  const [user, setUser] = useState();
  const [allUsers, setAllUsers] = useState();
  const [companyData, setCompanyData] = useState();
  const getUser = async () => {
    const userDocument = await firestore()
      .collection('users')
      .doc('UW6nTBTkLMrOUKbXcI2A')
      .collection('student')
      .get();
    const userData = await userDocument.docs;

    setAllUsers(userData);
    console.log(userData);
  };

  const FirebaseCompanyInput = (values) => {
    firestore()
      .collection(`users/UW6nTBTkLMrOUKbXcI2A/company`)
      .add(values)
      .then(() => {
        console.log('User added!');
      });
  };

  const FirebaseStudentInput = (values) => {
    firestore()
      .collection(`users/UW6nTBTkLMrOUKbXcI2A/student`)
      .add(values)
      .then(() => {
        console.log('User added!');
      });
  };

  const getAllCompany = async () => {
    const userDocument = await firestore()
      .collection('users')
      .doc('UW6nTBTkLMrOUKbXcI2A')
      .collection('company')
      .get();
    const userData = await userDocument.docs;

    setCompanyData(userData);
  };

  const EmailSignUp = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('Error', 'That email address is already in use!', [
            {
              text: 'Continue',
            },
          ]);
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!', [
            {
              text: 'Continue',
            },
          ]);
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <ContextApi.Provider
      value={{
        user,
        setUser,
        status,
        EmailSignUp,
        setStatus,
        logout,
        allUsers,
        getUser,
        FirebaseCompanyInput,
        FirebaseStudentInput,
        getAllCompany,
        companyData,
      }}>
      {children}
    </ContextApi.Provider>
  );
};
