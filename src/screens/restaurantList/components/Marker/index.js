import React from 'react'
import { View, Text } from 'react-native'

import { CardView } from '../../../../common'

import { Marker, Callout } from 'react-native-maps'
import { Color, Sizes, AppStyle } from '../../../../values';

const MarkerIcon = require('../../../../assets/image/location/big.png')

class RenderMarkder extends React.PureComponent {

    showCallout() {
        this.marker.showCallout()
    }

    render() {
        let { coor, onPress, idx } = this.props
        return (
            <React.Fragment>
                {
                    coor && (
                        <Marker
                            ref={r => this.marker = r}
                            onPress={() => onPress(idx)}
                            coordinate={coor}
                            image={MarkerIcon}
                        >
                            <Callout tooltip={true}>
                                <CardView>
                                    <View style={{ width: 250, height: 70, borderRadius: Sizes.BORDER_RADIUS, backgroundColor: Color.white, padding: Sizes.MD_GAP, ...AppStyle.justifyContentCenter }}>
                                        <Text style={{ ...AppStyle.mdText, color: Color.scarlet }}>King BBQ Vincom Center</Text>
                                        <Text style={{ ...AppStyle.smText, ...AppStyle.lightWeight }}>Gian hàng B3 - 10B, Tầng B3...</Text>
                                    </View>
                                </CardView>


                            </Callout>

                        </Marker>
                    )
                }
            </React.Fragment >

        )
    }
}
export default RenderMarkder