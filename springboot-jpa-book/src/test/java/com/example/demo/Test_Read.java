package com.example.demo;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.entity.Author;
import com.example.demo.repository.AuthorRepository;
import com.example.demo.repository.BookRepository;

@SpringBootTest
public class Test_Read {
	
	@Autowired
	private AuthorRepository authorRepository;
	
	@Autowired
	private BookRepository bookRepository;

	@Test
	// @Transactional
	public void read() {
		// 查詢作者
		List<Author> authors = authorRepository.findAll();
		authors.forEach(author ->{
			System.out.printf("ID:%d 姓名:%s %n", author.getId(), author.getName());
		});
		
		// 查詢作者與書籍
		List<Author> authors2 = authorRepository.findAllWithBooks();
		authors2.forEach(author ->{
			System.out.printf("ID:%d 姓名:%s 著作數量:%d%n", author.getId(), author.getName(), author.getBooks().size());
		});
	}
}
