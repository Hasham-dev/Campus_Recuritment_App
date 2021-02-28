/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';
import { ContextProvider } from './components/Provider/ContextApi';

const App = () => {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
