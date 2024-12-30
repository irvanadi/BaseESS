import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const employeedata = () => {
	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Employment Data</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<FieldText labelname="Tenant" content="Julong Group Indonesia" />
						<FieldText labelname="Organization" content="Head Office" />
						<View className="flex flex-row">
							<FieldText
								labelname="Search Key"
								content="B1001J24001"
								className="flex-1"
							/>
							<FieldText
								labelname="Employee ID"
								content="B1001J24001"
								className="flex-1"
							/>
						</View>
						<FieldText labelname="Fingerprint No." content="3909" />
						<FieldText labelname="Full Name" content="Cindy Veronica" />
						<FieldText labelname="Preferred Name" content="Vero" isEditable />
						<FieldText
							labelname="Description"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						/>
						<FieldText content="Active Employee" isCheckBox />
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default employeedata;
