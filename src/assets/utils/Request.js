/** ==============================================
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Closure to send request wit axios
 *=============================================* */

/** Import */
import axios from 'axios'

export default function Request() {
  /**
   * @const PREFIX_URL_CORS
   * @desc Use cors with herokuapp
   * */
  const PREFIX_URL_CORS = process.env.VUE_APP_URL_CORS

  /**
   * @const ENDPOINT_YELP_API
   * @desc The endpoint of yelp api
   * */
  const ENDPOINT_YELP_API = `${PREFIX_URL_CORS}/https://api.yelp.com/v3`

  /**
   * @function get
   * @param {string} path The path of request
   * @param {string} params  The params of get request
   * @desc Send a HTTP GET request with axios
   * */
  const getYelp = async (path, params) => {
    let dataFetched = null

    try {
      const { status, data } = await axios.get(`${ENDPOINT_YELP_API + path}`, {
        params,
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_TOKEN_API}`,
        },
      })

      if (status === 200) dataFetched = data
    } catch (error) {
      console.error(error)
    }

    return dataFetched
  }

  return {
    getYelp,
  }
}
