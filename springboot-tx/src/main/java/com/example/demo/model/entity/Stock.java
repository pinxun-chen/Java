package com.example.demo.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 庫存
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Stock {
	@Id
	private Integer bookId; // 與書本的 bookId 對應
	private Integer bookAmount; // 庫存數量
}
