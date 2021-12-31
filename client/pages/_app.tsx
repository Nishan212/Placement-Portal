import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { uiColor, shadow, badgeColor } from "../styles/styles";
import MainLayout from "layout";

declare module "@mui/material/styles" {
	interface Theme {
		uiColor: typeof uiColor;
		badgeColor: typeof badgeColor;
		shadow: typeof shadow;
	}
	interface ThemeOptions {
		uiColor?: typeof uiColor;
		badgeColor?: typeof badgeColor;
		shadow?: typeof shadow;
	}
}

export let theme = createTheme({
	uiColor,
	badgeColor,
	shadow,
});

theme = createTheme({
	...theme,
	typography: {
		fontFamily: "Inter",
	},
	palette: {
		primary: {
			main: theme.uiColor.indigo,
			contrastText: theme.uiColor.white,
		},
		error: {
			main: theme.uiColor.darkRed,
			contrastText: theme.uiColor.white,
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
export default MyApp;
