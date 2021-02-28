import React, {useContext, useEffect} from 'react';
import {createDrawerNavigator,DrawerItem} from '@react-navigation/drawer';
import Dashboard from '../components/Dashboard';
import CompanyBoard from '../components/LoginScreen/Pages/CompanyBoard';
import StudentBoard from '../components/LoginScreen/Pages/StudentBoard';
import { ContextApi } from '../components/Provider/ContextApi';
import LoginScreen from '../components/LoginScreen/LoginScreen';

const Drawer = createDrawerNavigator();


export default function DrawerStack() {
  const {logout} = useContext(ContextApi);
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Companies List" component={CompanyBoard} />
      <Drawer.Screen name="Student List" component={StudentBoard} />
      <Drawer.Screen name="Logout" component={LoginScreen} />
      
    </Drawer.Navigator>
  );
}
