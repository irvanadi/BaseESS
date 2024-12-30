import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";
import imgBackground from "~/assets/images/header_background.png";

const HomeLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerTintColor: "#fff",
				headerBackground: () => (
					<ImageBackground
						style={{ height: 100 }}
						source={imgBackground}
						contentFit="cover"
						contentPosition={"top"}
					></ImageBackground>
				),
			}}
		>
			<Stack.Screen
				name="(tabs)"
				options={{
					header: () => null,
				}}
			/>
		</Stack>
	);
};

export default HomeLayout;
