import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { cn } from "~/lib/utils";

function IcArrowRight(props: any) {
	return (
		<Svg
			width={7}
			height={12}
			viewBox="0 0 7 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={(cn("w-2 h-3"), props.className)}
			{...props}
		>
			<Path
				d="M1 1l5 5-5 5"
				stroke="#313678"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default IcArrowRight;
