import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AuthButton from '../Components/AuthButton';
import AuthContainer from '../Components/AuthContainer';
import InputBox from '../Components/InputBox';
import Colors from '../utils/Colors';
import GobalStyle from '../utils/GobalStyle';
import { getScreenHeight, getScreenWidth } from '../utils/Size';
import Toast from 'react-native-simple-toast';
import Loader from "../constants/Loader";
import * as yup from 'yup';
import axios from 'axios';
import Api from '../constants/Api';
import TokenGet from '../constants/TokenGet';
let schema = yup.object().shape({
  newPassword: yup.string().required('new password is required.'),
  confirmPassword: yup.string().required('confirm password is required.'),
});
const styles = StyleSheet.create({
  ImageBackground: {
    width: getScreenWidth(),
    height: getScreenHeight(),
  },
  textBox: {
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});

const ResetPassword = ({ navigation, route }) => {
  const [email, setemail] = useState(
    route.params && route.params.email && route.params.email,
  );
  const [newPassword, setnewpassword] = useState('');
  // const [currentpassword, setcurrentpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [loading, setloading] = useState(false)

  const submit = () => {
    if (newPassword !== confirmPassword) {
      Toast.show('new password and confirm password must be same.');
      return;
    }
    const formData = {
      confirmPassword,
      newPassword,
    };

    const valid = schema
      .validate(formData)
      .then(v => {
        sendData(formData);
      })
      .catch(err => {
        if (err && err.errors) {
          Toast.show(err.errors[0]);
        }
      });
  };
  const sendData = async formData => {
    setloading(true)
    try {
      const { accessToken } = await TokenGet();
      const headers = {
        Authorization: 'Bearer ' + accessToken,
      };


      const data = await axios.post(
        Api.baseUrlNew +
        Api.resetpassword +
        'newPassword=' +
        newPassword +
        '&email=' +
        email,
        {},

        { headers },
      );
      setloading(false)

      Toast.show(data.data.message);
      if (data.data.success) {
        navigation.navigate('SelectProfile');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContainer
      headerText="Reset Password"
      smallHeaderText="Enter your new password to reset.">
      {/* <InputBox
        placeholder="Current Password"
        value={currentpassword}
        setValue={text => setcurrentpassword(text)}
        secureTextEntry
      /> */}

      <InputBox
        placeholder="New Password"
        value={newPassword}
        setValue={text => setnewpassword(text)}
      />

      <InputBox
        placeholder="Confirm Password"
        value={confirmPassword}
        setValue={text => {
          setconfirmPassword(text);
        }}
        secureTextEntry
      />

      <AuthButton
        value="Continue"
        textColor={Colors.black}
        bgcolor={Colors.white}
        onclick={submit}></AuthButton>
      {loading && <Loader loading={loading}></Loader>}

    </AuthContainer>
  );
};

export default ResetPassword;
