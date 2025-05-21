package com.example.demo.model.entity;

import lombok.Data;

@Data
public class User {  // 根據資料庫的資料表來設
	private Integer id;
	private String username;
	private String hashPassword;
	private String hashSalt;
	private String email;
	private Boolean completed;
}