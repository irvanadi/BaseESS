import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const maritalstatus = () => {
	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Marital Status</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<View className="flex flex-row">
							<FieldText
								labelname="Tax Status"
								content="TK0"
								className="flex-1"
							/>
							<FieldText
								labelname="Marital Status"
								content="Single (Unmarried)"
								className="flex-1"
							/>
						</View>
						<FieldText labelname="Tax ID" content="27.822.188.2-041.000" />
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default maritalstatus;
