import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import { useBooks } from '../../../hooks/useBooks'


// themed imports
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import ThemedText from "../../../components/ThemedText";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";

const MoreDetails = () => {
    const [book, setBook] = useState(null);

    const { id } = useLocalSearchParams();
    const { fetchBookById } = useBooks();

    useEffect(() => {
        async function loadBook(id) {
            const bookData = await fetchBookById(id);
            setBook(bookData);
        }

        loadBook(id);
    }, [id])

    if (!book) {
        return (
            <ThemedView safe={true} styles={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} styles={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book Discription:</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>
        </ThemedView>
    )
}

export default MoreDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        margin: 20
    }
})