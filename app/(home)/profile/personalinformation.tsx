import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const personalinformation = () => {
	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Personal Information</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<FieldText labelname="Gender" content="Female" />
						<View className="flex flex-row">
							<FieldText
								labelname="Place of Birth"
								content="Bagan Siapi-api"
								className="flex-1"
							/>
							<FieldText
								labelname="Date of Birth"
								content="08/11/2001"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Age (Years)"
								content="22"
								className="flex-1"
							/>
							<FieldText
								labelname="Age (Months)"
								content="11"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Age (Years)"
								content="22"
								className="flex-1"
							/>
							<FieldText
								labelname="Age (Months)"
								content="11"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Nationality"
								content="Indonesia"
								className="flex-1"
							/>
							<FieldText
								labelname="Religion"
								content="Buddha"
								isEditable
								className="flex-1"
							/>
						</View>
						<FieldText labelname="Blood Type" content="AB+" />
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default personalinformation;
