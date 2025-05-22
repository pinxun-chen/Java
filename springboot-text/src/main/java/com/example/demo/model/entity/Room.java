package com.example.demo.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "text")
public class Room {

	@Id
	@Column(name = "room_id")
	private Integer roomId;
	
	@Column(name = "room_name", nullable = false, unique = true)
	private String roomName;
	
	@Column(name = "room_size", columnDefinition = "integer default 0")
	private Integer roomSize;
}
