package com.example.demo.model.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Book {

	private Integer id;
	
	private String name;
}
