import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from '../authContext/AuthContext';

export default saveToken = async user => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));

    return true;
  } catch (err) {
    return false;
  }
};
