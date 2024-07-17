import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { DatePicker } from "react-native-woodpicker";

export default function Home() {
	const navigation = useNavigation();
	const [nama, setNama] = useState("");
	const [kode, setKode] = useState("");
	const [harga, setHarga] = useState(0);
	const [satuan, setSatuan] = useState("");
	const [tanggal, setTanggal] = useState(new Date());
	const [stok, setStok] = useState();

	function keStok() {
		navigation.navigate("Stok");
	}

	function formatTanggalYMDHIS(date) {
		const pad = (num) => (num < 10 ? "0" : "") + num;
		return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
			date.getDate(),
		)} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
			date.getSeconds(),
		)}`;
	}

	async function onSendHandler() {
		let formData = new FormData();
		formData.append("tnama", nama);
		formData.append("tkode", kode);
		formData.append("thrgjual", harga);
		formData.append("tsatuan", satuan);
		formData.append("tstok", stok);
		formData.append("ttgl", formatTanggalYMDHIS(tanggal));

		console.log(formData);

		try {
			const response = await axios.post(
				"http://192.168.100.110/DSAKUphp/insert.php",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);

			console.log("Server Response:", response.data);

			if (response.status === 200) {
				Alert.alert(
					"Sukses",
					`Data Berhasil Disimpan: ${JSON.stringify(response.data)}`,
				);
			} else {
				throw new Error(
					`Gagal menyimpan data: ${JSON.stringify(response.data)}`,
				);
			}
		} catch (error) {
			Alert.alert("Gagal", `Terjadi kesalahan: ${error.message}`);
		}
	}

	const formatTanggalIndonesia = (date) => {
		return new Intl.DateTimeFormat("id-ID", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	};

	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button
				title="Ke Stok"
				onPress={keStok}
			/>
			<View style={styles.inputContainer}>
				<Text>Kode</Text>
				<TextInput
					style={styles.inputText}
					value={kode}
					onChangeText={(text) => setKode(text)}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text>Nama</Text>
				<TextInput
					style={styles.inputText}
					value={nama}
					onChangeText={(text) => setNama(text)}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text>Harga</Text>
				<TextInput
					style={styles.inputText}
					value={harga}
					onChangeText={(text) => setHarga(text)}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text>Satuan</Text>
				<TextInput
					style={styles.inputText}
					value={satuan}
					onChangeText={(text) => setSatuan(text)}
				/>
			</View>
			<View>
				<DatePicker
					value={tanggal}
					onDateChange={setTanggal}
					title="Date Picker"
					text="Pilih Tanggal"
				/>
				<Text>{tanggal.toISOString().split("T")[0]}</Text>

				<Text>Tanggal: {formatTanggalIndonesia(tanggal)}</Text>
			</View>
			<View style={styles.inputContainer}>
				<Text>Stok</Text>
				<TextInput
					style={styles.inputText}
					value={stok}
					onChangeText={(text) => setStok(text)}
				/>
			</View>
			<Button
				title="Simpan"
				onPress={onSendHandler}
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
		gap: 15,
	},
	inputContainer: {
		flexDirection: "row",
		backgroundColor: "cyan",
		gap: 15,
	},
	inputText: {
		backgroundColor: "red",
		minWidth: 200,
	},
});
