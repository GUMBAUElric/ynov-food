/**------------------------------------------------------------------------
 * ?                                ABOUT
 * ?                    ABOUT
 * @author      : ElricGUMBAU
 * @email       : elric.gumbau@ynov.com
 * @description : Module to use request payment api
 *------------------------------------------------------------------------* */

export default function Payment() {
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

  const buildShoppingCartDetails = () => {
    // Hardcoded for demo purposes:
    return {
      id: 'order-123',
      displayItems: [
        {
          label: 'Example item',
          amount: { currency: 'EUR', value: '1.00' },
        },
      ],
      total: {
        label: 'Total',
        amount: { currency: 'EUR', value: '1.00' },
      },
    }
  }

  const processPayment = async () => {
    try {
      const request = new PaymentRequest(
        buildSupportedPaymentMethodData(),
        buildShoppingCartDetails()
      )
      const response = await request.show()
      return response
    } catch (error) {
      return error
    }
  }

  return {
    processPayment,
  }
}
