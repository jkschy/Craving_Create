import { makeStyles } from "@material-ui/core";
import Food from "../foods/Food";
import StartChoice from "./Start/StartChoice";
import { useState } from "react";

import Bacon from "../../images/food/bacon/Bacon.png";
import Lettuce from "../../images/food/lettuce/Lettuce.png";
import Bread from "../../images/food/bread/Bread.png";

import { allIngredients } from "../../utilities/allIngredients";

const useStyles = makeStyles({
	foods: {
		display: "flex",
		columnGap: "15px",
		rowGap: "15px",
		width: "1fr",
		marginLeft: "10px",
		marginRight: "10px",
		columnCount: "3"
	},
	foodsBlur: {
		display: "flex",
		columnGap: "15px",
		rowGap: "15px",
		width: "1fr",
		marginLeft: "10px",
		marginRight: "10px",
		columnCount: "3",
		filter: "blur(8px)"
	}
});

function MainGame(props) {
	const classes = useStyles();
	const [gameStarted, setGameStarted] = useState(false);
	const [unlockedFoods, setUnlockedFoods] = useState([]);

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
			</div>
		</div>
	);
}

export default MainGame;
