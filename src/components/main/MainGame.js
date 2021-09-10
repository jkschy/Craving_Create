import { makeStyles } from "@material-ui/core";
import { useState } from "react";

import Food from "../foods/Food";
import StartChoice from "./Start/StartChoice";
import AddFood from "../foods/AddFood";
import { allIngredients } from "../../utilities/allIngredients";

const useStyles = makeStyles({
	foods: {
		display: "flex",
		columnGap: "15px",
		rowGap: "15px",
		width: "1fr",
		marginLeft: "10px",
		marginRight: "10px",
		columnCount: "3",
		height: "50vh"
	},
	foodsBlur: {
		display: "flex",
		columnGap: "15px",
		rowGap: "15px",
		width: "1fr",
		marginLeft: "10px",
		marginRight: "10px",
		columnCount: "3",
		height: "50vh",
		filter: "blur(8px)"
	}
});

function MainGame(props) {
	const classes = useStyles();
	const [gameStarted, setGameStarted] = useState(false);
	const [unlockedFoods, setUnlockedFoods] = useState([]);

	const addIngredient = () => {
		switch (unlockedFoods.length) {
			case 1: {
				setUnlockedFoods([...unlockedFoods, allIngredients.lettuce]);
				break;
			}
			case 2: {
				setUnlockedFoods([...unlockedFoods, allIngredients.bread]);
				break;
			}
			default: {
				console.log("No More Ingredients left");
				break;
			}
		}
	};

	return (
		<div>
			{!gameStarted && (
				<div>
					<StartChoice setGameStarted={setGameStarted} setUnlockedFoods={setUnlockedFoods}></StartChoice>
				</div>
			)}
			<div className={gameStarted ? classes.foods : classes.foodsBlur}>
				{unlockedFoods.map((ingredient) => (
					<Food name={ingredient.name} picture={ingredient.picture}></Food>
				))}
				{unlockedFoods.length <= 2 && <AddFood addIngredient={addIngredient}></AddFood>}
			</div>
		</div>
	);
}

export default MainGame;
