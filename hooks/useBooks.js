import { useContext } from "react";
import { BooksContext } from "../contexts/BooksConext";

export function useBooks() {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("useBooks must be use within a BooksProvider")
    }

    return context;
}