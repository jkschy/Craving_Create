import CookProgress from "../ProgressBar/CookProgress";
import { useState, useEffect } from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import StoredProgress from "../ProgressBar/StoreProgress";

const useStyles = makeStyles({
	name: {
		fontFamily: "Sandwich Shop",
		fontSize: "2.5vh",
		width: "1fr",
		textAlign: "center",
		marginBottom: "-1vh"
	},
	button: {
		marginTop: ".3vh",
		width: "100%",
		height: "4vh",
		fontSize: "1.5vh"
	},
	food: {
		width: "100%",
		height: "50vh"
	},
	price: {
		marginTop: "1.5vh",
		marginBottom: ".5vh",
		width: "100%",
		height: "4vh",
		fontSize: "1.5vh"
	},
	image: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: "-.5vh",
		marginTop: "-.5vh",
		height: "20vh"
	},
	storeButton: {
		marginTop: "1.5vh",
		marginBottom: ".5vh",
		width: "100%",
		height: "4vh",
		fontSize: "1.5vh"
	}
});

export default function Food(props) {
	const classes = useStyles();

	const [getAmount, setAmount] = useState(0);
	const [getProgress, setProgress] = useState(0);
	const [storeProgress, setStoreProgress] = useState(0);
	const [stored, setStored] = useState(20);
	const [getPrice, setPrice] = useState(10);

	const [buttonName, setButtonName] = useState(`Cook ${props.name}`);
	const [buttonDis, setButtonDis] = useState(false);
	const [buttonTip, setButtonTip] = useState("");
	const [storeButtonDis, setStoreButtonDis] = useState(false);
	const [storeButtonTip, setStoreButtonTip] = useState("");
	const [getMoney, setMoney] = useState(0);
	const maxPrice = 17;

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
			setStored(stored - 1);
			if (stored === 1) {
				setButtonDis(true);
				setButtonTip(`Out of stored ${props.name}`);
			}
		}
	};
	function isFoodEmpty() {
		return getAmount === 0;
	}
	const store = () => {
		setStoreButtonDis(true);
		setStoreButtonTip("Already Stocking");
		const timer = setInterval(() => {
			setStoreProgress((oldProgress) => {
				if (oldProgress === 100) {
					clearInterval(timer);
					setStored(stored + 20);

					setButtonDis(false);
					setStoreButtonDis(false);

					setStoreButtonTip("");
					setButtonTip("");

					return 0;
				}
				return oldProgress + 0.5;
			});
		}, 200);
	};

	function generateRandomNumber(max, min) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const sell = () => {
		setAmount(getAmount - 1);
		setMoney(getMoney + getPrice);
	};
	useEffect(() => {
		setTimeout(() => {
			setPrice(generateRandomNumber(maxPrice, 0));
		}, 5000);
	});
	return (
		<div className={classes.food}>
			<h1 className={classes.name}>Dolla Dolla bill yall ${getMoney}</h1>
			<h1 className={classes.name}>
				Total {props.name}: {getAmount}
			</h1>
			<h1 className={classes.name}>
				Total Stored {props.name}: {stored}
			</h1>
			<img src={props.picture} alt={`${props.name}`} className={classes.image}></img>
			<div>
				<CookProgress progress={getProgress}></CookProgress>
				<Tooltip title={buttonTip} arrow>
					<span>
						<Button
							className={classes.button}
							onClick={cook}
							variant="contained"
							color="secondary"
							disableRipple
							disabled={buttonDis}
						>
							{buttonName}
						</Button>
					</span>
				</Tooltip>
				<Tooltip title={storeButtonTip} arrow>
					<span>
						<Button
							className={classes.storeButton}
							onClick={store}
							variant="contained"
							color="secondary"
							disableRipple
							disabled={storeButtonDis}
						>
							Stock {props.name}
						</Button>
					</span>
				</Tooltip>
				<StoredProgress progress={storeProgress}></StoredProgress>
			</div>
			<div>
				<Button
					className={classes.price}
					onClick={sell}
					variant="contained"
					color="secondary"
					disableRipple
					disabled={isFoodEmpty()}
				>
					Sell {props.name} for {getPrice}
				</Button>
			</div>
		</div>
	);
}
