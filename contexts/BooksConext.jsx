import { createContext, useEffect, useState } from "react";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import { databases, client } from "../lib/appwrite";

const DATABASE_ID = "67ff691c003838e8ea48";
const COLLECTION_ID = "67ff69250024b40ac530";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const { user } = useUser();

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.equal("userId", user.$id)]
            );

            setBooks(response.documents);
            console.log(response.documents);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    async function fetchBookById(id) {
        try {
            const response = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            );

            return response;
        } catch (error) {
            console.error("Error fetching book by ID:", error);
        }
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, userId: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    // Permission.write(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            );
        } catch (error) {
            console.error("Error creating book:", error);
        }
    }

    async function deleteBook(id) {
        try {
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    }

    useEffect(() => {
        let unsubscribe;
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

        if (user) {
            fetchBooks();

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response;

                if (events[0].includes('create')) {
                    setBooks((prevBooks) => [...prevBooks, payload]);
                }
            })
        } else {
            setBooks([]);
        }

        return () => {
            if (unsubscribe)
                unsubscribe();
        }

    }, [user]);

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    );
}
