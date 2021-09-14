import { Button, makeStyles } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles({
	background: {
		backgroundColor: "gray",
		width: "100%",
		height: "50vh"
	},
	button: {
		width: "100%",
		height: "100%"
	},
	icon: {
		fontSize: "10vh"
	}
});

export default function AddFood(props) {
	const classes = useStyles();
	return (
		<div className={classes.background}>
			<Button
				variant="text"
				className={classes.button}
				onClick={() => {
					props.addIngredient();
				}}
			>
				<AddBoxIcon className={classes.icon} />
			</Button>
		</div>
	);
}
