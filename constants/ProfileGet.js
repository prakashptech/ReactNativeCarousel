import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default getProfiles = async () => {
  try {
    const user = await AsyncStorage.getItem('profiles');
    return JSON.parse(user);
  } catch (err) {
    return false;
  }
};
