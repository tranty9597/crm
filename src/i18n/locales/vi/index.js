

/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Vn locales.
 * @author ADAMO
 * @since  10/15/2018
 */
const common= {
  fullName: 'Họ và tên',
  phoneNumber: 'Số điện thoại',
  login: 'Đăng nhập',
  register: 'Đăng kí',
  gmail: 'Gmail',
  facebook: 'Facebook',
  email: 'Email',
  password: 'Mật Khẩu',
  register: 'Đăng kí',
  continue: 'Tiếp Theo'
}
const loginAndRegister = {
  loginAndRegiter_title: 'Khách hàng thân thiết',
  
}

const passwordSetting = {
  passwordSetting_title: 'Cài đặt mật khẩu',
  passwordSetting_reenter_pass: 'Nhập lại mật khẩu',
  passwordSetting_password_hint: 'Tối thiểu 6 kí tự',
  passwordSetting_reenter_password_hint: 'Nhập lại mật khẩu ở trên'
}

const message = {
  message_title: 'Tin nhắn của bạn',
  message_seen: 'Đã xem',
  message_unseen: 'Tin Mới'
}

const vi = {
  ...common,
  ...loginAndRegister,
  ...passwordSetting,
  ...message,

};
export default vi;