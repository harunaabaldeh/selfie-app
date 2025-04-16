import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ThemedView from "../../components/ThemedView";
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import Spacer from '../../components/Spacer';
import { useState } from 'react';
import { useBooks } from '../../hooks/useBooks';
import { useRouter } from 'expo-router';

const Create = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLaoding] = useState(false);

    const { createBook } = useBooks();
    const router = useRouter();

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim())
            return;

        setLaoding(true);

        await createBook({ title, author, description });

        // reset form
        setTitle("");
        setAuthor("");
        setDescription("");

        // redirect user to books page
        router.replace("/books");

        // set loading to false
        setLaoding(false);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ThemedText title={true} style={styles.heading}>
                    Add a New Book
                </ThemedText>
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Boook Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Author"
                    value={author}
                    onChangeText={setAuthor}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.multiline}
                    placeholder="Book Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                />
                <Spacer />

                <ThemedButton onPress={handleSubmit} disable={loading}>
                    <Text style={{ color: "#fff" }}>
                        {loading ? "Saving..." : "Create Book"}
                    </Text>
                </ThemedButton>

            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Create;

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
    },
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: "stretch",
        marginHorizontal: 40
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: "stretch",
        marginHorizontal: 40
    }
})