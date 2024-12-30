import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IcEdit(props: any) {
	return (
		<Svg
			width={13}
			height={13}
			viewBox="0 0 13 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M2.083 11.167h.95L9.55 4.65 8.6 3.7l-6.517 6.517v.95zM.75 12.5V9.667L9.55.883c.133-.122.28-.216.442-.283a1.38 1.38 0 011.025 0c.166.067.31.167.433.3l.917.933c.133.123.23.267.291.434a1.444 1.444 0 010 1.008 1.25 1.25 0 01-.291.442L3.583 12.5H.75zm8.317-8.317L8.6 3.7l.95.95-.483-.467z"
				fill="#313678"
			/>
		</Svg>
	);
}

export default IcEdit;
