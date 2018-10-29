import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Input, Button } from '../../../../common';
import { AppStyle, Color, Sizes } from '../../../../values';

import { strings } from '../../../../i18n'

class Form extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder={strings('passwordSetting_password_hint')}
                    label={strings('password')}
                    style={AppStyle.marginTop}
                />
                <Input
                    placeholder={strings('passwordSetting_reenter_password_hint')}
                    label={strings('passwordSetting_reenter_pass')}
                    style={AppStyle.marginTop}
                />
                <Button
                    onPress={this._onContinue}
                    title={strings('continue')}
                    style={AppStyle.marginTop2x}
                />
            </View>
        )
    }
    _onContinue = () =>{
        this.props.navigation.navigate('Dashboard');
    }
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.container,
        ...AppStyle.marginTop3x,
        backgroundColor: Color.white,
        borderRadius: Sizes.BORDER_RADIUS,
        paddingTop: Sizes.MD_GAP,
        paddingBottom: Sizes.MD_GAP * 2,
    },


})

export default Form