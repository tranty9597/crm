import { post } from '../../instances';

export default userServices = {
    changePassword
}

function changePassword(body){
    post('user/change', body)
}