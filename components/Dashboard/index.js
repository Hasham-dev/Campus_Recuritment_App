import React from 'react';
import {useContext} from 'react';
import {ContextApi} from '../Provider/ContextApi';
import {
  Card,
  CardContainer,
  CardNumber,
  CardTitle,
  Container,
  Navbar,
  NavIcon,
  NavTitle,
} from './DashboardElement';
import FontAwesome from 'react-native-vector-icons/Entypo';
import FontAwesomeOne from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeTwo from 'react-native-vector-icons/MaterialCommunityIcons';

const Dashboard = ({navigation}) => {
  const {status, logout} = useContext(ContextApi);

    return (
      <Container>
        <Navbar>
          <NavIcon>
            <FontAwesome
              onPress={() => navigation.toggleDrawer()}
              name={'menu'}
              size={26}
              color={'black'}
            />
          </NavIcon>
          <NavTitle>Dashboard {status}</NavTitle>
        </Navbar>
        <CardContainer >
          <Card onPress={() => navigation.navigate('Companies List')}>
            <FontAwesomeTwo
              
              name={'factory'}
              size={50}
              color={'black'}
            />
            <CardTitle>Student Applications</CardTitle>
            <CardNumber>45+</CardNumber>
          </Card>
          <Card onPress={() => navigation.navigate('Student List')}>
            <FontAwesomeOne
              onPress={() => {
                console.log('Process');
                logout();
              }}
              name={'people-alt'}
              size={50}
              color={'black'}
            />
            <CardTitle>Companies Registered</CardTitle>

            <CardNumber>45+</CardNumber>
          </Card>
        </CardContainer>
      </Container>
    );

  
}

export default Dashboard;
