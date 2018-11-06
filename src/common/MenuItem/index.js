/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the IconCircle class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { AppStyle, Color, Sizes } from '../../values';
/**
 * @description stateless function for IconCircle
 * @param {*} param0 
 */
export default function MenuItem({ image, children }) {
    return (
        <View style={styles.container}>
            <Image style={styles.imgOverlay} source={require('../../assets/image/test.jpg')} />
            <View style={styles.content}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.containerFluid,
        ...AppStyle.flexCenter,
        position: 'relative'
    },
    imgOverlay: {
        position: 'absolute',
        top: 0,
        width: '90%',
        height: '60%',
        zIndex: 1,
        borderRadius: Sizes.BORDER_RADIUS * 2,
    },
    content: {
        ...AppStyle.container,
        marginTop: '10%',
        backgroundColor: Color.white,
        height: '90%',
        paddingTop: '60%',
        borderRadius: Sizes.BORDER_RADIUS * 2,
    }
})