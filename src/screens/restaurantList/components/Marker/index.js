import React from 'react'
import { View, } from 'react-native'

import { Marker, Callout } from 'react-native-maps'
import { Color } from '../../../../values';

const MarkerIcon = require('../../../../assets/image/location/big.png')

class RenderMarkder extends React.PureComponent {

    showCallout() {
        this.marker.showCallout()
    }

    render() {
        let { coor, onPress, idx} = this.props
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
                            <Callout>
                                <View style={{ width: 100, height: 100, color: Color.white }}>

                                </View>
                            </Callout>

                        </Marker>
                    )
                }
            </React.Fragment >

        )
    }
}
export default RenderMarkder