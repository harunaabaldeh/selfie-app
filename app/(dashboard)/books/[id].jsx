import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router';


// themed imports
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import ThemedText from "../../../components/ThemedText";
import ThemedCard from "../../../components/ThemedCard";

const MoreDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <ThemedView safe={true} styles={styles.container}>
            <ThemedText>Book Details - {id}</ThemedText>
        </ThemedView>
    )
}

export default MoreDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    }
})