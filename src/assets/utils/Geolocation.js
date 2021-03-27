/**----------------------------------------------
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Module to get geolocation
 *---------------------------------------------* */

export default function Geolocation() {
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
