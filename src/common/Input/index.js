/**
 * Copyright by (c) 2TS 
 *
 *
 * @file   This files defines the Cart - actions redux.
 * @author 2TS
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

import { InputHelper } from "../../utils";

import {
  ViewStyles,
  TextStyles,
  AppColor,
  InputStyles,

} from "../../styles";
import I18n from "../../i18n";

class DeptInput extends React.Component {
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
    let secureText = this.state.secureText && this.props.secureTextEntry;
    let inputComp = secureText ? <TextInput
      maxLength={
        this.props.keyboardType === "phone-pad"
          ? 20
          : this.props.maxLength
      }
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
      underlineColorAndroid="transparent"
      style={[InputStyles.inputStyle, TextStyles.mediumSize, this.props.styleTextInput,]}
    /> : <TextInput
        maxLength={
          this.props.keyboardType === "phone-pad"
            ? 12
            : this.props.maxLength
        }
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
        underlineColorAndroid="transparent"
        onBlur={this.props.onBlur}
        onKeyPress={(e) => this.props.onKeyPress(e)}
        defaultValue={this.props.defaultValue}
        style={[InputStyles.inputStyle,
        TextStyles.mediumSize,
        this.props.styleTextInput,
        ]}
      />
    return (
      <View style={{}}>
        <View style={[this.props.parentStyle,]}>
          <View
            style={[
              InputStyles.inputContainer,
              ViewStyles.flexCenterVertical,
              styles.input,
              this.props.containerStyle,
            ]}
          >
            {this.props.searchIcon && (
              <TouchableOpacity
                style={styles.leftIcon}
              >
                <Image source={require("../../assets/images/blue/search/search.png")}>
                </Image>
              </TouchableOpacity>
            )}
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
            {rightIcon && (
              <TouchableOpacity
                onPress={() => { this.directEvent() }
                }
                style={styles.rightIcon}
              >
                <Image source={require("../../assets/images/blue/drill/plus.png")} />

              </TouchableOpacity>
            )}
      </View>
    );
  }
}
DeptInput.defaultProps = {
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
  input: {
    paddingRight: 30,
  },
  errContainer: {
    paddingLeft: 18,
    paddingTop: 10,
  },
  rightIcon: {
    display: 'flex',
    position: "absolute",
    right: 15,
    width: 55,
    alignItems: 'flex-end',
  },
  leftIcon: {
    position: "absolute",
    left: 15
  }
})
export default DeptInput;
