import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import StartSurvey from "./StartSurvey";
import * as foodUtils from "../../../utilities/allIngredients";

const useStyles = makeStyles({
	popup: {
		position: "fixed",
		backgroundColor: "white",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "50%",
		height: "50%",
		zIndex: "1",
		opacity: "100%"
	},

	background: {
		position: "fixed",
		width: "100%",
		top: "0%",
		bottom: "0%",
		backgroundColor: "gray",
		opacity: "40%"
	},

	buttons: {
		position: "fixed",
		bottom: "0%"
	}
});
function StartChoice(props) {
	const classes = useStyles();
	const [startingFood, setStartingFood] = useState("");
	const [startingName, setStartingName] = useState("");

	const [foodError, setFoodError] = useState(false);
	const [nameError, setNameError] = useState(false);

	const checkReady = () => {
		if (startingFood && startingName) {
			props.setGameStarted(true);
			props.setUnlockedFoods([foodUtils.allIngredients.bacon]);
		} else {
			if (!startingFood) {
				setFoodError(true);
			}
			if (!startingName) {
				setNameError(true);
			}
		}
	};

	const reset = () => {
		setStartingFood("");
		setStartingName("");
		setFoodError(false);
		setNameError(false);
	};

	return (
		<React.Fragment>
			<div className={classes.background}> </div>
			<Card className={classes.popup} variant="outlined">
				{/* What the Card Says */}
				<CardContent>
					<StartSurvey
						setStartingFood={setStartingFood}
						startingFood={startingFood}
						setStartingName={setStartingName}
						startingName={startingName}
						foodError={foodError}
						setFoodError={setFoodError}
						nameError={nameError}
						setNameError={setNameError}
					></StartSurvey>
				</CardContent>

				{/* Card Buttons */}
				<CardActions className={classes.buttons}>
					<Button size="medium" onClick={checkReady}>
						Submit
					</Button>
					<Button size="medium" onClick={reset}>
						Reset
					</Button>
				</CardActions>
			</Card>
		</React.Fragment>
	);
}

export default StartChoice;
