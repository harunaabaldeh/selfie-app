import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from 'expo-router';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = () => {
        console.log("register form submitted success", email, password)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>

                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Register Your Account
                </ThemedText>

                <ThemedTextInput
                    style={{ width: "80%", marginBottom: 20 }}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />
                <ThemedTextInput
                    style={{ width: "80%", marginBottom: 20 }}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />

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
        </TouchableWithoutFeedback>
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