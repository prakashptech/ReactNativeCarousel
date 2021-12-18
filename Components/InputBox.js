import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import { scale, verticalScale } from 'react-native-size-matters';
import { getScreenWidth } from '../utils/Size';

const styles = StyleSheet.create({
    input: {
        height: verticalScale(40),
        paddingHorizontal: scale(15),
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 25,
        marginVertical: scale(15),

        // color: Colors.gray75,
        // ...Fonts.p2(),
    },
});
const InputBox = ({
    initialValue,
    placeholder,
    error,
    labelColor,
    renderRightComponent,
    hideError,
    secureTextEntry,
    value,
    setValue,
    keyboardType,
}) => {
    const [isFocused, setFocused] = useState(false);
    const [isSecureVisible, setSecureVisible] = useState(secureTextEntry);

    const inputRef = useRef(null);

    const isActive = value !== null && value !== '';
    return (
        <View>
            <TextInput
                defaultValue={initialValue}
                value={value}
                placeholder={placeholder}
                style={[styles.input]}
                autoCapitalize="none"
                onFocus={() => setFocused(true)}
                onEndEditing={() => setFocused(false)}
                ref={ref => {
                    inputRef.current = ref;
                }}
                onChangeText={setValue}
                underlineColorAndroid="transparent"
                secureTextEntry={isSecureVisible}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default InputBox;
