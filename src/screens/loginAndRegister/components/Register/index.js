import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { connect } from 'react-redux'

import { Button, Input } from '../../../../common'

import { AppStyle, Color, Sizes } from '../../../../values'
import { strings } from '../../../../i18n'



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    bgColor={[Color.fb, Color.fb]}
                    style={[AppStyle.marginTop2x]}
                    leftIcon={require('../../../../assets/image/whiteBack/whiteBack.png')}
                    title={strings('facebook')}
                />
                <Button
                    style={[AppStyle.marginTop]}
                    leftIcon={require('../../../../assets/image/google/google.png')}
                    title={strings('gmail')}
                />
                <View style={[AppStyle.hr]} />
                <KeyboardAwareScrollView style={{marginBottom: Sizes.MD_GAP * 1.5}}>
                    <Input label={strings('fullName')} style={[AppStyle.marginTop]} />
                    <Input label={strings('phoneNumber')} style={[AppStyle.marginTop]} />
                    <Input label={strings('email')} style={[AppStyle.marginTop]} />
                    <Input label={strings('password')} style={[AppStyle.marginTop]} />
                    <Button
                        style={styles.loginBtn}
                        // disabled
                        title={strings('register')}
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                    />
                </KeyboardAwareScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.container,
        height: '100%',
        backgroundColor: Color.white
    },
    form: {

    },
    loginBtn: {
        width: '50%',
        marginLeft: '25%',
        ...AppStyle.marginTop3x
    }
})

export default Register;