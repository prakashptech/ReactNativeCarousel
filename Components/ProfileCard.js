import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from '../utils/Colors';
import GobalStyle from '../utils/GobalStyle';
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    width: scale(80),
    height: scale(80),
    borderRadius: 10,
    marginHorizontal: scale(30),
    marginVertical: scale(10),
  },
  innerCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: scale(40),
    height: scale(40),
    marginVertical: scale(10),
  },
  text: {
    fontSize: 10,
  },
  edit: {
    position: 'absolute',
    right: -8,
    bottom: -4,
  },
});
const ProfileCard = ({ image, name, edit = false }) => {
  return (
    <View style={styles.card}>
      <View style={styles.innerCard}>
        <Image source={image} style={styles.image}></Image>
        <Text style={[GobalStyle.customFont, styles.text]}>{name}</Text>
      </View>
      {edit && (
        <View style={styles.edit}>
          <Image source={require('../Auth/image/edit.png')}></Image>
        </View>
      )}
    </View>
  );
};
export default ProfileCard;
