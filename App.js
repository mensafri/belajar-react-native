import { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	useWindowDimensions,
} from "react-native";
import Komp from "./Komp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Notif from "./screens/Notif";
import Profil from "./screens/Profil";

const Stack = createNativeStackNavigator();

export default function App() {
	// const [lebar, setLebar] = useState("");
	// const [panjang, setPanjang] = useState("");
	// const [hasil, setHasil] = useState("");
	// const { height: tinggiLayar, width: lebarLayar } = useWindowDimensions();

	// useEffect(() => {
	// 	if (lebar && panjang) {
	// 		const luas = parseFloat(lebar) * parseFloat(panjang);
	// 		setHasil(luas);
	// 	} else {
	// 		setHasil("");
	// 	}
	// }, [lebar, panjang]);

	// console.log(lebarLayar, tinggiLayar);

	// return (
	// 	<View style={styles.container}>
	// 		<View style={styles.inputContainer}>
	// 			<Text>Lebar</Text>
	// 			<TextInput
	// 				style={styles.input}
	// 				onChangeText={(res) => setLebar(res)}
	// 				value={lebar}
	// 				keyboardType="numeric"
	// 			/>
	// 		</View>
	// 		<View style={styles.inputContainer}>
	// 			<Text>Panjang</Text>
	// 			<TextInput
	// 				style={styles.input}
	// 				onChangeText={(res) => setPanjang(res)}
	// 				value={panjang}
	// 				keyboardType="numeric"
	// 			/>
	// 		</View>
	// 		<Text>Luas {hasil} </Text>
	// 		<View
	// 			style={{
	// 				backgroundColor: "black",
	// 				width: lebarLayar / 3,
	// 				height: tinggiLayar / 2,
	// 			}}></View>
	// 			<Komp/>
	// 	</View>
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
				/>
				<Stack.Screen
					name="Profil"
					component={Profil}
				/>
				<Stack.Screen
					name="Notif"
					component={Notif}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	teks: {
		color: "#ee510e",
	},
});
