import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color, AppStyle } from '../../../../values';
import { IconCircle } from '../../../../common';

const MOMO_ICON = require('../../../../assets/image/mono/mail.png')
const HEIGHT = 120
class MessageItem extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <IconCircle bgColor={Color.shamrockGreen} icon={MOMO_ICON} size={60} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[AppStyle.mdText, AppStyle.mdWeight]}>Điểm của bạn sắp hết hạn</Text>
                    <Text style={[AppStyle.mdText, AppStyle.marginTopSm, AppStyle.lightWeight, { color: Color.greyish, }]}>Điểm của bạn sắp hết hạn</Text>
                    <Text style={[AppStyle.mdText, AppStyle.marginTop, AppStyle.lightWeight]}>Điểm của bạn sắp hết hạn</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.containerFluid,
        ...AppStyle.hr,
        ...AppStyle.row,
        height: HEIGHT,
        margin: 0,
    },
    iconContainer: {
        ...AppStyle.flexCenter,
        height: HEIGHT,
        width: HEIGHT,
    },
    infoContainer: {
        ...AppStyle.matchParent,
        ...AppStyle.justifyContentCenter
    }

})

export default MessageItem