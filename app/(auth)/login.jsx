import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';

const Login = () => {

    const handleSubmit = () => {
        console.log("login form submitted")
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to Your Account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: "#f2f2f2" }}>Login</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>
                    Don't have an account? Register
                </ThemedText>
            </Link>

        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    }
})