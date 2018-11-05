/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Firebase intancse
 * @author ADAMO
 * @since  10/15/2018
 */
import * as firebase from 'firebase'
import { firebaseConfig } from '../../configs'
 
let instance = null
 /**
  * definde firebase services
  */
class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(firebaseConfig);
      instance = this;
    }
    return instance
  }
}
 
const firebaseService = new FirebaseService().app
export default firebaseService;