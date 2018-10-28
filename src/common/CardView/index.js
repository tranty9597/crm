import React from 'react'
import Card from 'react-native-cardview'

import { Sizes } from '../../values'

class CardView extends React.PureComponent {
    render() {
        return (
            <Card
                cardMaxElevation={Sizes.ELEVATION * 2}
                cardElevation={Sizes.ELEVATION}
                cornerRadius={Sizes.BORDER_RADIUS}
            >
                {this.props.children}
            </Card>
        )
    }
}

export default CardView