package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;

// 負責啟用 STOMP 協定並設定路由規則
@Configuration
@EnableWebSocketMessageBroker // 啟用 STOMP WebSocket 支援
public class WebSocketConfig {

}
