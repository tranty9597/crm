import React from 'react'
import { Image } from 'react-native'

import { Header, Tab } from '../../common'
import { SeenList, UnseenList } from './components'

import { Container } from '../../layouts';
import { Color } from '../../values';

import { strings } from '../../i18n'

function SeenRoute(navigation) {
    return () => <SeenList navigation={navigation} />
}

function UnseenRoute(navigation) {
    return () => <UnseenList navigation={navigation} />
}

const ROUTES = [
    { key: 'UnSeen', title: strings('message_unseen') },
    { key: 'Seen', title: strings('message_seen') },
]

class Message extends React.Component {
    static navigationOptions = {
        tabBarIcon: (focused) => {
            return <Image source={focused.focused ? require('../../assets/image/message/active.png') : require('../../assets/image/message/inactive.png')} />
        }
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let header = (
            <Header title={strings('message_title')} />
        )
        return (
            <Container header={header} style={{ backgroundColor: Color.whiteGray }}>
                <Tab
                    routes={ROUTES}
                    router={{
                        UnSeen: UnseenRoute(this.props.navigation),
                        Seen: SeenRoute(this.props.navigation)

                    }}
                />
            </Container>
        )
    }
}

export default Message;