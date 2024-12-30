import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";
import { cn } from "~/lib/utils";
import { Text } from "../text";

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {
	type?: string;
};

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
	({ type, className, placeholderClassName, ...props }, ref) => {
		return (
			<>
				<Text className={cn(className)}>{type}</Text>
				<TextInput
					ref={ref}
					className={cn(
						"font-afacad web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
						props.editable === false && "opacity-50 web:cursor-not-allowed",
						className
					)}
					placeholderClassName={cn(
						"font-afacad text-muted-foreground",
						placeholderClassName
					)}
					{...props}
				/>
			</>
		);
	}
);

Input.displayName = "Input";

export { Input };
