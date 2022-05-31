import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
			<div className="home__row">
					<Product
						id="6"
						title=" sweatshirt  | Starting just at 1499! | Men/Women Wear"
						price={1499}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
				</div>
				{/* <img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_1x_English_Illustration._CB422946471_.jpg"
					alt="bg"
				/> */}

				<div className="home__row">
					<Product
						id="1"
						title=" Theory of everything | Best Seller"
						price={200}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={4}
					/>
					<Product
						id="2"
						title="milk carten | Dairy Products | toned | cow milk"
						price={350}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil/Rulers"
						price={50}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | OVEN| MICROWAVE"
						price={75000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="6"
						title="Clothing | Starting just at 1499! | Men/Women Wear"
						price={1499}
						image="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10004377a.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home; 