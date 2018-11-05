/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the APP Devices values.
 * @author ADAMO
 * @since  10/15/2018
 */
import { Platform, Dimensions, StatusBar } from 'react-native'

const isIos = Platform.OS === 'ios';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    isIPhoneX = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT;
}

function getStatusBarHeight() {
    if (Platform.OS === 'ios') {
        return isIPhoneX ? 44 : 20;
    }

    return StatusBar.currentHeight;
}

const statusBarHeight = getStatusBarHeight()

export { isIos, screenHeight, screenWidth, statusBarHeight }