import {StyleSheet, View, Text, Image } from "react-native";

import Logo from "../assets/img/logo_light.png"
import { Link } from "expo-router";

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img}/>

            <Text style={styles.title}>Welcome to Sirayel Technologies</Text>
            <Text style={{marginTop:10, marginBottom: 30}}>Reading List App</Text>

            <Link href="/about" style={styles.link}>About Us</Link>
            <Link href="/contact" style={styles.link}>Contact Us</Link>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        marginVertical: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    link:{
        marginVertical: 10,
        borderBottomWidth: 1
    }
})