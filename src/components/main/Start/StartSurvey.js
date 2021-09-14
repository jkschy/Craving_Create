import React from "react";
import { makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import * as foodUtils from "../../../utilities/allFoods";

const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "center",
		columnGap: "10px"
	},
	select: {
		width: "50%"
	}
});

function StartSurvey(props) {
	const classes = useStyles();
	const foods = foodUtils.getAllFoods();

	const changeFood = (event) => {
		props.setStartingFood(event.target.value);
		props.setFoodError(false);
	};
	const changeName = (event) => {
		props.setStartingName(event.target.value);
		props.setNameError(false);
	};

	return (
		<div>
			<h1>Welcome to your Store!</h1>
			<TextField
				label="Name"
				onChange={changeName}
				value={props.startingName}
				error={props.nameError}
			></TextField>

			<FormControl className={classes.container}>
				<InputLabel id="selectLabel" error={props.foodError}>
					Starting Food
				</InputLabel>
				<Select
					labelId="selectLabel"
					value={props.startingFood}
					onChange={changeFood}
					input={<Input />}
					className={classes.select}
					error={props.foodError}
				>
					{foods.map((food) => (
						<MenuItem key={food.Name} value={food.Name}>
							{food.Name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default StartSurvey;
