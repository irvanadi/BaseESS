import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const hiringinformation = () => {
	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Hiring Information</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<View className="flex flex-row">
							<FieldText
								labelname="Recruitment Type"
								content="PH - Profesional Hire"
								className="flex-1"
							/>
							<FieldText
								labelname=" "
								content="Sanction Active"
								className="flex-1"
								isCheckBox
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Educational Qualification"
								content="3 - Bachelor"
								className="flex-1"
							/>
							<FieldText
								labelname="Gelar"
								content="S1 - Ekonomi Syariah"
								className="flex-1"
							/>
						</View>
						<FieldText content="Bilingual (Indonesia / Mandarin)" isCheckBox />
						<View className="flex flex-row">
							<FieldText
								labelname="Full Name"
								content="Cindy Veronica"
								className="flex-1"
							/>
							<FieldText
								labelname="Preferred Name"
								content="Vero"
								isEditable
								className="flex-1"
							/>
						</View>
						<FieldText labelname="Employment Status" content="Active" />
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default hiringinformation;
