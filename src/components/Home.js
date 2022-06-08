import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
			<img
					className="home__image"
					src="https://cdn.printnetwork.com/production/assets/5966561450122033bd4456f8/imageLocker/blog-description/blog/sales_banners.jpg"
					alt="bg"
				/>
			<div className="home__row">
					<Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil/Rulers"
						price={50}
						image="https://5.imimg.com/data5/CA/NR/MY-9787699/notebooks-500x500.png"
						rating={5}
					/>
					<Product
						id="4"
						title="OTG | OVEN| MICROWAVE"
						price={75000}
						image="https://5.imimg.com/data5/BL/OG/XI/SELLER-697280/commercial-electric-oven-500x500.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://cdn.shopify.com/s/files/1/0921/3560/products/Prime-Tower-Surround_main_1024x.jpg?v=1584716997"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Apple Iphone 12"
						price={500000}
						image="https://i1.wp.com/maplestore.in/wp-content/uploads/2020/10/iPhone_12_Lineup_Screen__WWEN.jpg?fit=2048%2C2048&ssl=1"
						rating={5}
					/>
					<Product
						id="4"
						title="Headphone M31112cwe"
						price={7000}
						image="https://www.sony.co.in/image/3d54346a77face83dda2d361d34c5c5f?fmt=pjpeg&wid=2028&hei=792&bgcolor=F1F5F9&bgc=F1F5F9"
						rating={3}
					/>
					<Product
						id="5"
						title="Portable Speaker"
						price={1250}
						image="https://images.news18.com/ibnlive/uploads/2021/09/speakers_under_5000_india-16312691273x2.jpg?impolicy=website&width=510&height=356"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="Theory of everything"
						price={50}
						image="https://upload.wikimedia.org/wikipedia/en/6/67/The_Theory_of_Everything_%282014%29.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="Jorden 1"
						price={75000}
						image="https://www.highsnobiety.com/static-assets/thumbor/STuFc_illoInGGOrYzGlrfwKmsQ=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/02/12163534/air-jordan-1-university-blue-release-info-01.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Sony OlED TV"
						price={125000}
						image="https://www.tradeinn.com/f/13819/138192974/sony-kd43x81j-43-4k-led-tv.jpg"
						rating={4}
					/>
				</div>
				
			</div>
		</div>
	);
}

export default Home; 