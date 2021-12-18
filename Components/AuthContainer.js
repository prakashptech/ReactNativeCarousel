import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    SafeAreaView,
} from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from '../utils/Colors';
import GobalStyle from '../utils/GobalStyle';
import { getScreenHeight, getScreenWidth } from '../utils/Size';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageBackground: {
        width: getScreenWidth(),
        height: getScreenHeight(),
    },
    marginBox: {
        marginHorizontal: scale(getScreenWidth() / 3.8),
    },
    headerBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: scale(20),
    },
    headerText: {
        fontSize: 30,
        color: Colors.black,
    },
    smallheaderBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(10),
    },
    smallheaderText: {
        fontSize: 14,
        color: Colors.black,
        textAlign: 'center',
    },
    line: {
        marginVertical: scale(-3),
        width: scale(60),
        height: scale(3),
        backgroundColor: Colors.line,
    },
});

const AuthContainer = ({ children, headerText, smallHeaderText, ...props }) => {
    const [t, st] = useState(smallHeaderText ? true : false);
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={-500}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../Auth/image/image_bg.png')}
                    style={styles.ImageBackground}>
                    <ScrollView>
                        <View style={styles.marginBox}>
                            <View style={styles.headerBox}>
                                <Text style={[GobalStyle.customFont, styles.headerText]}>
                                    {headerText}
                                </Text>
                                <View style={styles.line}></View>
                            </View>
                            {t && (
                                <View style={styles.smallheaderBox}>
                                    <Text style={[GobalStyle.customFont, styles.smallheaderText]}>
                                        {smallHeaderText}
                                    </Text>
                                </View>
                            )}
                            <View>{children}</View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AuthContainer;
