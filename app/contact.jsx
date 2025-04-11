import { Link } from 'expo-router'
import {View, Text, StyleSheet} from 'react-native'

const Contact = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Contact Sirayel Technlogies</Text>

        <Link href="/" style={styles.link}>Home</Link>
    </View>
  )
}

export default Contact

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
    link:{
        marginVertical: 10,
        borderBottomWidth: 1
    }
})