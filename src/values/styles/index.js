import { StyleSheet } from 'react-native'

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
    }
})