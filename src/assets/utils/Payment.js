/**------------------------------------------------------------------------
 * ?                                ABOUT
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Closure to use request payment api
 *------------------------------------------------------------------------* */

export default function Payment() {
  /**
   * @function buildSupportedPaymentMethodData
   * @desc This function return the supported payment method
   * @returns {object}
   * */
  const buildSupportedPaymentMethodData = () => {
    return [
      {
        supportedMethods: 'basic-card',
        data: {
          supportedNetworks: ['visa', 'mastercard'],
          supportedTypes: ['debit', 'credit'],
        },
      },
    ]
  }
  /**
   * @function doPayment
   * @desc This function do the payment
   * @param {object} bookingDetails The booking details
   * @returns {Promise<void>}
   * */
  const doPayment = bookingDetails => {
    return new Promise((resolve, reject) => {
      const request = new PaymentRequest(buildSupportedPaymentMethodData(), bookingDetails)

      request.canMakePayment().then(result => {
        if (result) {
          request
            .show()
            .then(paymentResponse => {
              paymentResponse.complete('success').then(() => {
                resolve()
              })
            })
            .catch(err => reject(new Error(err)))
        } else reject(new Error("Can't make payment"))
      })
    })
  }
  return {
    doPayment,
  }
}
