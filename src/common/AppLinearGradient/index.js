/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the LinearGradient class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'

import LinearGradient from 'react-native-linear-gradient'

import { Color } from '../../values'
export default function AppLinearGradient({ children, style, colors }) {
    return (
        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={colors || [Color.redOrange, Color.scarlet]} style={style}>
            {children}
        </LinearGradient>
    )
}