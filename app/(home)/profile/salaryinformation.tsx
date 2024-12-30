import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const salaryinformation = () => {
	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Salary Information</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<View className="flex flex-row">
							<FieldText
								labelname="Bank"
								content="Mandiri"
								className="flex-1"
							/>
							<FieldText
								labelname="Account Name"
								content="Cindy Veronica"
								className="flex-1"
							/>
						</View>
						<FieldText labelname="Bank Account ID" content="1150010572024" />
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default salaryinformation;
