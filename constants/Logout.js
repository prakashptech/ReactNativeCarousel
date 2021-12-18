import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';

export default Logout = async navigation => {
  try {
    const user = await GoogleSignin.signOut();
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }]
    })
    // navigation.navigate('SignIn');
  } catch (error) {
    Toast.show(error)
  }
};
