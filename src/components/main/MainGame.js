import { makeStyles } from "@material-ui/core";
import Food from "../foods/Food";

import Bacon from "../../images/food/bacon/Bacon.png";
import Lettuce from "../../images/food/lettuce/Lettuce.png";
import Bread from "../../images/food/bread/Bread.png";

const useStyles = makeStyles({
	foods: {
		display: "flex",
		columnGap: "15px",
		rowGap: "15px",
		width: "1fr",
		marginLeft: "10px",
		marginRight: "10px"
	}
});

function MainGame(props) {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.foods}>
				<Food name="Bacon" picture={Bacon}></Food>
				<Food name="Lettuce" picture={Lettuce}></Food>
				<Food name="Bread" picture={Bread}></Food>
			</div>
		</div>
	);
}

export default MainGame;
