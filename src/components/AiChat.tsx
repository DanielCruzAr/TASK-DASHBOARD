"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const AiChat = () => {
    const [messages, setMessages] = useState([
        { sender: "AI", content: "Hello! How can I assist you today?" },
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;

        // Add user message
        const userMessage = { sender: "User", content: inputValue };
        setMessages([...messages, userMessage]);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                sender: "AI",
                content: `You said: "${inputValue}"`,
            };
            setMessages((prevMessages) => [...prevMessages, aiResponse]);
        }, 1000);

        // Clear input field
        setInputValue("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>AI Chat</CardTitle>
            </CardHeader>
            <CardContent className="h-64 flex flex-col space-y-4 overflow-y-auto">
                <div className="flex flex-col space-y-2">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                message.sender === "AI"
                                    ? "justify-start"
                                    : "justify-end"
                            }`}
                        >
                            <div
                                className={`px-4 py-2 rounded-lg text-white ${
                                    message.sender === "AI"
                                        ? "bg-gray-700"
                                        : "bg-blue-500"
                                }`}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <div className="flex items-center p-4 space-x-2 border-t border-gray-200">
                <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className="flex-1"
                />
                <Button size="icon" onClick={handleSendMessage} className="rounded-full">
                    <PaperAirplaneIcon className="h-5 w-5" />
                </Button>
            </div>
        </Card>
    );
};

export default AiChat;
