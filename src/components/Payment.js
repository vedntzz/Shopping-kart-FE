import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "../axios";
import GooglePayButton from '@google-pay/button-react'

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	const history = useHistory();

	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState("");
	const [succeeded, setSecceeded] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	// useEffect(() => {
	// 	const getClientSecret = async () => {
	// 		const response = await axios({
	// 			method: "post",
	// 			url: `/payments/create?total=${getBasketTotal(basket) * 60}`,
	// 		});
	// 		setClientSecret(response.data.clientSecret);
	// 	};
	// 	getClientSecret();
	// }, [basket]);

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	setProcessing(true);

	// 	const payload = await stripe
	// 		.confirmCardPayment(clientSecret, {
	// 			payment_method: {
	// 				card: elements.getElement(CardElement),
	// 			},
	// 		})
	// 		.then(({ paymentIntent }) => {
	// 			//payment intent = payment confirmation
	// 			setSecceeded(true);
	// 			setError(null);
	// 			setProcessing(false);

	// 			history.replace("/orders");
	// 		});
	// };

	const handleSubmit = () => {
		console.log("submitted")
	}

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					CheckOut (<Link to="/checkout">{basket.length} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						Dilievery Address
						{/*Address*/}
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						{/* <p>G-81 , Apex Royal Castle</p> */}
						{/* <p>Indirapuram , Ghaziabad ,UP, India</p> */}
						{/*Address*/}
						<input className="addressInput"/>
					</div>
				</div>
				<div className="payment__section">
					{/* Review section */}
					<div className="payment__title">Review Section</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* <div className="payment__section">
					
					<div className="payment__title">Payment Details</div>
					<div className="payment__details">
						
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<p>
											Price to be Paid :
											<strong>{`${value}`}</strong>
										</p>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={" ₹ "}
								/>
							</div>
							<button
								disabled={processing || disabled || succeeded}
							>
								<span>
									{processing ? <p>Processing</p> : "Buy Now"}
								</span>
							</button>
						</form>
					</div>
					
					{error && <div>{error}</div>}
				</div> */}
				<div className="paymentBtns">
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
<button className="CODBtn">COD</button>

				</div>

			</div>
		</div>
	);
}

export default Payment;