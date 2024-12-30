import { Image, type ImageProps } from "expo-image";
import * as React from "react";
import { cn } from "~/lib/utils";
import { Text } from "~/components/ui/text";
import { View } from "react-native";
import { Link, LinkProps } from "expo-router";

type IconTextProps = ImageProps & {
	labelname: string;
	arrow?: boolean;
	textClassName?: string;
	content?: string;
};

const IconText = React.forwardRef<
	React.ElementRef<typeof Image>,
	IconTextProps
>(({ content, arrow, labelname, textClassName, className, ...props }, ref) => {
	return (
		<View className={cn("flex flex-row gap-x-3 py-3", className)}>
			<Image
				ref={ref}
				className="aspect-square w-4"
				contentFit="contain"
				contentPosition={"center"}
				style={{ width: 16, height: 16, marginTop: 2 }}
				{...props}
			/>
			<View className="flex flex-1">
				<Text
					className={cn(
						"font-afacad text-primary text-sm flex-1",
						textClassName
					)}
				>
					{labelname}
				</Text>
				{content && (
					<Text
						className={cn(
							"font-afacad text-primary text-sm flex-1",
							textClassName
						)}
					>
						{content}
					</Text>
				)}
			</View>
		</View>
	);
});

IconText.displayName = "IconText";

export { IconText };
