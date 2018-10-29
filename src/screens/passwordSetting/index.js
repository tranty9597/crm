import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { Header, AppLinearGradient } from '../../common'

import { Form } from './components'
import { Container } from '../../layouts';
import { Color, AppStyle } from '../../values';
import { strings } from '../../i18n'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HEADER_LEFT_ICON = require('../../assets/image/whiteBack/whiteBack.png')
const LOCK_ICON = require('../../assets/image/illustration/lock.png')
class PasswordSetting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    _renderHeader = () => {
        return (
            <Header
                leftIconOnPress={() => this.props.navigation.pop()}
                leftIcon={HEADER_LEFT_ICON}
                title={strings('passwordSetting_title')}
                colors={[Color.transparent, Color.transparent]}
            />
        )
    }
    render() {
        return (
            <AppLinearGradient style={AppStyle.matchParent}>
                <Container header={this._renderHeader()}>
                    <KeyboardAwareScrollView style={AppStyle.matchParent}>
                        <View style={styles.container}>
                            <Image
                                source={LOCK_ICON}
                            />
                            <Form navigation={this.props.navigation}/>
                        </View>

                    </KeyboardAwareScrollView>
                </Container>
            </AppLinearGradient>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.container,
        ...AppStyle.flexCenter,
        ...AppStyle.marginTop3x
    }
})

export default PasswordSetting;