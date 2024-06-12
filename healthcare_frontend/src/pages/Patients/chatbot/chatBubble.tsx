import React, { useState, useRef, useEffect } from 'react';
import { BsRobot } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import logo from '../../../assets/images/logos/logowhiteleaf.png';

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ botId: number, patientQuestion: string, chatbotAnswer: string, time: string }[]>([
    { botId: 1, patientQuestion: '', chatbotAnswer: 'How can I be of service?', time: new Date().toLocaleTimeString() }
  ]);
  const [userInput, setUserInput] = useState('');
  const chatBubbleRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessage = { botId: 0, patientQuestion: userInput, chatbotAnswer: '', time: new Date().toLocaleTimeString() };
      setMessages([...messages, newMessage]);
      setUserInput('');
      setIsTyping(true);
      setTimeout(() => {
        const botResponse = 'This is a bot response';
        setMessages(messages => [...messages, { botId: 1, patientQuestion: '', chatbotAnswer: botResponse, time: new Date().toLocaleTimeString() }]);
        setIsTyping(false);
      }, 2000); // simulate typing delay
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (chatBubbleRef.current && !chatBubbleRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed z-50 bottom-4 right-4" ref={chatBubbleRef}>
      {isOpen ? (
        <div className="w-96 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex items-center justify-between p-4 bg-blue-700 border-blue-300 text-white rounded-t-lg">
            <span>
              <img src={logo} className="h- w-24" alt="UNICARE" />
            </span>
            AI Chat Bot
            <BsRobot className="h-7 w-7" />
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.botId === 1 ? 'flex items-end gap-2' : 'flex items-end flex-row-reverse gap-2'}`}>
                {msg.botId === 1 && (
                  <img className="size-8 rounded-full object-cover" src={logo} alt="botavatar" />
                )}
                <div className={`flex max-w-[70%] flex-col gap-2 rounded${msg.botId === 1 ? 
                '-r-xl rounded-tl-xl bg-slate-100 text-black' : 
                '-l-xl rounded-tr-xl bg-blue-700 text-white'} 
                p-4 text-sm md:max-w-[60%]`}>
                  {msg.botId === 1 ? msg.chatbotAnswer : msg.patientQuestion}
                  <span className="ml-auto text-xs">{msg.time}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-end gap-2">
                <div className="size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-slate-300"></div>
                <div className="size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_0.5s_ease-in-out_infinite] dark:bg-slate-300"></div>
                <div className="size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-slate-300"></div>
              </div>
            )}
          </div>
          <div className="p-2 border-t border-gray-300 flex">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              className="ml-2 p-2 bg-blue-700 text-white rounded"
              onClick={handleSendMessage}
            >
              <IoMdSend className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="p-4 bg-blue-700 text-white rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <HiMiniChatBubbleBottomCenterText className="h-7 w-7" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default ChatBubble;
