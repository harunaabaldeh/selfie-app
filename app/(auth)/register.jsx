import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from 'expo-router';
import ThemedButton from '../../components/ThemedButton';

const Register = () => {

    const handleSubmit = () => {
        console.log("register form submitted success")
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register Your Account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: "#f2f2f2" }}>Register</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/login">
                <ThemedText style={{ textAlign: 'center' }}>
                    Already have an account? Login
                </ThemedText>
            </Link>

        </ThemedView>
    )
}

export default Register

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
})