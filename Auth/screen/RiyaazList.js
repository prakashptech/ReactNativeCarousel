// import React, { useEffect, useState } from "react";
// import {
//   BackHandler,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   ImageBackground,
//   TouchableOpacity,
//   Dimensions,
//   Image, Modal, TouchableWithoutFeedback
// } from "react-native";
// import { Searchbar } from "react-native-paper";
// import axios from "axios";
// import Loader from "../../constants/Loader";
// import Api from "../../constants/Api";
// import DeviceInfo from "react-native-device-info";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import GobalStyle from "../../utils/GobalStyle";

// const dimensions = Dimensions.get("window");
// const imageHeight = dimensions.height;
// const imageWidth = dimensions.width;
// let date;
// let finalDate;
// // const [modalVisible,setModalVisible]=useState(false);
// // let modalVisible=false;
// const getStoreData = async (id, mv, title) => {
//   console.log("object");
//   try {

//     date = await AsyncStorage.getItem(id);
//     if (date == null) {
//       finalDate = "'" + title + "'" + " Not Completed Yet !!";
//     } else {

//       finalDate = "'" + title + "'" + " completed on " + date;
//     }
//     console.log(id, date);
//     // alert(finalDate);
//     // modalVisible=true;
//     mv(true);

//   } catch (e) {
//     alert(e);

//     // saving error
//   }
// };
// const Items = ({ id, title, desc, navigation, mv }) => (
//   <View
//     key={id}
//     style={styles.viewdesc}
//   >
//     <TouchableOpacity
//       onPress={() =>
//         navigation.replace("PionoRiyaaz", {
//           id: id,
//           title: title,
//           desc: desc,
//         })
//       }
//     >
//       <ImageBackground
//         source={require("../../Auth/image/image_bg.png")}
//         style={styles.newItem}
//       >
//         <View style={styles.viewBelow}>
//           <Text
//             style={[GobalStyle.customFont, styles.textModal]}
//           >
//             {title}
//           </Text>
//           <View
//             style={styles.viewTitle}
//           ></View>
//           <Text
//             style={[GobalStyle.customFont, styles.textTop]}
//           >
//             {desc}
//           </Text>

//           <TouchableOpacity
//             onPress={() =>
//               navigation.replace("PionoRiyaaz", {
//                 id: id,
//                 title: title,
//                 desc: desc,
//               })
//             }
//           >
//             <View
//               style={styles.viewStart}
//             >
//               <Text
//                 style={[GobalStyle.customFont, styles.textStart]}
//               >
//                 Start
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               getStoreData(id, mv, title);
//             }
//             }
//           >
//             <View
//               style={styles.viewStatus}
//             >
//               <Text
//                 style={[GobalStyle.customFont, styles.textStatus]}
//               >
//                 Status
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </TouchableOpacity>
//   </View>
// );

// const RiyaazList = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = React.useState("");
//   const [DATA, setDATA] = useState([]);
//   const [animate, setAnimate] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   const onChangeSearch = (query) => setSearchQuery(query);
//   const renderItem = ({ item }) => (
//     <Items
//       title={item.lessonRiyaazTitle}
//       desc={item.lessonTitle}
//       navigation={navigation}
//       id={item._id}
//       mv={setModalVisible}

//     />
//   );


//   const CourseList = async () => {
//     setAnimate(true);
//     try {
//       var deviceId = DeviceInfo.getUniqueId();

//       const { data } = await axios.get(Api.baseUrl + Api.riyaazList + deviceId);
//       setDATA(data.data);
//       setAnimate(false);

//       console.log(DATA);
//     } catch (err) {
//       alert("Opps! Something went wrong... please try later ");
//       setAnimate(false);
//     }
//   };
//   // let finalDate;
//   // function showDate(){
//   // let date=(''+new Date()).split(" ")[2];
//   // let year=(''+new Date()).split(" ")[3];
//   // let month=(''+new Date()).split(" ")[1];
//   // let hours=new Date().getHours();
//   // let minutes=new Date().getMinutes();
//   // let hour;
//   // let dateFormate;
//   // if(hours>12){
//   //    hour= hours-12
//   //    dateFormate='P.M.';
//   // }else if(hours==12){
//   //    dateFormate='P.M.';

//   // }else if(hours==0){
//   //   dateFormate='A.M.';
//   // hour=12;
//   // }else{
//   //   dateFormate='A.M.';

//   // }
//   //  finalDate= date+"-"+month+"-"+year+","+hour+":"+minutes+" " +dateFormate;
//   // console.log(finalDate);

//   // }
//   // showDate();
//   // let date;

//   // getStoreData();

//   useEffect(() => {
//     CourseList();
//     return () => {
//       //
//     };
//   }, []);

//   return (
//     <>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         supportedOrientations={[
//           "portrait",
//           "landscape",
//           "landscape-left",
//           "landscape-right",
//         ]}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(false);
//         }}
//       >
//         <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>
//                 {finalDate}
//               </Text>
//               {/* <View
//                 style={{
//                   height: 1,
//                   width: 300,
//                   backgroundColor: "#e5e8e7",
//                   marginTop: 10,
//                   marginBottom: 10,
//                 }}
//               ></View>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <TouchableOpacity
//                   style={{ width: "60%", height: "120%" }}
//                   onPress={() => {
//                     getLocation();
//                   }}
//                 >
//                   <View style={{}}>
//                     <Text
//                       style={{
//                         color: "black",
//                         fontSize: 20,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}
//                     >
//                       Allow
//                     </Text>
//                   </View>
//                 </TouchableOpacity>

//                 <View
//                   style={{ height: 30, width: 2, backgroundColor: "#e5e8e7" }}
//                 ></View>
//                 <TouchableOpacity
//                   style={{ width: "60%", height: "120%" }}
//                   onPress={() => {
//                     setModalVisible(!modalVisible);
//                     navigation.navigate("RiyaazCourse");
//                   }}
//                 >
//                   <View style={{}}>
//                     <Text
//                       style={{
//                         color: "#9ca4a1",
//                         fontSize: 20,
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}
//                     >
//                       Deny
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               </View> */}
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>
//       <View style={styles.viewModal}>
//         <ImageBackground
//           source={require("../images/image_bg.png")}
//           style={styles.imageBg}
//         >
//           <View style={styles.viewMaxico}>
//             <View style={styles.viewMax}>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate("RiyaazCourse")}
//                 style={styles.press}
//               >
//                 <Image
//                   source={require("../images/backarrow.png")}
//                   style={styles.imageNum}
//                 ></Image>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.viewShow}>
//               <Searchbar
//                 style={styles.viewSearch}
//                 placeholder="Search By Title"
//                 onChangeText={onChangeSearch}
//                 value={searchQuery}
//                 icon={require("../images/search_icon.png")}
//                 clearIcon={require("../images/trans.png")}
//               />
//             </View>
//             <View
//               style={styles.viewList}
//             >
//               <TouchableOpacity onPress={() => navigation.navigate("Feedback")}>
//                 <Image
//                   source={require("../images/feedback.png")}
//                   style={{ alignSelf: "flex-end", marginRight: 20 }}
//                 ></Image>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 onPress={() => navigation.navigate("RiyaazCourse")}
//               >
//                 <Image
//                   source={require("../images/Home.png")}
//                   style={{ alignSelf: "flex-end" }}
//                 ></Image>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View
//             style={styles.imageView}
//           >
//             {animate ? (
//               <Loader animate={animate}></Loader>
//             ) : (
//               <FlatList
//                 data={DATA.filter((val) => {
//                   if (searchQuery == "") {
//                     return val;
//                   } else if (
//                     val.lessonRiyaazTitle
//                       .toLowerCase()
//                       .includes(searchQuery.toLowerCase())
//                   ) {
//                     return val;
//                   }
//                 })}
//                 showsVerticalScrollIndicator={false}
//                 showsHorizontalScrollIndicator={false}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item._id}
//                 numColumns={2}
//                 style={{}}
//               />
//             )}
//           </View>
//         </ImageBackground>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   newItem: { width: 260, height: 270, paddingLeft: 35 },
//   viewBelow: { justifyContent: "center", alignItems: "center" },
//   textModal: {
//     textAlign: "center",
//     color: "white",
//     fontWeight: "bold",
//     marginTop: 50,
//     fontSize: 20,
//   },
//   viewTitle: {
//     height: 2,
//     width: 20,
//     backgroundColor: "white",
//     alignSelf: "center",
//     margin: 5,
//   },
//   textTop: {
//     textAlign: "center",
//     color: "white",
//     fontWeight: "600",
//     fontSize: 12,
//   },
//   viewStart: {
//     backgroundColor: "white",
//     borderRadius: 25,
//     width: 80,
//     height: 20,
//     alignSelf: "center",
//     marginTop: 15,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textStart: {
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center",
//     fontSize: 15,


//     paddingTop: 0,
//   },
//   viewStatus: {
//     backgroundColor: "white",
//     borderRadius: 25,
//     width: 80,
//     height: 20,
//     alignSelf: "center",
//     marginTop: 10,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textStatus: {
//     color: "black",
//     fontWeight: "900",
//     textAlign: "center",
//     fontSize: 18,
//     fontSize: 14,
//     fontWeight: "bold",
//     paddingTop: 0,
//   },
//   viewModal: { flex: 1 },
//   imageBg: { width: imageWidth, height: imageHeight },
//   viewMaxico: { flexDirection: "row", height: "20%", marginBottom: 10 },
//   press: { width: 35, height: 35 },
//   viewMax: { flex: 1, marginLeft: 35, marginTop: 20 },
//   viewShow: { flex: 1, marginTop: 20 },
//   imageNum: { alignSelf: "flex-start" },
//   viewSearch: {
//     width: 300,
//     borderRadius: 25,
//     alignSelf: "center",
//     height: 45,
//     padding: 0,
//   },
//   viewList: {
//     flex: 1,
//     justifyContent: "flex-end",
//     flexDirection: "row",
//     padding: 20,
//     marginRight: 30,
//   },
//   imageView: {
//     flex: 1,
//     height: "80%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   viewdesc: { padding: 15, justifyContent: "center", alignItems: "center" },
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 10,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     width: 300,
//     backgroundColor: "white",
//     borderRadius: 15,
//     padding: 35,
//     paddingBottom: 10,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//     color: "black",
//     fontWeight: 'bold'
//   },

// });

// export default RiyaazList;
