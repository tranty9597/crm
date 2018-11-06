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
import AutoCompletInput from 'react-native-autocomplete-input'

import { Color, Sizes, AppStyle } from "../../values";
import CardView from "../CardView";

type InputProps = {
  label: string,
  style: Object,
  leftIcon: any,
  rightIcon: any,
  placeholder: string,
  onSelect: func,
  onBlur: func,
  onFocus: func,
  placeholder: string,
  placeholderTextColor: any
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


function RenderOption({ data, value, onSelect, show }) {
  return (
    <React.Fragment>
      {show && <CardView>
        <View style={styles.optionContainer}>
          {data.slice(0, 5).filter(d => d.name.toLowerCase().includes(value.toLowerCase())).map((d, index) => {
            return (
              <TouchableOpacity
                style={styles.option}
                onPress={() => onSelect(d, index)}
                key={index}
              >
                <Text style={{ ...AppStyle.smText, ...AppStyle.lightWeight }}>{d.name}</Text>
              </TouchableOpacity>)
          })}
        </View>
      </CardView>}
    </React.Fragment>

  )

}

class Input extends React.PureComponent<InputProps> {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      secureText: true,
      showOption: false,
    };
  }
  /**
   * 
   * @param {*} str 
   */
  onChangeText(str) {
    this.setState({ value: str })
    this.props.onChangeText(str);
  }
  /**
   * 
   */
  showHidePassHandler() {
    this.setState({ secureText: !this.state.secureText });
  }
  /**
   * 
   */
  onFocus = () => {
    this.setState({ showOption: true })
    let { onFocus } = this.props;
    if (onFocus) onFocus()
  }
  /**
   * 
   */
  onBlur = () => {
    this.setState({ showOption: false })
    let { onBlur } = this.props;
    if (onBlur) onBlur()
  }
  /**
   * 
   */
  onSelect = (item, index) => {
    this.ip.blur()
    this.props.onSelect(item, index)
  }
  render() {

    let { leftIcon, rightIcon, style, label, autoComlete, secureTextEntry, data, bgColor } = this.props
    let { showOption, value } = this.state
    let secureText = this.state.secureText && secureTextEntry;
    let inputComp = <TextInput
      onFocus={this.onFocus}
      onBlur={this.onBlur}
      ref={r => this.ip = r}
      maxLength={this.props.maxLength}
      placeholderTextColor={this.props.placeholderTextColor}
      autoFocus={this.props.autoFocus}
      multiline={this.props.multiline}
      numberOfLines={this.props.numberOfLines}
      editable={this.props.editable}
      onChangeText={str => this.onChangeText(str)}
      autoCapitalize={this.props.keyboardType === "decimal-pad" ? "none" : this.props.autoCapitalize}
      keyboardType={this.props.keyboardType}
      secureTextEntry={secureTextEntry}
      placeholder={this.props.placeholder}
      value={value}
      underlineColorAndroid={Color.transparent}
      style={[styles.inputContainer]}
    />
    return (
      <View style={style}>
        {label && <Text style={[AppStyle.smText, AppStyle.mdWeight, { marginBottom: Sizes.SM_GAP }]}>{label}</Text>}
        <View
          style={[styles.container, { backgroundColor: bgColor || Color.whiteGray }]}
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
        {autoComlete && <RenderOption
          show={showOption}
          data={data}
          value={value}
          onSelect={this.onSelect}
        />
        }
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
    borderRadius: Sizes.BORDER_RADIUS
  },
  inputContainer: {
    width: '70%',
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
  },
  optionContainer: {
    ...AppStyle.containerFluid,
    ...AppStyle.marginTopSm,
    backgroundColor: Color.white
  },
  option: {
    height: Sizes.BUTTON_HEIGHT,
    ...AppStyle.hr,
    margin: 0,
    padding: Sizes.SM_GAP,
    paddingLeft: Sizes.MD_GAP,
    ...AppStyle.justifyContentCenter
  }
})
export default Input;
