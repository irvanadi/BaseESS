import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const contactinformation = () => {
	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Contact Information</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<FieldText
							labelname="Residential Address (as per ID card)"
							content="Jl. Jemur Andayani XV No.3B, Jemur Wonosari, Kec. Wonocolo, Surabaya, Jawa Timur 60237"
							isEditable
						/>
						<FieldText
							labelname="Domicile"
							content="Jl. Jemur Andayani XV No.3B, Jemur Wonosari, Kec. Wonocolo, Surabaya, Jawa Timur 60237"
							isEditable
						/>
						<FieldText
							labelname="Original Address"
							content="Jl. Jemur Andayani XV No.3B, Jemur Wonosari, Kec. Wonocolo, Surabaya, Jawa Timur 60237"
							isEditable
						/>
						<FieldText
							labelname="Email Address"
							content="27.822.188.2@gmail.com"
							isEditable
						/>
						<View className="flex flex-row">
							<FieldText
								labelname="Phone"
								content="(031) 99859507"
								isEditable
								className="flex-1"
							/>
							<FieldText
								labelname="Mobile Phone"
								content="081299309342"
								isEditable
								className="flex-1"
							/>
						</View>
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default contactinformation;
