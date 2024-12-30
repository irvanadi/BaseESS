import { TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "~/components/ui/text";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/ESS/TextInput";
import { Button } from "~/components/ui/button";
import { Redirect, router } from "expo-router";
import { useRootNavigationState } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const imagePath = require("~/assets/images/login_image.png");

enum CardState {
	Login = "Login",
	Company = "Company",
}

const auth = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [companyCode, setCompanyCode] = useState<string>("");
	const [cardState, setCardState] = useState<CardState>(CardState.Login);
	const rootNavigationState = useRootNavigationState();

	function handleLogin() {
		setCardState(CardState.Company);
	}

	async function handleEnter() {
		try {
			await AsyncStorage.setItem("username", username);
			await AsyncStorage.setItem("password", password);
			await AsyncStorage.setItem("companyCode", companyCode);

			if (AsyncStorage.getItem("companyCode") != null) {
				router.replace("./(home)");
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		const getLocalData = async () => {
			try {
				const username = await AsyncStorage.getItem("username");
				const password = await AsyncStorage.getItem("password");
				const companyCode = await AsyncStorage.getItem("companyCode");

				if (username && password && companyCode) {
					handleEnter();
				}
			} catch (error) {
				console.log(error);
			}
		};
		getLocalData();
	}, []);

	// Redirect to Home
	if (rootNavigationState?.key) return <Redirect href={"./(home)"} />;

	return (
		<SafeAreaProvider>
			<View className="relative w-full h-full">
				<View className="w-full h-[75%] bg-background_primary flex justify-end">
					<Image
						source={imagePath}
						style={{ width: "100%", height: "80%", marginBottom: 20 }}
						// className="w-10 h-10"
						contentFit="contain"
					/>
				</View>
				<View className="absolute bottom-[2%] w-full">
					<Card className=" h-max px-6 py-4">
						<CardTitle className="pt-0">
							<Text className="text-primary text-xl font-afacad_semibold h-24">
								{cardState}
							</Text>
						</CardTitle>
						<CardContent className="mt-4 w-full p-0">
							<View className="flex flex-col gap-3">
								<Text className="font-afacad text-xs mb-0">
									{cardState == CardState.Login &&
										`Permudah urusan karyawan anda, dengan all-in-one Employee Self Service apps Essy!`}
									{cardState == CardState.Company &&
										`Enter your company code. If you require assistance in obtaining your company code, kindly contact an Avolut representative.`}
								</Text>
								{cardState == CardState.Login && (
									<>
										<Input
											type="Username"
											placeholder="Username"
											inputMode="text"
											editable
											className="text-sm"
											placeholderClassName="text-sm"
											value={username}
											onChangeText={(newUsername) => setUsername(newUsername)}
										/>
										<Input
											type="Password"
											placeholder="Password"
											secureTextEntry
											editable
											className="text-sm"
											placeholderClassName="text-sm"
											value={password}
											onChangeText={(newPassword) => setPassword(newPassword)}
										/>
									</>
								)}
								{cardState == CardState.Company && (
									<Input
										type="Company Code"
										placeholder="356MST"
										secureTextEntry
										editable
										className="text-sm"
										placeholderClassName="text-sm"
										value={companyCode}
										onChangeText={(newCompanyCode) =>
											setCompanyCode(newCompanyCode)
										}
									/>
								)}
								{cardState == CardState.Login ? (
									<Button onPress={handleLogin}>
										<Text className="text-sm text-white font-afacad_medium">
											Login
										</Text>
									</Button>
								) : (
									<Button onPress={handleEnter}>
										<Text className="text-sm text-white font-afacad_medium">
											Enter
										</Text>
									</Button>
								)}
							</View>
						</CardContent>
					</Card>
				</View>
			</View>
		</SafeAreaProvider>
	);
};

export default auth;
