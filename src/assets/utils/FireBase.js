/**----------------------------------------------
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Use firebase
 *---------------------------------------------* */

/** Import */
import firebase from 'firebase/app'
import 'firebase/database'

/**
 * @const db
 * @desc Init firebase app
 * */
const db = firebase
  .initializeApp({
    databaseURL: 'https://ynov-food-default-rtdb.firebaseio.com/',
    projectId: 'ynov-food',
  })
  .database()

export default db
