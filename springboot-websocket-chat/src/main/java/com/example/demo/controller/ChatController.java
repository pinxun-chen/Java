package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.example.demo.entity.ChatMessage;

// 處理 WebSocket 聊天訊息:支援多聊天室，根據 roomId 可以廣播到不同聊天室
@Controller
public class ChatController {

	@Autowired
	private SimpMessagingTemplate messagingTemplate;
	
	/**
	 * 處理來自 "/app/chat/{roomId}" 的訊息, 並將訊息廣播到 "/topic/messages/{roomId}"
	 * @param roomId 聊天室 Id
	 * @param chatMessage 聊天訊息
	 * */
	@MessageMapping("/chat/{roomId}")
	public void send(@DestinationVariable String roomId, ChatMessage chatMessage) {
		messagingTemplate.convertAndSend("/topic/message/" + roomId, chatMessage);
	}
	
	/**
	 * 處理來自 "/app/broadcast" 的訊息, 並將訊息廣播到 "/topic/broadcast" (所有聊天室)
	 * @param chatMessage 聊天訊息
	 * */
	public void broadcast(ChatMessage chatMessage) {
		messagingTemplate.convertAndSend("/topic/broadcast", chatMessage);
	}
}
