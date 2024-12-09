import React from "react";
import OneByOneMessageChat from "../../Components/Messages/OneByOneMessageChat";
import MessageSendForm from "../../Components/Messages/MessageSendForm";
import MessageUsers from "../../Components/Messages/MessageUsers";

const messages = [
  // Messages from 2024-11-30
  {
    message: "Hello!",
    sender: "user1",
    timestamp: "2024-11-30T10:15:00Z",
    read: false,
  },
  {
    message: "Hi!",
    sender: "user2",
    timestamp: "2024-11-30T10:16:00Z",
    read: false,
  },
  {
    message: "How are you?",
    sender: "user1",
    timestamp: "2024-11-30T10:17:00Z",
    read: true,
  },
  {
    message: "I’m good, thanks. You?",
    sender: "user2",
    timestamp: "2024-11-30T10:18:00Z",
    read: true,
  },
  {
    message: "Doing great!",
    sender: "user1",
    timestamp: "2024-11-30T10:19:00Z",
    read: false,
  },
  {
    message: "That’s awesome to hear!",
    sender: "user2",
    timestamp: "2024-11-30T10:20:00Z",
    read: false,
  },
  {
    message: "What are you up to?",
    sender: "user1",
    timestamp: "2024-11-30T10:21:00Z",
    read: false,
  },
  {
    message: "Just working on a project.",
    sender: "user2",
    timestamp: "2024-11-30T10:22:00Z",
    read: true,
  },
  {
    message: "Sounds interesting!",
    sender: "user1",
    timestamp: "2024-11-30T10:23:00Z",
    read: false,
  },
  {
    message: "Yeah, it’s coming along.",
    sender: "user2",
    timestamp: "2024-11-30T10:24:00Z",
    read: false,
  },
  {
    message: "Let me know if you need help!",
    sender: "user1",
    timestamp: "2024-11-30T10:25:00Z",
    read: false,
  },
  {
    message: "Will do. Thanks!",
    sender: "user2",
    timestamp: "2024-11-30T10:26:00Z",
    read: false,
  },

  // Messages from 2024-11-29
  {
    message: "Good morning!",
    sender: "user1",
    timestamp: "2024-11-29T09:00:00Z",
    read: true,
  },
  {
    message: "Good morning! How’s everything?",
    sender: "user2",
    timestamp: "2024-11-29T09:02:00Z",
    read: true,
  },
  {
    message: "Not bad. Busy with work. You?",
    sender: "user1",
    timestamp: "2024-11-29T09:03:00Z",
    read: false,
  },
  {
    message: "Same here. Just finished a task.",
    sender: "user2",
    timestamp: "2024-11-29T09:05:00Z",
    read: false,
  },
  {
    message: "Sounds like a productive morning!",
    sender: "user1",
    timestamp: "2024-11-29T09:07:00Z",
    read: true,
  },
  {
    message: "Definitely. Got a few more things to tackle.",
    sender: "user2",
    timestamp: "2024-11-29T09:09:00Z",
    read: true,
  },
  {
    message: "Good luck with that!",
    sender: "user1",
    timestamp: "2024-11-29T09:10:00Z",
    read: false,
  },
  {
    message: "Thanks! I’ll need it.",
    sender: "user2",
    timestamp: "2024-11-29T09:12:00Z",
    read: true,
  },
];

const Messages = () => {
  return (
    <div className="p-6 min-h-[83vh] bg-white rounded-lg">
      <div className="grid grid-cols-12 gap-10">
        <MessageUsers className={"col-span-4"} />
        <div className="col-span-8">
          <div className="flex justify-setart items-center gap-2 pb-2 pl-8 shadow-sm border-b border-blue-50">
            <img
              src={
                "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
              }
              alt="user"
              className="h-[55px] w-[55px] rounded-full shadow border border-blue-50"
            />
            <div className="space-y-0.5">
              <p className="font-semibold">Henry Silver</p>
              <p className="max-w-[20ch] truncate text-xs text-hash">
                Active 2 hours ago
              </p>
            </div>
          </div>
          <OneByOneMessageChat messages={messages} className={""} />
          <MessageSendForm />
        </div>
      </div>
    </div>
  );
};

export default Messages;
