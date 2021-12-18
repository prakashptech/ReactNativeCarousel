import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Lesson, Practice } from './screens/Basic';
// import PionoLesson from './screens/PionoLesson';
// import PionoRiyaaz from './screens/PionoRiyaaz';
// import Course from './screens/CourseDetail';
// import Lessons from './screens/Lessons';
// import CourseListActive from './screens/CourseListActive';
// import RiyaazCompleted from './screens/RiyaazCompleted';
// import Feedback from './screens/Feedback';
// import ThankYou from './screens/ThankYou';
// import CourseListAll from './screens/CourseListAll';
import RiyaazCourse from './Auth/screen/RiyaazCourse';
// import RiyaazList from './Auth/screen/RiyaazList';
// import CourseDetail from './screens/CourseDetail';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import ForgotPassword from './Auth/ForgetPassword';
import ResetPassword from './Auth/ResetPassword';
import OTP from './Auth/OTP';
import SplashScreen from 'react-native-splash-screen';
import SelectProfile from './Auth/screen/SelectProfile';

import SplashLogic from './constants/SplashLogic';
import { AuthProvider } from './authContext/AuthContext';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
const App = ({ navigation }) => {
  let sdata = 2;
  const Stack = createNativeStackNavigator();


  useEffect(() => {
    setTimeout(() => {
      SplashLogic();
      SplashScreen.hide();

    }, 2000);
  }, []);
  return (
    <AuthProvider>
      <StatusBar hidden={true} />

      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Lesson"
            component={Lesson}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Practice"
            component={Practice}
            options={{ headerShown: false }}
          /> */}


          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectProfile"
            component={SelectProfile}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="AddProfile"
            component={AddProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditOptionProfile"
            component={EditOptionProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AvailableProfile"
            component={AvailalbeProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="RiyaazCourse"
            component={RiyaazCourse}
            options={{ headerShown: false }}
          />


          {/* <Stack.Screen
            name="PionoLesson"
            component={PionoLesson}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseDetail"
            component={CourseDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseListActive"
            component={CourseListActive}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Course"
            component={Course}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Lessons"
            component={Lessons}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RiyaazCompleted"
            component={RiyaazCompleted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseListAll"
            component={CourseListAll}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen name="AllCourses"     component={AllCourses}  options={{headerShown: false}} /> */}
          {/* <Stack.Screen
            name="RiyaazList"
            component={RiyaazList}
            options={{ headerShown: false }}
          /> */}
          {/*  <Stack.Screen
            name="ThankYou"
            component={ThankYou}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Feedback"
            component={Feedback}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PionoRiyaaz"
            component={PionoRiyaaz}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
