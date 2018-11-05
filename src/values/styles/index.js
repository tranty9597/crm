/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the APP styles values.
 * @author ADAMO
 * @since  10/15/2018
 */
import { StyleSheet } from 'react-native'
import { Sizes, Color } from '..';

const FONT_WEIGHT_DF = '600'

export default StyleSheet.create({
    matchParent: {
        width: '100%',
        height: '100%'
    },
    container: {
        width: '100%',
        paddingRight: 30,
        paddingLeft: 30,
    },
    containerFluid: {
        width: '100%'
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    justifyContentCenter: {
        display: 'flex',
        justifyContent: 'center'
    },
    alignItemsCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    textCenter: {
        textAlign: "center",
        textAlignVertical: 'center',
        display: 'flex',

    },
    hr: {
        borderBottomColor: Color.whiteGray,
        borderBottomWidth: 3,
        margin: Sizes.MD_GAP * 2,
    },
    //Text
    smText: {
        fontSize: 14,
        fontWeight: FONT_WEIGHT_DF
    },
    mdText: {
        fontSize: 16,
        fontWeight: FONT_WEIGHT_DF
    },
    lgText: {
        fontSize: 20,
        fontWeight: FONT_WEIGHT_DF
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    lightWeight: {
        fontWeight: '400'
    },
    mdWeight: {
        fontWeight: '600'
    },
    //gap
    marginTopSm:{
        marginTop: Sizes.SM_GAP,
    },
    marginTop: {
        marginTop: Sizes.MD_GAP,
    },
    marginTop2x: {
        marginTop: Sizes.MD_GAP * 2,
    },
    marginTop3x: {
        marginTop: Sizes.MD_GAP * 3,
    }
})