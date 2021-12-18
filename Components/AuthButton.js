import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Touchable,
    TouchableOpacity,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Colors from '../utils/Colors'
import GobalStyle from '../utils/GobalStyle';
const styles = StyleSheet.create({
    buttoBox: {
        backgroundColor: Colors.white,
        borderRadius: 25,
        height: verticalScale(40),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: verticalScale(20),
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 14,
    },
    imageIcon: {
        resizeMode: 'contain',
        marginHorizontal: scale(20),
    },
});
const AuthButton = ({ value, bgcolor, icon, source, textColor, onclick }) => {
    return (
        <TouchableOpacity onPress={onclick}>
            <View style={{ ...styles.buttoBox, backgroundColor: bgcolor }}>
                {icon && <Image source={source} style={styles.imageIcon}></Image>}
                <Text
                    style={{
                        ...styles.buttonText,
                        ...GobalStyle.customFont,
                        color: textColor,
                    }}>
                    {value}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default AuthButton;
