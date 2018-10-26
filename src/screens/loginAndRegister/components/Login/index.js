import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { connect } from 'react-redux'

import { Button, Input } from '../../../../common'

import { AppStyle, Color, Sizes } from '../../../../values'
import { strings } from '../../../../i18n'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <View >
                    <Input label={strings('fullName')} style={{ marginTop: 15 }} />
                    <Input label={strings('phoneNumber')} style={{ marginTop: 15, }} />
                    <Input label={strings('phoneNumber')} style={{ marginTop: 15, }} />
                    <Input label={strings('phoneNumber')} style={{ marginTop: 15, }} />
                    <Input label={strings('phoneNumber')} style={{ marginTop: 15, }} />
                    <Input label={strings('phoneNumber')} style={{ marginTop: 15, }} />
                    <Button
                        style={styles.loginBtn}
                        disabled
                        title={strings('loginAndRegiter_login_login')}
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                    />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...AppStyle.container,
        height: '100%',
        backgroundColor: Color.white
    },
    loginBtn:{
        width: '50%', 
        marginLeft: '25%',
        marginTop: Sizes.MD_GAP
    }
})

export default Login;