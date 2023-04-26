import React from 'react';
import { DefaultTheme, Provider as PaperProvider, TextInput } from 'react-native-paper';
import { LoginScreen } from './app/Screens/login/login';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#22676B',
		backgroundColor:"transparent"
	}
}
export default function App () {
	return (
		<PaperProvider theme={theme}>
			<LoginScreen />
		</PaperProvider>
	);
};
