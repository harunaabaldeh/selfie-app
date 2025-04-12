import { Link } from 'expo-router'
import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
            <ThemedText style={styles.title}>About Sirayel Technlogies</ThemedText>
            <Link href="/" style={styles.link}>
                <ThemedText>Back to Home</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default About;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})