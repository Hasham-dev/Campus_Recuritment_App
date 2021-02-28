import React, {useContext, useEffect} from 'react';
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
import CompanyForm from '../../../Form/CompanyForm.';
import {ContextApi} from '../../../Provider/ContextApi';
import {Container, CardContainer,FontVector} from './CompanyBoardElement';
import FontAwesomeTwo from 'react-native-vector-icons/AntDesign';

const CompanyBoard = () => {
  const [donorModal, setDonorModal] = useState(false);
  const {getAllCompany, companyData} = useContext(ContextApi);

  useEffect(() => {
    getAllCompany();
    console.log(companyData);
  }, []);
  return (
    <View>
      <Modal animationType="slide" visible={donorModal}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <CompanyForm
              setDonorModal={setDonorModal}
              donorModal={donorModal}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </Modal>
      
      {/* {companyData && ( */}
      <FlatList
        data={companyData}
        renderItem={({item}) => (
          <CardContainer onPress={() => console.log(item)}>
            <Container>
              <Text>{item._data.companyName}</Text>
              <Text>{item._data.contactNo}</Text>
              <Text>{item._data.email}</Text>
              <Text>{item._data.establishment}</Text>
              <Text>{item._data.hr}</Text>
            </Container>
          </CardContainer>
        )}
      />
      <FontVector
      onPress={() => {
        setDonorModal(!donorModal);
        console.log('Pressed');
      }}
      >

      <FontAwesomeTwo 
      name="pluscircle"
      size={40}
      color="#4b8eeb"
      />
      </FontVector>
      {/* )} */}
    </View>
  );
};

export default CompanyBoard;
