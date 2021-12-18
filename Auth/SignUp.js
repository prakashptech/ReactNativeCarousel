import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import AuthButton from '../Components/AuthButton';
import AuthContainer from '../Components/AuthContainer';
import InputBox from '../Components/InputBox';
import Colors from '../utils/Colors';
import GobalStyle from '../utils/GobalStyle';
import { getScreenHeight, getScreenWidth } from '../utils/Size';
import Toast from 'react-native-simple-toast';
import * as yup from 'yup';
import axios from 'axios';
import Api from '../constants/Api';
import { verticalScale } from 'react-native-size-matters';
import Loader from "../constants/Loader";
import { FLOWBASEANNOTATION_TYPES } from '@babel/types';

let schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),

  password: yup.string().required(),
});

const styles = StyleSheet.create({
  ImageBackground: {
    width: getScreenWidth(),
    height: getScreenHeight(),
  },
  textBox: {
    alignItems: 'center',
    marginBottom: verticalScale(20)
  },
  text: {
    fontSize: 14,
  },
});

const SignUp = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [loading, setloading] = useState(false)

  const submit = () => {
    if (password !== confirmPassword) {
      Toast.show('password and confirm password must be same.');
      return;
    }
    const formData = {
      username,
      email,
      phone,
      password,
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
    try {
      setloading(true)
      const data = await axios.post(Api.baseUrlNew + Api.signup, formData);
      Toast.show(data.data.message);
      setloading(false)
      if (data.data.success) {
        navigation.navigate('OTP', { email: email });
      }
    } catch (err) {
      Toast.show("something went wrong!")
      setloading(false)

      console.log(err)
    }
  };
  return (
    <AuthContainer headerText="Create Account" smallHeaderText="">
      <InputBox
        placeholder="Name"
        value={username}
        setValue={text => setusername(text)}
      />
      <InputBox
        placeholder="Email address"
        value={email}
        setValue={text => setemail(text.trim())}
      />
      <InputBox
        placeholder="Phone(optional)"
        value={phone}
        setValue={text => setphone(text)}
        keyboardType="numeric"
      />
      <InputBox
        placeholder="Password"
        value={password}
        setValue={text => setpassword(text)}
      />
      <InputBox
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        setValue={text => setconfirmPassword(text)}
      />
      <AuthButton
        value="Sign up"
        textColor={Colors.black}
        bgcolor={Colors.white}
        onclick={() => {
          submit();
        }}></AuthButton>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <View style={styles.textBox}>
          <Text style={[GobalStyle.customFont, styles.text]}>
            Already have an account?{' '}
            <Text style={{ color: Colors.white }}>Login here</Text>
          </Text>
        </View>
      </TouchableOpacity>
      {loading && <Loader loading={loading}></Loader>}

    </AuthContainer>
  );
};

export default SignUp;
