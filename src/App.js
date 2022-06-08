import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
 import Login from "./components/Login";
 import Signin from "./components/Signin";

import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
	const promise = loadStripe(
		"pk_test_51HU6cMIVz8lPHGxtTgh5fYH2shdaFXbKoCnRexWPTHqPPYzFmmznGSPmav8IvB4DTZgankavtpzzh6b35Hnn4jXq00osBWTWXM"
	);
	const [{}, dispatch] = useStateValue();
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/login">
						 <Login /> 
					</Route>
					<Route path="/signin">
						 <Signin /> 
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
