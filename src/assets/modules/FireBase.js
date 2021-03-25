/**----------------------------------------------
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Module to use firabase
 *---------------------------------------------* */

/** Import */
import firebase from 'firebase/app'
import store from '../../store/index'
import 'firebase/database'

let db = null

export default function FireBase() {
  const startListener = listen => {
    switch (listen) {
      case 'favorites':
        db.ref('favorites').on('value', snapshot => {
          if (snapshot.exists()) {
            const val = snapshot.val()
            const favorites = Object.keys(val).map(item => {
              return {
                id: item,
                id_restaurant: val[item].id_restaurant,
              }
            })

            store.dispatch('updateFavorites', favorites)
          } else store.dispatch('updateFavorites', [])
        })
        break
      default:
        console.trace('Listener not found')
        break
    }
  }

  const insert = async params => {
    try {
      const { key } = await db
        .ref()
        .child('favorites')
        .push()

      await db
        .ref('favorites')
        .child(key)
        .update(params)
    } catch (error) {
      console.error(error)
    }
  }

  const remove = async id => {
    try {
      await db
        .ref('favorites')
        .child(id)
        .remove()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    insert,
    remove,
    startListener,
  }
}

const initApp = () => {
  db = firebase
    .initializeApp({
      databaseURL: 'https://ynov-food-default-rtdb.firebaseio.com/',
      projectId: 'ynov-food',
    })
    .database()

  FireBase().startListener('favorites')
}

initApp()
