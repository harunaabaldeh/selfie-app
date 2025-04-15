import { Link } from 'expo-router';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

// themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useUser()

    const handleSubmit = async () => {
        try {
            await login(email, password);
        } catch (error) {

        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>

                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Login to Your Account
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
                    <Text style={{ color: "#f2f2f2" }}>Login</Text>
                </ThemedButton>

                <Spacer height={100} />
                <Link href="/register">
                    <ThemedText style={{ textAlign: 'center' }}>
                        Don't have an account? Register
                    </ThemedText>
                </Link>

            </ThemedView>
        </TouchableWithoutFeedback>
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