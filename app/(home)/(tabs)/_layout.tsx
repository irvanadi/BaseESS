import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router, Slot, Tabs } from "expo-router";
import icHome from "~/assets/images/ic_home.svg";
import icActionCenter from "~/assets/images/ic_actioncenter.svg";
import icProfile from "~/assets/images/ic_userprofile.svg";
import { Image, ImageBackground } from "expo-image";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Text } from "~/components/ui/text";
import imgBackground from "~/assets/images/header_background.png";
import { Dimensions, Pressable, View } from "react-native";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";

const TabLayout = () => {
	return (
		// <SafeAreaView className="flex-1">
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#313678",
				tabBarInactiveTintColor: "#C3D5FF",
				tabBarLabelStyle: { fontSize: 12, fontFamily: "Afacad_SemiBold" },
				headerBackground: ({ style }) => (
					<ImageBackground
						style={{ height: 100 }}
						source={imgBackground}
						contentFit="cover"
						contentPosition={"top"}
					></ImageBackground>
				),
				headerTintColor: "#fff",
			}}
			backBehavior="history"
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Image
							source={icHome}
							style={{ width: 20, height: 20, tintColor: color }}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="action_center"
				options={{
					title: "Action Center",
					tabBarIcon: ({ color, size }) => (
						<Image
							source={icActionCenter}
							style={{ width: 20, height: 20, tintColor: color }}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profileMenu"
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Image
							source={icProfile}
							style={{ width: 20, height: 20, tintColor: color }}
						/>
					),
					headerRight: () => <ThemeToggle />,
					headerShown: false,
				}}
			/>
		</Tabs>
		// </SafeAreaView>
	);
};

export default TabLayout;
