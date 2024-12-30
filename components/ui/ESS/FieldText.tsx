import * as React from "react";
import { Text, View } from "react-native";
import { cn } from "~/lib/utils";
import { Checkbox } from "../checkbox";
import IcEdit from "~/assets/images/icEdit";

type FieldTextProps = React.ComponentPropsWithoutRef<typeof View> & {
	labelname?: string;
	content?: string;
	textClassName?: string;
	labelClassName?: string;
	isCheckBox?: boolean;
	isChecked?: boolean;
	isEditable?: boolean;
	disabled?: boolean;
	setCheckBoxValue?: (checkBoxValue: boolean) => void;
};

const FieldText = React.forwardRef<
	React.ElementRef<typeof View>,
	FieldTextProps
>(
	(
		{
			isCheckBox = false,
			isChecked = false,
			isEditable = false,
			setCheckBoxValue = () => {},
			labelname,
			content,
			className,
			textClassName,
			labelClassName,
			disabled,
			...props
		},
		ref
	) => {
		return (
			<View ref={ref} className={cn("flex gap-y-3", className)} {...props}>
				{labelname && (
					<Text
						className={cn(
							"font-afacad text-muted-foreground text-base",
							labelClassName
						)}
					>
						{labelname}
					</Text>
				)}
				<View className="flex flex-row gap-x-4 items-center">
					{isCheckBox && (
						<Checkbox
							disabled={disabled}
							checked={isChecked}
							onCheckedChange={setCheckBoxValue}
						/>
					)}
					<Text
						className={cn(
							`text-base ${
								disabled ? "text-muted-foreground" : "text-primary"
							} ${isCheckBox ? "font-afacad" : "font-afacad_semibold"}`,
							textClassName
						)}
					>
						{content}
					</Text>
					{isEditable && <IcEdit />}
				</View>
			</View>
		);
	}
);

FieldText.displayName = "FieldText";

export { FieldText };
