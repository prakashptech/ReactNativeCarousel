import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { scale } from 'react-native-size-matters';
import { auth } from '../../authContext/AuthContext'
import ProfileCard from '../../Components/ProfileCard';
import Api from '../../constants/Api'
import ProfileGet from '../../constants/ProfileGet';
import ProfileSave from '../../constants/ProfileSave';
import TokenGet from '../../constants/TokenGet';
import GobalStyle from '../../utils/GobalStyle';
import { getScreenHeight, getScreenWidth } from '../../utils/Size';
import Loader from "../../constants/Loader";


const styles = StyleSheet.create({
    container: { flex: 1 },
    card: {},
    ImageBackground: {
        width: getScreenWidth(),
        height: getScreenHeight(),
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: scale(20),
    },
    topBox: {
        marginHorizontal: scale(getScreenWidth() / 4),
        height: getScreenHeight(),
        marginVertical: scale(60),
    },
    box: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    text: {
        fontSize: 14,
    },
});
const SelectProfile = ({ navigation, route }) => {
    const { profileData } = auth();
    const [loading, setloading] = useState(false);
    const [profiles, setprofiles] = useState([])
    const [edit, setedit] = useState(route.params && route.params.edit && route.params.edit)
    const getData = async formData => {
        try {
            setloading(true);
            const { accessToken } = await TokenGet();
            const headers = {
                Authorization: 'Bearer ' + accessToken,
            };
            const data = await axios.get(Api.baseUrlNew + Api.getprofiles, { headers });
            console.log(data.data)
            if (data.data.success) {
                ProfileSave(data.data.ProfileList);
                setprofiles(data.data.ProfileList);
                profileData(data.data.ProfileList);
                console.log(data.data.ProfileList)
            }
            setloading(false);

        } catch (err) {
            Toast.show("something went wrong.p")
        }
    }
    useEffect(async () => {
        getData();
        setloading(true);

        const profiles = await ProfileGet();

        if (profiles) {
            setprofiles(profiles);
            console.log(profiles)

        }


        setloading(false);


    }, [navigation])

    // const onselectProfile = () => {


    //     if (route.params && route.params.edit && route.params.edit) {
    //         navigation.replace('EditProfile', {
    //             id: v.id, image: v.image,
    //             edi: edit,
    //             name: v.name,
    //         })
    //     } else {


    //         navigation.navigate('RiyaazCourse');

    //     }


    // }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../Auth/image/image_bg.png')}
                style={styles.ImageBackground}>
                <View style={styles.topBox}>
                    <View style={styles.header}>
                        <Text style={[GobalStyle.customFont, styles.text]}>
                            Welcome to google
                        </Text>
                    </View>
                    <View style={styles.box}>
                        {profiles.map((v, i) => {
                            return (
                                <TouchableOpacity key={i}
                                    onPress={() => onselectProfile(v)}>
                                    <ProfileCard
                                        image={{ uri: v.image }}
                                        name={v.name}
                                        edit={route.params && route.params.edit && route.params.edit}
                                    />
                                </TouchableOpacity>

                            )
                        })

                        }
                        {/* {profiles.length < 4 &&
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.replace('EditOptionProfile');
                                }}>
                                <ProfileCard
                                    image={require('../../Auth/image/add.png')}
                                    name="Add Profile"
                                />
                            </TouchableOpacity>
                        } */}
                    </View>
                </View>
                {loading && <Loader loading={loading}></Loader>}

            </ImageBackground>
        </SafeAreaView>
    );
};

export default SelectProfile;
