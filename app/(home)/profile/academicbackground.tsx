import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const academicbackground = () => {
	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Academic Background</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<View className="flex flex-row">
							<FieldText
								labelname="Education Level"
								content="3 - Bachelor"
								className="flex-1"
							/>
							<FieldText
								labelname="University / Institution"
								content="Univ. Bunda Mulia"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Major"
								content="Bhs. Mandarin"
								className="flex-1"
							/>
							<FieldText
								labelname="Indeks Prestasi Kumulatif"
								content="0.0"
								className="flex-1"
							/>
						</View>
						<FieldText labelname="Graduation Year" content="2024" />
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default academicbackground;
