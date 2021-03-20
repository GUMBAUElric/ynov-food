/**----------------------------------------------
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Module to use firabase
 *---------------------------------------------* */

/** Import */
import firebase from 'firebase/app'
import 'firebase/database'

export default function Firebase() {
  let db = null

  const initializeApp = () => {
    db = firebase.initializeApp({
      databaseURL: 'https://ynov-food-default-rtdb.firebaseio.com/',
      projectId: 'ynov-food',
    })
  }

  return {
    initializeApp,
    db,
  }
}
