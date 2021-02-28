import React,{useState} from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import AdminSignIn from '../components/LoginScreen/AdminSignIn';
import CompanySignIn from '../components/LoginScreen/CompanySignIn';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import StudentSignIn from '../components/LoginScreen/StudentSignIn';
import {createStackNavigator} from '@react-navigation/stack';
import StudentSignUp from '../components/LoginScreen/StudentSignUp';
import CompanySignUp from '../components/LoginScreen/CompanySignUp';
import Dashboard from '../components/Dashboard';
import DrawerStack from './Drawer';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {useContext} from 'react';
import {ContextApi} from '../components/Provider/ContextApi';

const Stack = createStackNavigator();

const Router = () => {
  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(ContextApi);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="CompanySignIn" component={CompanySignIn} />
        <Stack.Screen name="StudentSignIn" component={StudentSignIn} />
        <Stack.Screen name="AdminSignIn" component={AdminSignIn} />
        <Stack.Screen name="StudentSignUp" component={StudentSignUp} />
        <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
        <Stack.Screen name="Dashboard" component={DrawerStack} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Dashboard" component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default Router;
