import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AuthButton from '../../components/AuthButton';
import AuthContainer from '../../components/AuthContainer';
import InputBox from '../../components/InputBox';
import Colors from '../../utils/Colors';
import Loader from "../../constatnts/Loader";
import {getScreenHeight, getScreenWidth} from '../../utils/Size';
import Toast from 'react-native-simple-toast';
import * as yup from 'yup';
import axios from 'axios';
import Api from '../../constatnts/Api';
let schema = yup.object().shape({
  email: yup.string().email().required(),
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

const ForgotPassword = ({navigation}) => {
  const [email, setemail] = useState('');
const [loading,setloading]=useState(false)
  const submit = () => {
    const formData = {
      email,
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
      const data = await axios.post(
        Api.baseUrlNew + Api.forgotpasssword,
        formData,
      );
      setloading(false)
      Toast.show(data.data.message);
      if (data.data.success) {
        navigation.navigate('OTP', {email: email, page: 'FP'});
      }
    } catch (err) {
      Toast.show(err)
    }
  };
  return (
    <AuthContainer
      headerText="Forgot Password"
      smallHeaderText="Let us know your email and we will send a 6 digits PIN for verification.">
      <InputBox
        placeholder="Email address"
        value={email}
        setValue={text => setemail(text.trim())}
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

export default ForgotPassword;
