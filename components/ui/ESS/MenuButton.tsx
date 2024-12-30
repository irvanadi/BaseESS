import { Image, type ImageProps } from "expo-image";
import * as React from "react";
import { cn } from "~/lib/utils";
import { Text } from "../text";
import { View } from "react-native";
import { Link, LinkProps } from "expo-router";

type MenuButtonProps = ImageProps & {
	labelname: string;
	labelClassName?: string;
} & LinkProps;

const MenuButton = React.forwardRef<
	React.ElementRef<typeof Image>,
	MenuButtonProps
>(({ href, labelname, labelClassName, className, ...props }, ref) => {
	return (
		<Link href={href}>
			<View
				className={cn(
					"flex justify-start items-center w-[4.5rem] h-max gap-3",
					className
				)}
			>
				<Image
					ref={ref}
					className="aspect-square w-16"
					contentFit="contain"
					contentPosition={"center"}
					{...props}
				/>
				<Text
					className={cn(
						"whitespace-break-spaces text-center font-afacad_medium text-xs text-primary",
						labelClassName
					)}
				>
					{labelname}
				</Text>
			</View>
		</Link>
	);
});

MenuButton.displayName = "MenuButton";

export { MenuButton };
