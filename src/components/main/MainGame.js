import { makeStyles } from "@material-ui/core";
import FoodContainer from "../Containers/FoodContainer";
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
				<FoodContainer></FoodContainer>
			</div>
		</div>
	);
}

export default MainGame;
