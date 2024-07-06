import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Notif() {
	return (
		<View style={styles.container}>
			<Text>Notif</Text>
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
