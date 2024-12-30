import type { TextRef, ViewRef } from "@rn-primitives/types";
import * as React from "react";
import { TextProps, View, ViewProps } from "react-native";
import { Text, TextClassContext } from "~/components/ui/text";
import { cn } from "~/lib/utils";

const StyledCard = React.forwardRef<ViewRef, ViewProps>(
	({ className, ...props }, ref) => (
		<View
			ref={ref}
			className={cn(
				"rounded-lg border border-border_card bg-card shadow-sm shadow-foreground/10",
				className
			)}
			{...props}
		/>
	)
);
StyledCard.displayName = "Card";

const StyledCardHeader = React.forwardRef<ViewRef, ViewProps>(
	({ className, ...props }, ref) => (
		<View
			ref={ref}
			className={cn(
				"px-6 pb-2 py-2 rounded-t-lg rounded-tl-lg rounded-tr-lg bg-background",
				className
			)}
			{...props}
		/>
	)
);
StyledCardHeader.displayName = "CardHeader";

const StyledCardTitle = React.forwardRef<
	TextRef,
	React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
	<Text
		role="heading"
		aria-level={3}
		ref={ref}
		className={cn("font-afacad_semibold", className)}
		{...props}
	/>
));
StyledCardTitle.displayName = "CardTitle";

const StyledCardDescription = React.forwardRef<TextRef, TextProps>(
	({ className, ...props }, ref) => (
		<Text
			ref={ref}
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		/>
	)
);
StyledCardDescription.displayName = "CardDescription";

const StyledCardContent = React.forwardRef<ViewRef, ViewProps>(
	({ className, ...props }, ref) => (
		<TextClassContext.Provider value="text-card-foreground">
			<View ref={ref} className={cn("p-2", className)} {...props} />
		</TextClassContext.Provider>
	)
);
StyledCardContent.displayName = "CardContent";

const StyledCardFooter = React.forwardRef<ViewRef, ViewProps>(
	({ className, ...props }, ref) => (
		<View
			ref={ref}
			className={cn("flex flex-row items-center p-6 pt-0", className)}
			{...props}
		/>
	)
);
StyledCardFooter.displayName = "CardFooter";

export {
	StyledCard,
	StyledCardContent,
	StyledCardDescription,
	StyledCardFooter,
	StyledCardHeader,
	StyledCardTitle,
};
