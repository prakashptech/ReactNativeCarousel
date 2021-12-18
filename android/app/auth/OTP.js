import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {scale, verticalScale} from 'react-native-size-matters';
import AuthButton from '../../components/AuthButton';
import AuthContainer from '../../components/AuthContainer';
import OTPTextInput from 'react-native-otp-textinput';
import Colors from '../../utils/Colors';
import {getScreenHeight, getScreenWidth} from '../../utils/Size';
import Toast from 'react-native-simple-toast';
import Loader from "../../constatnts/Loader";
import * as yup from 'yup';
import axios from 'axios';
import Api from '../../constatnts/Api';
import TokenSave from '../../constatnts/TokenSave';
let schema = yup.object().shape({
  email: yup.string().email().required(),

  otp: yup.number().required(),
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
  otp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: verticalScale(20),
  },
  otpBox: {
    width: scale(40),
    height: scale(40),
    borderRadius: 15,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const OTP = ({navigation, route}) => {
  const [otp, setOtp] = useState('');
  const [otpInput, setotpInput] = useState('');
  const scrollViewRef = React.useRef();
  const [email, setemail] = useState(route.params.email);
  const[loading,setloading]=useState(false)

  const submit = () => {
    const formData = {
      email,
      otp,
    };
    if (otp.length !== 6) {
      Toast.show('otp must be of 6 digit');
      return;
    }
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
      const data = await axios.get(
        Api.baseUrlNew + Api.verify + 'email=' + email + '&otp=' + otp,
      );
      Toast.show(data.data.message);
      if (data.data.success) {
        let user = {
          accessToken: data.data.accessToken,
          userId: data.data.user.userid,
          userEmail: data.data.user.useremail,
          refreshToken: data.data.refreshToken,
        };

        const saveUser = await TokenSave(user);
      setloading(false)

        if (saveUser) {
          if (route.params && route.params.page && route.params.page == 'FP') {
            navigation.navigate('ResetPassword', {email: email});
          } else {
            navigation.navigate('SelectProfile');
          }
        } else {
          Toast.show('something went wrong. please try again !!');
        }
      }
    } catch (err) {
      Toast.show("something went wrong. please try after sometime.")
    }
  };
  useEffect(() => {}, []);
  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue('1234');
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-500}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <AuthContainer
        headerText="OTP Verification "
        smallHeaderText="We have sent a 6-digit PIN on your email for verification purpose.">
        <OTPTextInput
          ref={e => e}
          inputCount={6}
          offTintColor={Colors.white}
          handleTextChange={value => {
            setOtp(value);
          }}
          disableFullscreenUI={true}
          keyboardType="numeric"
          tintColor={Colors.white}
          textInputStyle={{
            fontSize: 14,
            marginBottom: verticalScale(30),
            borderWidth: 1,
            borderRadius: 5,
            width: scale(40),
            height: scale(40),
            padding: 0,
            backgroundColor: Colors.white,
          }}
        />
        <AuthButton
          value="Continue"
          textColor={Colors.black}
          bgcolor={Colors.white}
          onclick={submit}></AuthButton>
      {loading && <Loader loading={loading}></Loader>}

      </AuthContainer>
    </KeyboardAvoidingView>
  );
};

export default OTP;
