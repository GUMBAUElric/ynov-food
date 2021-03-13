/** ==============================================
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Module to send request wit axios
 *=============================================* */

/** Import */
import axios from 'axios'

export default function Request() {
  /** @desc Use cors with herokuapp */
  const PREFIX_URL_CORS = 'https://cors-anywhere.herokuapp.com'

  /** @desc The endpoint of yelp api */
  const ENDPOINT_YELP_API = `${PREFIX_URL_CORS}/https://api.yelp.com/v3`

  /**
   * @function get
   * @param {string} path The path of request
   * @param {string} params  The params of get request
   * @desc Send a HTTP GET request with axios
   * */
  const get = async (path, params) => {
    let dataFetched = null

    // Add latitude and longitude of Lyon if it doesn't exist
    if (!('latitude' in params) && !('longitude' in params)) {
      params.latitude = '45.764042'
      params.longitude = '4.835659'
    }

    try {
      const { status, data } = await axios.get(`${ENDPOINT_YELP_API + path}`, {
        params,
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TOKEN_API}`,
        },
      })

      if (status === 200) dataFetched = data
    } catch (error) {
      console.trace(error)
    }

    return dataFetched
  }

  return {
    get,
  }
}
