import React from 'react'
import { View, Image } from 'react-native'
import { AppStyle } from '../../values';

export default function IconCircle({ icon, bgColor, size }) {
    return (
        <View style={[AppStyle.flexCenter, { backgroundColor: bgColor, width: size, height: size, borderRadius: size / 2 }]}>
            <Image source={icon} />
        </View>
    )
}