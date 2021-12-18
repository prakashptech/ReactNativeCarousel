import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return JSON.parse(user);
  } catch (err) {
    return false;
  }
};
