

const common= {
  fullName: 'Họ và tên',
  phoneNumber: 'Số điện thoại'
}
const loginAndRegister = {
  loginAndRegiter_title: 'Khách hàng thân thiết',
  loginAndRegiter_login_login: 'Đăng nhập'
}

const vi = {
  ...common,
  ...loginAndRegister
};
export default vi;