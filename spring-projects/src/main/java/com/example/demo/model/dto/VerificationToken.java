package com.example.demo.model.dto;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

import com.example.demo.model.entity.User;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VerificationToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String token;

    @OneToOne
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    private LocalDateTime expiryDate;
}
