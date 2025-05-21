package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Book;

public interface BookRepository {
	public List<Book> findAllBooks();
	public Optional<Book> getBookById(Integer id);
	public boolean addBook(Book book);
	public boolean updateBook(Integer id, Book book);
	public boolean deleteBook(Integer id);
}