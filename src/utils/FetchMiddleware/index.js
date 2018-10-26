import { Alert } from 'react-native'
import store from '../../store'

export function handleRespond(res) {
    return new Promise((resolve, reject) => {
        switch (res.status) {
            case 401:
                reject()
                store.dispatch({ type: "AUTHEN/LOGGOUT" })
                break;
            case 200:
                resolve(res)
                break;

                break;
            default:ß
                res.json().then(json => {
                    Alert.alert(
                        AppAlert.fetch_Err.title,
                        json.Message || json.message,
                        [
                            {
                                text: "OK",
                                style: "cancel",
                                onPress: () => { reject() }
                            }
                        ],
                        { cancelable: false })
                }).catch(err => {
                    Alert.alert(
                        AppAlert.fetch_Err.title,
                        AppAlert.fetch_Err.title,
                        [
                            {
                                text: "OK",
                                style: "cancel",
                                onPress: () => { reject() }
                            }
                        ],
                        { cancelable: false })
                })
        }
    })
}
export function handleRej(err) {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}
