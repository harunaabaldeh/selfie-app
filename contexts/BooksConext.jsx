import { createContext, useState } from "react";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import { databases } from "../lib/appwrite"

const DATABASE_ID = "67ff691c003838e8ea48";
const COLLECTION_ID = "67ff69250024b40ac530";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const { user } = useUser();

    async function fetchBooks() {
        try {
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }

    async function fetchBookById(id) {
        try {
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

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    );
}
