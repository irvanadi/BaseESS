import { Link, Stack, usePathname, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";

export default function NotFoundScreen() {
	const router = useRouter();

	const pathname = usePathname();

	return (
		<SafeAreaView>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View>
				<Text>This screen doesn't exist.</Text>

				<Link href="/">
					<Text>Go to home screen!</Text>
					<Text>{pathname}</Text>
				</Link>
			</View>
		</SafeAreaView>
	);
}
