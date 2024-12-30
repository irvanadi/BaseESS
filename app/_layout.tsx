import "~/global.css";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	DarkTheme,
	DefaultTheme,
	Theme,
	ThemeProvider,
} from "@react-navigation/native";
import { SplashScreen, Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform } from "react-native";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { PortalHost } from "@rn-primitives/portal";
import { ThemeToggle } from "~/components/ThemeToggle";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

const LIGHT_THEME: Theme = {
	...DefaultTheme,
	colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
	...DarkTheme,
	colors: NAV_THEME.dark,
};

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
	const [loaded, error] = useFonts({
		Afacad: require("../assets/fonts/Afacad_Regular.ttf"),
		Afacad_Italic: require("../assets/fonts/Afacad_Italic.ttf"),
		Afacad_Medium: require("../assets/fonts/Afacad_Medium.ttf"),
		Afacad_MediumItalic: require("../assets/fonts/Afacad_MediumItalic.ttf"),
		Afacad_SemiBold: require("../assets/fonts/Afacad_SemiBold.ttf"),
		Afacad_SemiBoldItalic: require("../assets/fonts/Afacad_SemiBoldItalic.ttf"),
		Afacad_Bold: require("../assets/fonts/Afacad_Bold.ttf"),
		Afacad_BoldItalic: require("../assets/fonts/Afacad_BoldItalic.ttf"),
	});

	React.useEffect(() => {
		(async () => {
			const theme = await AsyncStorage.getItem("theme");
			if (Platform.OS === "web") {
				// Adds the background color to the html element to prevent white background on overscroll.
				document.documentElement.classList.add("bg-background");
			}
			if (!theme) {
				AsyncStorage.setItem("theme", colorScheme);
				setIsColorSchemeLoaded(true);
				return;
			}
			const colorTheme = theme === "dark" ? "dark" : "light";
			if (colorTheme !== colorScheme) {
				setColorScheme(colorTheme);
				setAndroidNavigationBar(colorTheme);
				setIsColorSchemeLoaded(true);
				return;
			}
			setAndroidNavigationBar(colorTheme);
			setIsColorSchemeLoaded(true);
		})().finally(() => {
			SplashScreen.hideAsync();
		});
	}, []);

	if (!isColorSchemeLoaded || !loaded) {
		return null;
	}

	return (
		<ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
			<StatusBar style={isDarkColorScheme ? "light" : "dark"} />
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="auth" />
				<Stack.Screen name="(home)" />
				<Stack.Screen name="announcement" />
			</Stack>
			<PortalHost />
		</ThemeProvider>
	);
}
