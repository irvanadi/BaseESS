import * as CheckboxPrimitive from "@rn-primitives/checkbox";
import * as React from "react";
import { Platform } from "react-native";
import { Check } from "~/lib/icons/Check";
import { cn } from "~/lib/utils";

const Checkbox = React.forwardRef<
	CheckboxPrimitive.RootRef,
	CheckboxPrimitive.RootProps
>(({ className, ...props }, ref) => {
	return (
		<CheckboxPrimitive.Root
			ref={ref}
			style={{ width: 14, height: 14 }}
			className={cn(
				"web:peer native:h-[20] native:w-[20] shrink-0 rounded-sm native:rounded border border-primary web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:border-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
				props.checked && "bg-primary",
				className
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				className={cn("items-center justify-center h-full w-full")}
			>
				<Check
					size={12}
					strokeWidth={Platform.OS === "web" ? 2.5 : 3.5}
					className="text-muted"
				/>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
