import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldText } from "~/components/ui/ESS/FieldText";

const personaldocuments = () => {
	const [isUploadIDCard, setIsUploadIDCard] = useState(false);
	const [isUploadFamilyCard, setIsUploadFamilyCard] = useState(false);

	return (
		<ScrollView className="w-full h-full bg-background">
			<View className="flex gap-y-4 py-2">
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">Personal Documents</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-around px-6 gap-y-6">
						<View className="flex flex-row">
							<FieldText
								labelname="ID Card Number ( KTP )"
								content="3172014811010007"
								className="flex-1"
							/>
							<FieldText
								labelname=" "
								content="Uploaded"
								isCheckBox
								isChecked={isUploadIDCard}
								setCheckBoxValue={() => setIsUploadIDCard(!isUploadIDCard)}
								className="flex-1"
							/>
						</View>
						<View className="flex flex-row">
							<FieldText
								labelname="Family Card Number"
								content="3172011202093674"
								className="flex-1"
							/>
							<FieldText
								labelname=" "
								content="Uploaded"
								isCheckBox
								isChecked={isUploadFamilyCard}
								setCheckBoxValue={() =>
									setIsUploadFamilyCard(!isUploadFamilyCard)
								}
								className="flex-1"
							/>
						</View>
						<FieldText
							labelname="Employment BPJS Number"
							content="3172011202093674"
						/>
						<FieldText
							labelname="Healthcare BPJS Number"
							content="3172011202093674"
						/>
					</CardContent>
				</Card>
			</View>
		</ScrollView>
	);
};

export default personaldocuments;
