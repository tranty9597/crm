/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Input class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image
} from "react-native";

import { Color, Sizes, AppStyle } from "../../values";

type InputProps = {
  label: string,
  style: Object,
  leftIcon: any,
  rightIcon: any,
  placeholder: string
}
/**
 * @description render icon btn on input class
 * @param {*} props
 */
function RenderBtn({ icon, onPress, isLeft }) {
  return (
    <React.Fragment>
      {icon && <TouchableOpacity
        style={[styles.iconContainer, isLeft ? { left: 15 } : { right: 15, alignItems: 'flex-end' }]}
        onPress={onPress}
      >
        <Image source={icon} />
      </TouchableOpacity>}
    </React.Fragment>
  )
}

class Input extends React.Component<InputProps> {
  constructor(props) {
    super(props);
    this.state = {
      secureText: true,
    };
  }
  onChangeText(str) {
    this.props.onChangeText(str);
  }
  showHidePassHandler() {
    this.setState({ secureText: !this.state.secureText });
  }

  render() {

    let { leftIcon, rightIcon, style, label } = this.props

    let secureText = this.state.secureText && this.props.secureTextEntry;
    let inputComp = secureText ? <TextInput
      maxLength={this.props.maxLength}
      placeholderTextColor={this.props.placeholderStyle}
      autoFocus={this.props.autoFocus}
      multiline={this.props.multiline}
      numberOfLines={this.props.numberOfLines}
      editable={this.props.editable}
      onChangeText={str => this.onChangeText(str)}
      autoCapitalize={this.props.keyboardType === "decimal-pad" ? "none" : this.props.autoCapitalize}
      keyboardType={this.props.keyboardType}
      secureTextEntry={true}
      placeholder={this.props.placeholder}
      value={this.props.value}
      underlineColorAndroid={Color.transparent}
      style={[styles.inputContainer]}
    /> : <TextInput
        maxLength={this.props.maxLength}
        onFocus={this.props.onFocus}
        ref={(inst) => this.input = inst}
        placeholderTextColor={this.props.placeholderStyle}
        autoFocus={this.props.autoFocus}
        multiline={this.props.multiline}
        numberOfLines={this.props.numberOfLines}
        editable={this.props.editable}
        onChangeText={str => this.onChangeText(str)}
        autoCapitalize={this.props.autoCapitalize}
        keyboardType={this.props.keyboardType}
        secureTextEntry={false}
        placeholder={this.props.placeholder}
        value={this.props.value}
        underlineColorAndroid={Color.transparent}
        onBlur={this.props.onBlur}
        onKeyPress={(e) => this.props.onKeyPress(e)}
        defaultValue={this.props.defaultValue}
        style={[styles.inputContainer]}
      />
    return (
      <View style={style}>
        {label && <Text style={[AppStyle.smText, AppStyle.mdWeight, { marginBottom: Sizes.SM_GAP }]}>{label}</Text>}
        <View
          style={[styles.container]}
        >
          <RenderBtn isLeft icon={leftIcon} onPress={() => { }} />
          {inputComp}
          {(this.props.secureTextEntry && this.props.canShowPass) && (
            <TouchableOpacity
              onPress={() => { this.showHidePassHandler() }
              }
              style={{ position: "absolute", right: 7 }}
            >
              <Text style={[TextStyles.mediumSize, { color: AppColor.blue }]}>
                {secureText ? I18n.t('txt_show') : I18n.t('txt_hide')}
              </Text>
            </TouchableOpacity>
          )}
          <RenderBtn icon={rightIcon} onPress={() => { }} />
        </View>
      </View>

    );
  }
}
Input.defaultProps = {
  autoCapitalize: "sentences",
  disableErrorText: false,
  errorText: "",
  onChangeText: () => { },
  maxLength: 50,
  multiline: false,
  numberOfLines: 1,
  styleTextInput: {},
  autoFocus: false,
  unitTitle: false,
  canShowPass: true,
  onBlur: () => { },
  onKeyPress: () => { },
  defaultValue: ''
};
const styles = StyleSheet.create({
  container: {
    ...AppStyle.flexCenter,
    position: 'relative',
    height: Sizes.BUTTON_HEIGHT,
    width: '100%',
    borderRadius: Sizes.BORDER_RADIUS,
    backgroundColor: Color.whiteGray
  },
  inputContainer: {
    width: '85%',
    backgroundColor: Color.transparent
  },
  errContainer: {
    paddingLeft: 18,
    paddingTop: 10,
  },
  iconContainer: {
    position: 'absolute',
    ...AppStyle.flexCenter,
    width: '10%',
    height: '100%'
  }
})
export default Input;
