"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Send,
  MoreVertical,
  Phone,
  Video,
  Circle,
} from "lucide-react";

export default function ChatPage() {
  // Dummy data
  const contacts = [
    {
      id: 1,
      name: "Josim Hossain",
      lastMessage: "See you at 10 AM tour!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      online: true,
    },
    {
      id: 2,
      name: "Sarah Khan",
      lastMessage: "Thanks for the tour, it was amazing!",
      avatar: "https://randomuser.me/api/portraits/women/40.jpg",
      online: false,
    },
  ];

  const messages = [
    { from: "guide", text: "Hello! Welcome to Dhaka tour 😊", time: "10:00 AM" },
    { from: "user", text: "Hi Josim, really excited to explore!", time: "10:02 AM" },
    { from: "guide", text: "Great! Do you want food stops included?", time: "10:05 AM" },
    { from: "user", text: "Yes please, I love local food 🍲", time: "10:06 AM" },
  ];

  return (
    <div className=" h-screen flex mt-20 border border-slate-500">
      {/* Sidebar */}
      <div className="w-1/4 border-r bg-muted/30 hidden md:flex flex-col">
        <div className="p-4 font-bold text-lg">Chats</div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-3 p-3 hover:bg-muted cursor-pointer border-b"
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={c.avatar} alt={c.name} />
                  <AvatarFallback>{c.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {c.online && (
                  <Circle className="absolute bottom-0 right-0 w-3 h-3 text-green-500 fill-green-500 rounded-full" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {c.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b bg-background shadow-sm">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={contacts[0].avatar} />
              <AvatarFallback>{contacts[0].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{contacts[0].name}</p>
              <p className="text-xs text-green-600">Online</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button size="icon" variant="ghost">
              <Phone className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Video className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-muted/20">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <Card
                className={`px-4 py-2 max-w-xs shadow-sm ${
                  msg.from === "user"
                    ? "bg-primary text-white rounded-br-none"
                    : "bg-background rounded-bl-none"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs opacity-70">{msg.time}</span>
              </Card>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 p-4 border-t bg-background">
          <Input placeholder="Type your message..." className="flex-1" />
          <Button>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
