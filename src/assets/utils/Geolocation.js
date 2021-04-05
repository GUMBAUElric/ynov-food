/**----------------------------------------------
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Closure to get geolocation
 *---------------------------------------------* */

export default function Geolocation() {
  /**
   * @function findMe
   * @desc This function return the latitude and longitude
   * @returns {Promise<object>}
   * */
  const findMe = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          })
        },
        () => {
          reject(new Error('Unable to retrieve location'))
        }
      )
    })
  }
  return {
    findMe,
  }
}
