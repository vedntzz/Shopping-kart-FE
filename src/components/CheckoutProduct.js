import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import GooglePayButton from '@google-pay/button-react'

function CheckoutProduct({ id, image, title, rating, price }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		//remove the item from the basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutproduct">
			<img
				className="checkoutproduct__image"
				src={image}
				alt="cart_prods"
			/>
			<div className="checkoutproduct__info">
				<p className="checkoutproduct__title">{title}</p>
				<p className="checkoutproduct__price">
					<small> ₹ </small>
					<strong>{price}</strong>
				</p>
				<p className="checkoutproduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</p>
				<button onClick={removeFromBasket}>Remove Item</button>
				<GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
			</div>
		</div>
	);
}

export default CheckoutProduct;