import { ScrollView, View } from "react-native";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import AvatarFallBackImage from "~/assets/images/avatar_fallback.svg";
import { Text } from "~/components/ui/text";
import { MenuButton } from "~/components/ui/ESS/MenuButton";
import icEmployeeData from "~/assets/images/ic_employee_data.svg";
import icHiringInformation from "~/assets/images/ic_hiring_information.svg";
import icAcademicBackground from "~/assets/images/ic_academic_background.svg";
import icExperience from "~/assets/images/ic_experience.svg";
import { Image, ImageBackground } from "expo-image";
import { IconArrowLink } from "~/components/ui/ESS/IconArrowButton";
import icPerson from "~/assets/images/ic_person.svg";
import { getStatusBarHeight } from "react-native-status-bar-height";
import headerBackground from "~/assets/images/header_background.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import icAvatarFallback from "~/assets/images/ic_avatar_fallback.svg";
import icMaritalStatus from "~/assets/images/ic_marital_status.svg";
import icContactInformation from "~/assets/images/ic_contactinformation.svg";
import icFamilyMember from "~/assets/images/ic_familymember.svg";
import icPersonalDocument from "~/assets/images/ic_personaldocument.svg";
import icSalaryInformation from "~/assets/images/ic_salaryinformation.svg";
import icEmployeeJobData from "~/assets/images/ic_employeejobdata.svg";
import icPromotionDuties from "~/assets/images/ic_promotionduties.svg";
import icCareerPath from "~/assets/images/ic_careerpath.svg";
import icCareerDuties from "~/assets/images/ic_careerduties.svg";
import icEmploymentHistory from "~/assets/images/ic_employmenthistory.svg";
import icLeaveBalance from "~/assets/images/ic_leavebalance.svg";
import icDisciplinaryRecord from "~/assets/images/ic_diciplinaryrecords.svg";
import icLogout from "~/assets/images/ic_logout.svg";

const profileMenu = () => {
	async function handleLogOut() {
		// Remove All AsyncStorage Data
		try {
			await AsyncStorage.clear();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<View className="flex-1">
			<View>
				{/* Header */}
				<ImageBackground
					style={{ height: 160, paddingTop: getStatusBarHeight() }}
					source={headerBackground}
					contentFit="cover"
					contentPosition={"top"}
				>
					<Card className="py-2 mt-4">
						<CardContent className="flex flex-row gap-x-4 px-4">
							<Avatar alt="Avatar Image" className="w-14 h-14">
								<Image
									source={icAvatarFallback}
									placeholder={icAvatarFallback}
									style={{ width: 56, height: 56 }}
									placeholderContentFit="cover"
									contentFit="cover"
									contentPosition={"center"}
								/>
								<AvatarFallback>
									<Image source={icAvatarFallback} />
								</AvatarFallback>
							</Avatar>
							<View className="flex justify-between py-1">
								<View className="flex flex-row gap-x-1">
									<Text className="font-Afacad_Bold text-lg text-primary">
										Abdul Gojali
									</Text>
									<Text className="font-afacad text-lg text-primary">
										( Staff HR )
									</Text>
								</View>
								<Text className="font-afacad text-sm text-primary">
									Head Office Jakarta - 633023
								</Text>
							</View>
						</CardContent>
					</Card>
				</ImageBackground>
			</View>
			<View className="flex-1 bg-background">
				<ScrollView className="py-2 flex-1">
					<View className="flex gap-2 py-2">
						<Card>
							<CardContent className="flex flex-row justify-around items-center">
								<View className="flex items-center">
									<Text className="font-afacad text-xs text-primary">
										Leave Balance
									</Text>
									<Text className="font-afacad_semibold text-lg text-primary">
										4 Days
									</Text>
								</View>
								<View className="w-[1px] h-full bg-primary_800"></View>
								<View className="flex items-center">
									<Text className="font-afacad text-xs text-primary">
										Grade
									</Text>
									<Text className="font-afacad_semibold text-lg text-primary">
										1A
									</Text>
								</View>
								<View className="w-[1px] h-full bg-primary_800"></View>
								<View className="flex items-center">
									<Text className="font-afacad text-xs text-primary">
										Tenure
									</Text>
									<Text className="font-afacad_semibold text-lg text-primary">
										4 Yr 3 Mo
									</Text>
								</View>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Employment Data</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-row justify-around w-full pt-4">
								<MenuButton
									href={"/(home)/profile/employeedata"}
									source={icEmployeeData}
									style={{ width: 40, height: 40 }}
									labelname="Employee Data"
								/>
								<MenuButton
									href={"/(home)/profile/hiringinformation"}
									source={icHiringInformation}
									style={{ width: 40, height: 40 }}
									labelname="Hiring Information"
								/>
								<MenuButton
									href={"/(home)/profile/academicbackground"}
									source={icAcademicBackground}
									style={{ width: 40, height: 40 }}
									labelname="Academic Background"
								/>
								<MenuButton
									href={"/(home)/profile/professionalexperience"}
									source={icExperience}
									style={{ width: 40, height: 40 }}
									labelname="Professional Experience"
								/>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Personal Data</CardTitle>
							</CardHeader>
							<CardContent className="flex justify-around px-6 gap-y-1">
								<IconArrowLink
									labelname="Personal Information"
									href={"/(home)/profile/personalinformation"}
									source={icPerson}
								/>
								<IconArrowLink
									labelname="Marital Status"
									href={"/(home)/profile/maritalstatus"}
									source={icMaritalStatus}
								/>
								<IconArrowLink
									labelname="Contact Information"
									href={"/(home)/profile/contactinformation"}
									source={icContactInformation}
								/>
								<IconArrowLink
									labelname="Family Members"
									href={"/(home)/profile/familymembers"}
									source={icFamilyMember}
								/>
								<IconArrowLink
									labelname="Personal Documents"
									href={"/(home)/profile/personaldocuments"}
									source={icPersonalDocument}
								/>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Career Data</CardTitle>
							</CardHeader>
							<CardContent className="flex justify-around px-6 gap-y-1">
								<IconArrowLink
									labelname="Salary Information"
									href={"/(home)/profile/salaryinformation"}
									source={icSalaryInformation}
								/>
								<IconArrowLink
									labelname="Employee Job Data"
									href={"/(home)/profile/employeejobdata"}
									source={icEmployeeJobData}
								/>
								<IconArrowLink
									labelname="Promotion Duties"
									href={"/profile/promotionduties"}
									source={icPromotionDuties}
								/>
								<IconArrowLink
									labelname="Career Path"
									href={"/profile/careerpath"}
									source={icCareerPath}
								/>
								<IconArrowLink
									labelname="Career Duties"
									href={"/profile/careerduties"}
									source={icCareerDuties}
								/>
								<IconArrowLink
									labelname="Employment History"
									href={"/profile/employmenthistory"}
									source={icEmploymentHistory}
								/>
								<IconArrowLink
									labelname="Leave Balance"
									href={"/profile/leavebalance"}
									source={icLeaveBalance}
								/>
								<IconArrowLink
									labelname="Disciplinary Record"
									href={"/profile/disciplinaryrecord"}
									source={icDisciplinaryRecord}
								/>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Account Setting</CardTitle>
							</CardHeader>
							<CardContent className="flex justify-around px-6 gap-y-1">
								<IconArrowLink
									href={"/auth"}
									onPress={handleLogOut}
									labelname="Log Out"
									replace={true}
									source={icLogout}
									arrow={false}
								/>
							</CardContent>
						</Card>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default profileMenu;
