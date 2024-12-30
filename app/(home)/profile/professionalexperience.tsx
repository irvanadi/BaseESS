import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useCallback, useRef } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import {
	StyledCard,
	StyledCardContent,
	StyledCardHeader,
	StyledCardTitle,
} from "~/components/ui/ESS/StyledCard";
import { IconText } from "~/components/ui/ESS/IconText";
import icPerson from "~/assets/images/ic_person.svg";
import { Button } from "~/components/ui/button";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const professionalexperience = () => {
	// ref
	const bottomSheetRef = useRef<BottomSheet>(null);

	// callbacks
	const handlePresentModalPress = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	return (
		<GestureHandlerRootView className="bg-background flex-1">
			<View style={{ flex: 1 }}>
				<ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
					<View className="flex gap-2 py-2" style={{ flex: 1 }}>
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									Professional Experience
								</CardTitle>
							</CardHeader>
							<CardContent className="flex justify-around px-4 gap-y-4">
								<Text className="text-muted-foreground px-2">
									Employment History
								</Text>
								{/* Todo: FlatList Object */}
								<StyledCard>
									<StyledCardHeader>
										<StyledCardTitle>
											PT. Anugrah Digital Indonesia
										</StyledCardTitle>
									</StyledCardHeader>
									<StyledCardContent className="px-3">
										<View className="flex flex-row gap-x-3">
											<IconText
												source={icPerson}
												labelname="Mandarin Translator"
												className="basis-2/3"
											/>
											<IconText
												source={icPerson}
												labelname="1 Year"
												className="basis-1/3"
											/>
										</View>
										<IconText
											source={icPerson}
											labelname="Description"
											content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
										/>
									</StyledCardContent>
								</StyledCard>
							</CardContent>
							<CardFooter className="px-4 py-6">
								<Button className="w-full">
									<Text className={"text-xs text-light font-afacad_semibold"}>
										Add Employment History
									</Text>
								</Button>
							</CardFooter>
						</Card>
					</View>
				</ScrollView>
				<BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
					<BottomSheetView style={styles.contentContainer}>
						<Text>Awesome 🎉</Text>
					</BottomSheetView>
				</BottomSheet>
			</View>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		padding: 36,
		alignItems: "center",
	},
});

export default professionalexperience;
