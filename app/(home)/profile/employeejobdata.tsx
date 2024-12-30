import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const employeejobdata = () => {
	return (
		<ScrollView className="w-full h-full bg-background flex-grow">
			<View className="flex w-full h-full gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Employee Job Data</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<View className="flex flex-row">
							<FieldText
								labelname="Employment Status"
								content="Aktif"
								className="flex-1"
							/>
							<FieldText
								labelname="SK Number"
								content="27.822.188.2-041.000"
								className="flex-1"
							/>
						</View>
						<FieldText
							labelname="Description"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
						/>
						<View className="flex flex-row">
							<FieldText
								labelname="Tipe Rekrutmen"
								content="PH - Profesional Hire"
								className="flex-1"
							/>
							<FieldText
								labelname="Employee Type"
								content="Karyawan PKWT"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Working Organization"
								content="PT Palmina Utama"
								className="flex-1"
							/>
							<FieldText
								labelname="Work Location"
								content="HO - Jakarta"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Position"
								content="STSC - Staff Secretary"
								className="flex-1"
							/>
							<FieldText
								labelname="Position Level"
								content="Staff"
								className="flex-1"
							/>
						</View>
						<FieldText
							labelname="Division"
							content="Secretary"
							className="flex-1"
						/>
						<View className="flex flex-row">
							<FieldText
								isCheckBox
								isChecked
								content="Primary"
								className="flex-1"
							/>
							<FieldText
								isCheckBox
								disabled
								content="Acting"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Employee Grade"
								content="3B"
								className="flex-1"
							/>
							<FieldText
								labelname="Salary"
								content="Rp. 999.999.999"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Contract Start Date"
								content="08/11/2001"
								className="flex-1"
							/>
							<FieldText
								labelname="Contract End Date"
								content="08/11/2001"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Contract Start Date"
								content="08/11/2001"
								className="flex-1"
							/>
							<FieldText
								labelname="Contract End Date"
								content="08/11/2001"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Contract Start Date"
								content="08/11/2001"
								className="flex-1"
							/>
							<FieldText
								labelname="Contract End Date"
								content="08/11/2001"
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Contract Start Date"
								content="08/11/2001"
								className="flex-1"
							/>
							<FieldText
								labelname="Contract End Date"
								content="08/11/2001"
								className="flex-1"
							/>
						</View>
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default employeejobdata;
