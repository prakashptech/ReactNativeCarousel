import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../authContext/AuthContext';

export default saveProfile = async user => {
// const {profileData}=auth();

    // profileData(user);

  try {
    await AsyncStorage.setItem('profiles', JSON.stringify(user));
    
    return true;
  } catch (err) {
    console.log(err)

    return false;
  }
};
