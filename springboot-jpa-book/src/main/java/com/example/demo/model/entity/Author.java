package com.example.demo.model.entity;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Author {

	private Integer id;
	
	private String name;
}
