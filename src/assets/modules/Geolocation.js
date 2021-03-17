/** ==============================================
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Module to get geolocation
 *=============================================* */

export default function Geolocation() {
  const getPermissionStatus = async () => {
    let permissionStatus = ''
    try {
      permissionStatus = await navigator.permissions.query({ name: 'geolocation' })
    } catch (error) {
      console.error(error)
    }
    return permissionStatus
  }
  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      return { latitude: position.coords.latitude, longitude: position.coords.longitude }
    })
  }
  return {
    getPermissionStatus,
    getGeolocation,
  }
}
