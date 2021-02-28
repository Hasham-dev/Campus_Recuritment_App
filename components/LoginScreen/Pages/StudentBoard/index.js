import React, {useContext} from 'react';
import {
  Text,
  Modal,
  View,
  TouchableWithoutFeedback,
  Button,
  ScrollView,
  Keyboard,
  FlatList,
} from 'react-native';
import {useState} from 'react';
import {ContextApi} from '../../../Provider/ContextApi';
import StudentForm from '../../../Form/StudentForm/index';
import { Container,FontVector} from './StudentBoardElement';
import {useEffect} from 'react';
import {CardContainer} from '../../../Dashboard/DashboardElement';
import FontAwesomeTwo from 'react-native-vector-icons/AntDesign';

const StudentBoard = () => {
  const [donorModal, setDonorModal] = useState(false);
  const {getUser, allUsers} = useContext(ContextApi);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View>
      <Modal animationType="slide" visible={donorModal}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <StudentForm
              setDonorModal={setDonorModal}
              donorModal={donorModal}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </Modal>
     

      <FlatList
        data={allUsers}
        renderItem={({item}) => (
          <CardContainer>
            <Container onPress={() => console.log(item)}>
              <Text>{item._data.firstName}</Text>
              <Text>{item._data.surName}</Text>
              <Text>{item._data.gender}</Text>
              <Text>{item._data.skills}</Text>
              <Text>{item._data.department}</Text>
              <Text>{item._data.email}</Text>
            </Container>
          </CardContainer>
        )}
      />
      <FontVector
      onPress={() => {
        setDonorModal(!donorModal);
      }}
      >

      <FontAwesomeTwo 
      name="pluscircle"
      size={40}
      color="#4b8eeb"
      />
      </FontVector>
    </View>
  );
};

export default StudentBoard;
