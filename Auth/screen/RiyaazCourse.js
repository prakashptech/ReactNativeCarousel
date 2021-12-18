import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import GobalStyle from '../../utils/GobalStyle';
import GlobalStyle from '../../utils/GobalStyle';
import { auth } from '../../authContext/AuthContext';
import {
  Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { getScreenWidth } from '../../utils/Size';
import { scale } from 'react-native-size-matters';

const RiyaazCourse = ({ navigation }) => {
  const { scaleSelection } = auth();
  const dimensions = Dimensions.get('window');
  const imageHeight = dimensions.height;
  const image = require('../../Auth/image/courses_riyaaz_bg.png');
  const [showDropDown, setShowDropDown] = useState(false);
  const [chooseScale, setchooseScale] = useState("");
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const scaleList = [
    {
      label: "C",
      value: "c",
    },
    {
      label: "D",
      value: "d",
    },
    {
      label: "E",
      value: "e",
    },
    {
      label: "F",
      value: "f",
    }, {
      label: "G",
      value: "g",
    }, {
      label: "A",
      value: "a",
    }, {
      label: "B",
      value: "b",
    },
  ];
  const imageWidth = dimensions.width;
  useEffect(() => {
    scaleSelection(chooseScale);

  }, [])
  const theoryClick = () => {
    scaleSelection(chooseScale)
    navigation.navigate('CourseListActive');
  }
  return (
    <>
      <Provider>

        <StatusBar hidden={true} />
        <View style={styles.viewHidden}>
          <ImageBackground
            source={image}
            imageStyle={styles.imageShow}
            style={{ flex: 1, width: imageWidth }}>
            <View style={styles.viewFlexModal}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SelectProfile')}>
                <Image
                  source={require('../../Auth/image/user_black.png')}
                  style={styles.feedbackImg}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                <Image
                  source={require('../../Auth/image/feedback.png')}
                  style={styles.feedbackImg}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <Image
                  source={require('../../Auth/image//settings.png')}
                  style={styles.feedbackImg}></Image>
              </TouchableOpacity>

            </View>
            <View style={{ width: 150, position: 'absolute', right: scale(25), top: '20%', borderRadius: 25, }}>
              <DropDown
                label={"Select Scale"}
                mode={"outlined"}

                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={chooseScale}
                setValue={setchooseScale}
                list={scaleList}
                dropDownStyle={{}}
              />
            </View>
            <View style={styles.viewModal}>
              <View style={styles.viewBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CourseListActive')}>
                  <Image
                    source={require('../../Auth/image/courses_icon.png')}
                    style={styles.imageView}></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={theoryClick}>
                  <View style={styles.viewRiyaazC}>
                    <Text style={(GlobalStyle.customFont, styles.viewTheory)}>
                      Theory
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.viewIn}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RiyaazList')}>
                  <Image
                    source={require('../../Auth/image/riyaaz_icon.png')}
                    style={styles.imageStyles}></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RiyaazList')}>
                  <View style={styles.viewTraining}>
                    <Text style={[GobalStyle.customFont, styles.textEar]}>
                      Ear Training Riyaaz
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Provider>
    </>
  );
};
const styles = StyleSheet.create({
  imageShow: { resizeMode: 'stretch' },
  viewHidden: { flex: 1 },
  viewFlexModal: {
    height: '20%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbackImg: { alignSelf: 'flex-end', marginRight: 30 },
  viewModal: { flexDirection: 'row', margin: -40 },
  viewBox: { flex: 1, paddingRight: 50, alignItems: 'flex-end' },
  imageView: {
    width: 130,
    height: 130,
    alignSelf: 'flex-end',
    marginBottom: 0,
  },
  viewRiyaazC: {
    marginTop: 20,
    marginRight: -20,
    width: 170,
    height: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  viewTheory: { color: 'black', textAlign: 'center', fontWeight: 'bold' },
  viewIn: { flex: 1, paddingLeft: 20, alignItems: 'flex-start' },
  imageStyles: { width: 130, height: 130, marginBottom: 0 },
  viewTraining: {
    marginTop: 20,
    marginLeft: 0,
    width: 170,
    height: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  textEar: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default RiyaazCourse;
