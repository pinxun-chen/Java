package com.example.demo.controller;

import com.example.demo.model.dto.UserDto;
import com.example.demo.response.ApiResponse;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // 註冊
    @PostMapping("/register")
    public ResponseEntity<ApiResponse<Void>> register(
            @RequestParam String username,
            @RequestParam String password,
            @RequestParam String email) {

        boolean success = userService.register(username, password, email);
        if (success) {
            return ResponseEntity.ok(ApiResponse.success("註冊成功", null));
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(ApiResponse.error(400, "帳號或信箱已存在"));
        }
    }

    // 登入
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<?>> login(
            @RequestParam String username,
            @RequestParam String password) {

        UserDto userDto = userService.login(username, password);
        if (userDto != null) {
            return ResponseEntity.ok(ApiResponse.success("登入成功", userDto));
        } else {
            return ResponseEntity
                    .status(401)
                    .body(ApiResponse.error(401, "登入失敗：帳號或密碼錯誤"));
        }
    }

    // 依 ID 查詢使用者
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<?>> getUserById(@PathVariable Integer id) {
        Optional<UserDto> userOpt = userService.getUserById(id);
        if (userOpt.isPresent()) {
            return ResponseEntity.ok(ApiResponse.success("查詢成功", userOpt.get()));
        } else {
            return ResponseEntity
                    .status(404)
                    .body(ApiResponse.error(404, "找不到使用者"));
        }
    }

    // 依帳號查詢使用者
    @GetMapping("/username/{username}")
    public ResponseEntity<ApiResponse<?>> getUserByUsername(@PathVariable String username) {
        Optional<UserDto> userOpt = userService.getUserByUsername(username);
        if (userOpt.isPresent()) {
            return ResponseEntity.ok(ApiResponse.success("查詢成功", userOpt.get()));
        } else {
            return ResponseEntity
                    .status(404)
                    .body(ApiResponse.error(404, "找不到使用者"));
        }
    }
}

