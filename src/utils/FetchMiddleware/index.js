/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the middleware for axios fetch.
 * @author ADAMO
 * @since  10/15/2018
 */
import { Alert } from 'react-native'
import store from '../../store'

/**
 * @description handle respond from api
 * @param {*} res 
 */
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
/**
 * @description hanlde api rejection
 * @param {*} err 
 */
export function handleRej(err) {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}
