import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!response.ok) {
    throw new Error("An error occoured while fetching the books");
  }
  const books: Book[] = await response.json();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto mb-10">
      {books.map((book) => (
        <div key={book._id}>
          <h1>{book.title}</h1>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
