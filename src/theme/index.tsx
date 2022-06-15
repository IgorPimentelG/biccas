import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {

	const config: DefaultTheme = {
		colors: {
			main: {
				primary: "#54BD95",
				secondary: "#6BC2A1"
			},

			text: {
				primary: "#191A15",
				secondary: "#A6A6A6",
			},

			background: {
				primary: "#161C28",
				secondary: "#222938"
			}
		}
	};

	return(
		<ThemeProvider theme={config}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
