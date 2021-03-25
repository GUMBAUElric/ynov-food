/**----------------------------------------------
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Module to get geolocation
 *---------------------------------------------* */

export default function Geolocation() {
  const getPermissionStatus = async () => {
    let permissionStatus = ''
    try {
      const { state } = await navigator.permissions.query({ name: 'geolocation' })

      permissionStatus = state
    } catch (error) {
      console.error(error)
    }
    return permissionStatus
  }
  const getGeolocation = () => {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        })
      })
    })
  }
  return {
    getPermissionStatus,
    getGeolocation,
  }
}
