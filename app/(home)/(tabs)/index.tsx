import { Dimensions, ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { Text } from "~/components/ui/text";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { MenuButton } from "~/components/ui/ESS/MenuButton";
import icWorkSchedule from "~/assets/images/ic_work_schedule.svg";
import icAttendanceLog from "~/assets/images/ic_attendance_log.svg";
import icLeavePermit from "~/assets/images/ic_leave_permit.svg";
import icOvertime from "~/assets/images/ic_overtime.svg";
import icPayslip from "~/assets/images/ic_payslip.svg";
import icBusinessTrip from "~/assets/images/ic_business_trip.svg";
import icSettlement from "~/assets/images/ic_settlement.svg";
import icHRPolicy from "~/assets/images/ic_hr_policy.svg";
import icAnnouncementList from "~/assets/images/ic_announcement.svg";
import icSuggestion from "~/assets/images/ic_suggestion.svg";
import icComplaint from "~/assets/images/ic_complaint.svg";
import icCalendar from "~/assets/images/ic_calendar.svg";
import icCheckIn from "~/assets/images/ic_download.svg";
import icCheckOut from "~/assets/images/ic_upload.svg";
import { Image, ImageBackground } from "expo-image";
import Carousel from "react-native-reanimated-carousel";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import headerBackground from "~/assets/images/header_background.png";
import { getStatusBarHeight } from "react-native-status-bar-height";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
	const width = Dimensions.get("window").width;
	const statusBarHeight = getStatusBarHeight();

	useEffect(() => {
		const username = AsyncStorage.getItem("username");
		console.log(username);
	}, []);
	return (
		<View style={{ flex: 1 }}>
			{/* Header */}
			<ImageBackground
				style={{ height: 240, paddingTop: statusBarHeight }}
				source={headerBackground}
				contentFit="cover"
				contentPosition={"top"}
			>
				<Text className="text-white text-xs font-Afacad_Bold px-4 pt-4">
					Halo, Abdul Gojali
				</Text>
				<Text className="text-white text-xs font-afacad px-4 pb-4">
					Staff HR
				</Text>
				{/* Check Log */}
				<Card className="h-max mx-4 py-0">
					<CardContent className="pt-4">
						<View className="flex gap-y-3">
							<View className="flex flex-row justify-around">
								{/* Check In */}
								<View className="flex flex-row gap-x-6">
									<Image source={icCheckIn} style={{ width: 28, height: 28 }} />
									<View className="flex">
										<Text className="text-xs text-primary">Check In</Text>
										<Text className="text-xs font-Afacad_Bold text-primary_800">
											07 : 15
										</Text>
									</View>
								</View>
								{/* Divider */}
								<View className="w-[1px] h-full bg-primary_800"></View>
								{/* Check Out */}
								<View className="flex flex-row gap-x-6">
									<Image
										source={icCheckOut}
										style={{ width: 28, height: 28 }}
									/>
									<View className="flex">
										<Text className="text-xs text-primary">Check Out</Text>
										<Text className="text-xs font-Afacad_Bold text-primary_800">
											18 : 45
										</Text>
									</View>
								</View>
							</View>
							<Button>
								<Text className="text-xs text-light font-afacad_semibold">
									Check In
								</Text>
							</Button>
						</View>
					</CardContent>
				</Card>
			</ImageBackground>
			{/* Content */}
			<ScrollView className="bg-[#F4F7FF] w-full h-full">
				<View className="flex gap-2 py-2">
					{/* Announcement */}
					<Card
						className="flex mx-4 py-0 h-40"
						onTouchEnd={() => {
							router.push("/(home)/menu/announcement");
						}}
					>
						<CardHeader className="px-6 pt-4 pb-2">
							<Text className="font-afacad_semibold">Announcement</Text>
						</CardHeader>
						<CardContent className="w-full">
							<Carousel
								loop
								width={width - 80}
								height={width / 2}
								autoPlay={true}
								autoPlayInterval={6000}
								data={[...new Array(6).keys()]}
								scrollAnimationDuration={1000}
								// onSnapToItem={(index) => console.log("current index:", index)}
								renderItem={({ index }) => (
									<Card className="py-2 px-2 border-0">
										<CardTitle className="font-afacad_semibold text-base text-primary_800">
											@nextjs
										</CardTitle>
										<CardDescription className="font-afacad text-sm pt-1 text-primary_800">
											The React Framework - Created and maintained by @vercel
										</CardDescription>
										<CardFooter className="p-0 pt-1 flex flex-row gap-x-1">
											<Image
												source={icCalendar}
												style={{ width: 16, height: 16 }}
											/>
											<Text className="text-xs text-muted font-afacad">
												Joined December 2021
											</Text>
										</CardFooter>
									</Card>
								)}
							/>
						</CardContent>
					</Card>
					{/* Menu */}
					<Card className="flex mx-4">
						<CardHeader className="py-2">
							<Text className="font-afacad_semibold">Menu</Text>
						</CardHeader>
						<CardContent className="flex flex-row flex-wrap pt-4 gap-y-6 w-full phone_s:gap-x-3 phone_md:gap-x-5 px-4">
							<MenuButton
								href={"/(home)/menu/workingschedule"}
								source={icWorkSchedule}
								style={{ width: 40, height: 40 }}
								labelname="Working Schedule"
							/>
							<MenuButton
								href={"/(home)/menu/attendancelog"}
								source={icAttendanceLog}
								style={{ width: 40, height: 40 }}
								labelname="Attendance Log"
							/>
							<MenuButton
								href={"./leavepermit"}
								source={icLeavePermit}
								style={{ width: 40, height: 40 }}
								labelname="Leave & Permit"
							/>
							<MenuButton
								href={"./overtime"}
								source={icOvertime}
								style={{ width: 40, height: 40 }}
								labelname="Overtime"
								contentFit="contain"
							/>
							<MenuButton
								href={"./payslip"}
								source={icPayslip}
								style={{ width: 40, height: 40 }}
								labelname="Payslip"
							/>
							<MenuButton
								href={"./businesstrip"}
								source={icBusinessTrip}
								style={{ width: 40, height: 40 }}
								labelname="Business Trip"
							/>
							<MenuButton
								href={"./settlements"}
								source={icSettlement}
								style={{ width: 40, height: 40 }}
								labelname="Settlement"
							/>
							<MenuButton
								href={"./hrpolicy"}
								source={icHRPolicy}
								style={{ width: 40, height: 40 }}
								labelname="HR Policy"
							/>
							<MenuButton
								href={"./announcements"}
								source={icAnnouncementList}
								style={{ width: 40, height: 40 }}
								labelname="Announcement List"
							/>
							<MenuButton
								href={"./suggestions"}
								source={icSuggestion}
								style={{ width: 40, height: 40 }}
								labelname="Suggestion"
							/>
							<MenuButton
								href={"./complaints"}
								source={icComplaint}
								style={{ width: 40, height: 40 }}
								labelname="Complaint"
							/>
						</CardContent>
					</Card>
				</View>
			</ScrollView>
		</View>
	);
};

export default index;
