import { useState } from "react";
import type { FoodItemType } from "../types/FoodItem";

interface MenuItemProps {
	foodItem: FoodItemType;
}

function MenuItem({ foodItem }: MenuItemProps) {
	const [isFavorite, setIsFavorite] = useState(foodItem.isFavorite);
	//create a state isFavorite that has the inital value of isFavorite that comes from the props

	return (
		<section className="itemContainer">
			<figure className="imgContainer">
				<img src={foodItem.foodImage} alt={foodItem.itemName} />
				<figcaption>
					<h2>{foodItem.itemName}</h2>
					<p>{foodItem.description}</p>
				</figcaption>
			</figure>
			<aside>{foodItem.price} EUR</aside>
			<button onClick={() => setIsFavorite(!isFavorite)} type="button">
				{isFavorite ? "❤️" : "🖤"}
			</button>
		</section>
	);
}

export default MenuItem;
