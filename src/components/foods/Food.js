import CookProgress from "../main/ProgressBar/CookProgress";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	name: {
		fontFamily: "Sandwich Shop",
		fontSize: "20px",
		width: "1fr",
		textAlign: "center"
	},
	button: {
		marginTop: "5px",
		width: "100%"
	},
	food: {
		width: "100%"
	},
	image: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		height: "200px"
	}
});

export default function Food(props) {
	const classes = useStyles();

	const [getAmount, setAmount] = useState(0);
	const [getProgress, setProgress] = useState(0);
	const [buttonName, setButtonName] = useState(`Cook ${props.name}`);

	const cook = () => {
		if (getProgress < 100) {
			setProgress(getProgress + 25);
			if (getProgress === 75) {
				setButtonName(`Collect ${props.name}`);
			}
		} else {
			setProgress(0);
			setAmount(getAmount + 1);
			setButtonName(`Cook ${props.name}`);
		}
	};

	return (
		<div className={classes.food}>
			<h1 className={classes.name}>
				Total {props.name}: {getAmount}
			</h1>
			<img src={props.picture} alt={`A Picture of ${props.name}`} className={classes.image}></img>
			<div>
				<CookProgress progress={getProgress}></CookProgress>
				<Button className={classes.button} onClick={cook} variant="contained" color="secondary" disableRipple>
					{buttonName}
				</Button>
			</div>
		</div>
	);
}
