import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AuthButton from '../../components/AuthButton';
import AuthContainer from '../../components/AuthContainer';
import InputBox from '../../components/InputBox';
import Colors from '../../utils/Colors';
import GobalStyle from '../../utils/GobalStyle';
import {getScreenHeight, getScreenWidth} from '../../utils/Size';
import Toast from 'react-native-simple-toast';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '724359084276-j996svjh24orsdabfimc73o8tgs8r965.apps.googleusercontent.com',
  oofflineAccess: true,
});
import * as yup from 'yup';
import axios from 'axios';
import Api from '../../constatnts/Api';
import TokenSave from '../../constatnts/TokenSave';
import TokenGet from '../../constatnts/TokenGet';
import { verticalScale } from 'react-native-size-matters';
import Loader from "../../constatnts/Loader";

let schema = yup.object().shape({
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
    marginTop:verticalScale(5)
  },
  text: {
    fontSize: 14,
  },
  textForgotBox: {
    alignItems: 'flex-end',
  },
});

const SignIn = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');
  const[loading,setloading]=useState(false)
  useEffect(async () => {
    try {
      const user = await TokenGet();
      if (user && user.accessToken) {
        navigation.replace('SelectProfile');
      }
    } catch (err) {
      // console.log(err);
    }
  }, []);
  const signIn = async () => {
    try {
setloading(true)
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.user)
      sendData(
        {username: userInfo.user.givenName, email: userInfo.user.email,urlimage:userInfo.user.photo},
        true,
      );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Toast.show("cancelled")
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        Toast.show("In progress...")

      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        Toast.show("play services not available or outdated?")

      } else {
        // some other error happened
        Toast.show("something went wrong. please contact to E-swar team!")
      }
    }
  };
  const submit = () => {
    const formData = {
      email,

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
  const sendData = async (formData, loginSocial) => {
    try {
      setloading(true)
console.log(formData)
      const data = await axios.post(
        Api.baseUrlNew + (loginSocial ? Api.socialSignup : Api.signin),
        formData,
      );
      console.log(data.data)
      Toast.show(data.data.message);
      setloading(false)
      if (data.data.success) {
        TokenSave({
          accessToken: data.data.accessToken,
          userId: data.data.user.userid,
          userEmail: data.data.user.useremail,
          refreshToken: data.data.refreshToken,
        });
        navigation.navigate('SelectProfile');
      }
    } catch (err) {
      console.log(err)

      setloading(false)
      Toast.show("something went wrong!")
    }
  };
  return (
    <AuthContainer headerText="Login" smallHeaderText="">
      <InputBox
        placeholder="Email address"
        value={email}
        setValue={text => setemail(text.trim())}
      />
      <InputBox
        placeholder="Password"
        value={password}
        setValue={text => setpassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <View style={styles.textForgotBox}>
          <Text
            style={{
              ...GobalStyle.customFont,
              ...styles.text,
              color: Colors.white,
            }}>
            Forgot Password?
          </Text>
        </View>
      </TouchableOpacity>
      <AuthButton
        value="Login"
        textColor={Colors.black}
        bgcolor={Colors.white}
        onclick={submit}></AuthButton>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <View style={styles.textBox}>
          <Text style={[GobalStyle.customFont, styles.text]}>
            Don't have an account?{' '}
            <Text style={{color: Colors.white}}>Sign Up</Text>
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textBox}>
        <Text>OR</Text>
      </View>
      <AuthButton
        value="Sign in with Google"
        textColor={Colors.white}
        bgcolor={Colors.fbBox}
        icon={true}
        source={require('../../images/auth/google.png')}
        onclick={signIn}></AuthButton>
      {loading && <Loader loading={loading}></Loader>}

    </AuthContainer>
  );
};

export default SignIn;
