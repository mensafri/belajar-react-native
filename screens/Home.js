import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
	const navigation = useNavigation();

	function keNotif() {
		navigation.replace("Notif");
	}

	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button
				title="Ke Notif"
				onPress={keNotif}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
