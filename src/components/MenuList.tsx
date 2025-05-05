import type { FoodItemType } from "../types/FoodItem";
import MenuItem from "./MenuItem";

interface FoodItemProps{
  foodItems: FoodItemType[]
}

function MenuList({ foodItems }: FoodItemProps) {
	return (
		<>
			{foodItems.map((item) => (
				<MenuItem key={item.id} foodItem={item} />
			))}
		</>
	);
}

export default MenuList;
