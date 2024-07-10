import axios from "axios";
import { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";

export default function Stok() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			const response = await axios.get(
				"http://192.168.100.110/DSAKUphp/stok.php",
			);
			setData(response.data);
			setLoading(false);
		}

		getData();
	}, []);

	// console.log(data);
	const formatRupiah = (number) => {
		return number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	};

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" />
				<Text>Masih LOading.....</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View>
				<Button title="Ke Home" />
			</View>
			<View style={styles.header}>
				<Text style={styles.headerText}>Nama</Text>
				<Text style={styles.headerText}>Kode</Text>
				<Text style={styles.headerText}>Harga</Text>
				<Text style={styles.headerText}>Satuan</Text>
				<Text style={styles.headerText}>Gambar</Text>
			</View>
			<ScrollView>
				{data?.map((item, index) => (
					<View
						key={item.kode}
						style={index % 2 === 0 ? styles.item1 : styles.item2}>
						<Text style={styles.itemText}>{item.nama}</Text>
						<Text style={styles.itemText}>{item.kode}</Text>
						<Text style={styles.itemText}>
							{formatRupiah(item.harga != null ? item.harga : 0)}
						</Text>
						<Text style={styles.itemText}>{item.satuan}</Text>
						<Image
							width={100}
							height={100}
							source={{
								uri: `http://192.168.100.110/DSAKUphp/IMAGE/produk/${item.kode}.JPG`,
							}}
						/>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		marginTop: 10,
	},
	header: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		paddingBottom: 8,
		marginBottom: 8,
	},
	headerText: {
		flex: 1,
		fontWeight: "bold",
		textAlign: "center",
	},
	item1: {
		flexDirection: "row",
		paddingVertical: 8,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
		backgroundColor: "",
	},
	item2: {
		flexDirection: "row",
		paddingVertical: 8,
		borderBottomWidth: 1,
		borderBottomColor: "#eee",
		backgroundColor: "#c2fbd7",
	},
	itemText: {
		flex: 1,
		textAlign: "center",
	},
});
