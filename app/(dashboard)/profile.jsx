import { StyleSheet, Text } from 'react-native'
import { useUser } from '../../hooks/useUser';

// themed
import ThemedView from "../../components/ThemedView";
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import Spacer from '../../components/Spacer';


const Profile = () => {

    const { logout, user } = useUser();

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.heading}>
                {user.email}
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books....</ThemedText>
            <Spacer />

            <ThemedButton onPress={logout} >
                <Text style={{ color: "#f2f2f2" }}>Logout</Text>
            </ThemedButton>

        </ThemedView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
})