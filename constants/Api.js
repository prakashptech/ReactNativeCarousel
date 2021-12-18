export default Api = {
  baseUrl: 'http://68.183.25.24:8084/api',
  baseUrlNew: 'http://68.183.25.24:8086/api',

  courseListApi: '/course/app/allactivecourses/', //without id
  lessonListApi: '/courselessonmapping/app/courseinfo/',
  feedbackApi: '/feedback/app/userfeedback/',
  locationApi: '/location/app/userlocation/',
  lessonDetail: '/lesson/app/lessoninfo/', //with id
  riyaazList: '/lessonquestionmapping/app/practices/', //without id
  riyaazDetail: '/lessonquestionmapping/app/questionsforapractice/', //with id
  authenticationURL: '/apiauthdeviceid/app/deviceid/',

  //   auth endpoint
  signup: '/user/signup/',
  signin: '/user/login/',
  verify: '/user/verify/?', //query params
  resetpassword: '/user/resetpassword/?', //query params
  forgotpasssword: '/user/forgotpassword/',
  socialSignup: '/user/socialSignup/',

//profile endpoint
getprofiles:'/profile/listProfiles/',    // with user id
createprofile:'/profile/createProfile/',
updateProfile:'/profile/updateprofile',
deleteprofile:'/profile/deleteprofile/',   // with profile id
availableProfiles:'/profile/listimages',
};
