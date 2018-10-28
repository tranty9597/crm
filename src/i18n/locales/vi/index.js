

const common= {
  fullName: 'Họ và tên',
  phoneNumber: 'Số điện thoại',
  login: 'Đăng nhập',
  register: 'Đăng kí',
  gmail: 'Gmail',
  facebook: 'Facebook',
  email: 'Email',
  password: 'Mật Khẩu',
  register: 'Đăng kí'
}
const loginAndRegister = {
  loginAndRegiter_title: 'Khách hàng thân thiết',
  
}

const message = {
  message_title: 'Tin nhắn của bạn',
  message_seen: 'Đã xem',
  message_unseen: 'Tin Mới'
}

const vi = {
  ...common,
  ...loginAndRegister,
  ...message
};
export default vi;