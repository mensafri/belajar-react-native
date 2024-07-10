import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Notif from "./screens/Notif";
import Profil from "./screens/Profil";
import Stok from "./screens/Stok";
import { Button, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Notif"
					component={Notif}
				/>
				<Stack.Screen
					name="Profil"
					component={Profil}
				/>
				<Stack.Screen
					name="Stok"
					component={Stok}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
