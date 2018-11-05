/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the IconCircle class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { View, Image } from 'react-native'
import { AppStyle } from '../../values';
/**
 * @description stateless function for IconCircle
 * @param {*} param0 
 */
export default function IconCircle({ icon, bgColor, size }) {
    return (
        <View style={[AppStyle.flexCenter, { backgroundColor: bgColor, width: size, height: size, borderRadius: size / 2 }]}>
            <Image source={icon} />
        </View>
    )
}