import { Image, type ImageProps } from "expo-image";
import * as React from "react";
import { cn } from "~/lib/utils";
import { Text } from "~/components/ui/text";
import { View } from "react-native";
import { Link, LinkProps } from "expo-router";
import IcArrowRight from "~/assets/images/IcArrowRight";

type IconArrowLinkProps = ImageProps & {
	labelname: string;
	arrow?: boolean;
	textClassName?: string;
} & LinkProps;

const IconArrowLink = React.forwardRef<
	React.ElementRef<typeof Image>,
	IconArrowLinkProps
>(({ href, arrow, labelname, textClassName, className, ...props }, ref) => {
	const arrowDef = arrow ?? true;
	return (
		<Link href={href}>
			<View
				className={cn("flex flex-row gap-x-3 py-4 items-center", className)}
			>
				<Image
					ref={ref}
					className="aspect-square w-4"
					contentFit="contain"
					contentPosition={"center"}
					style={{ width: 16, height: 16 }}
					{...props}
				/>
				<Text
					className={cn(
						"font-afacad_medium text-primary text-sm flex-1",
						textClassName
					)}
				>
					{labelname}
				</Text>
				{arrowDef && <IcArrowRight />}
			</View>
		</Link>
	);
});

IconArrowLink.displayName = "IconArrowLink";

export { IconArrowLink };
