import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import { Header, MenuItem, Button } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';
import { Color, AppStyle, Sizes } from '../../values';


class DashBoard extends React.Component {
    static navigationOptions = {
        tabBarIcon: (focused) => {
            console.log('foc', focused);
            return <Image source={focused.focused ? require('../../assets/image/home/active.png') : require('../../assets/image/home/normal.png')} />
        }
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<Header />} style={{ backgroundColor: Color.whiteGray }}>
                <View style={styles.container}>
                    <View style={styles.coupon}>
                        <MenuItem>
                            <Text numberOfLines={1} style={{ color: Color.scarlet, ...AppStyle.smText }}>Giảm giá 10% Sườn nướng Sốt Thái nhân dịp ngày </Text>
                            <Text numberOfLines={2} style={{ ...AppStyle.smText, ...AppStyle.lightWeight }}>Giảm giá 10% Sườn nướng Sốt Thái nhân dịp ngày, iảm giá 10% Sườn nướng Sốt Thái nhân dịp ngày  </Text>
                            <View style={[AppStyle.row, AppStyle.containerFluid, { alignItems: 'flex-end' }]}>
                                <Button style={{borderColor: Color.scarlet, borderWidth: 1,}} type={1} style={{ width: '38%' }} title='Laays coupon'/>
                                <Button style={{ width: '38%' }} />
                            </View>
                        </MenuItem>
                    </View>

                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...AppStyle.matchParent,
        padding: Sizes.MD_GAP,
    },
    coupon: {
        height: '50%'
    }
})
export default DashBoard;