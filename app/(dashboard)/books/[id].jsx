import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useBooks } from '../../../hooks/useBooks'


// themed imports
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import ThemedText from "../../../components/ThemedText";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from '../../../constants/Colors';

const MoreDetails = () => {
    const [book, setBook] = useState(null);

    const { id } = useLocalSearchParams();
    const { fetchBookById, deleteBook } = useBooks();
    const router = useRouter();

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

    const handleDelete = async () => {
        await deleteBook(id);

        setBook(null);
        router.push("/books");
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

            <ThemedButton style={styles.delete} onPress={handleDelete}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Delete Book</Text>
            </ThemedButton>
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
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: "center",
    }
})