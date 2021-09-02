import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./fonts/Janda/JandaManateeSolid.ttf";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createTheme } from "@material-ui/core";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2d5e30",
			dark: "#1c3b1e",
			light: "#517854"
		},
		secondary: {
			main: "#a1cfb3",
			dark: "#7be0ad",
			light: "#c0dbcc"
		}
	}
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
