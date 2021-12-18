import Api from '../constants/Api';
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

export default SplashLogic = () => {


  var deviceId = DeviceInfo.getUniqueId();

  const authentication = async () => {
    try {
      const { data } = await axios.post(Api.baseUrl + Api.authenticationURL, {
        apiAuthDeviceId: deviceId,
      });
    } catch (err) {
      alert('Open your internet  ' + err);
    }
  };
  authentication();
}