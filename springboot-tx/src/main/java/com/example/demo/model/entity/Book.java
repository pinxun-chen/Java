package com.example.demo.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 書籍
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Book {
	@Id
	private Integer id;
	private String bookName;
	private Integer bookPrice;
}
