import { makeStyles } from "@material-ui/core";
import MainGame from "./components/main/MainGame";

const classes = makeStyles({
	game: {
		width: "50%"
	}
});

const App = () => <MainGame className={classes.name} />;

export default App;
