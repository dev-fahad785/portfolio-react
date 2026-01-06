
import { useRef, useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { FiSend, FiX } from "react-icons/fi";
import { FaRobot, FaUser } from "react-icons/fa";
import PropTypes from 'prop-types';
import SuggestionChips from "./SuggestionChips";
import chatbotSuggestions from "./chatbotSuggestions";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userQuery, setUserQuery] = useState("");
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const handleSend = async (presetQuery) => {
        const sourceText = typeof presetQuery === "string" ? presetQuery : userQuery;
        const messageText = sourceText.trim();
        if (!messageText) return;

        const userMsg = {
            id: Date.now(),
            sender: "user",
            text: messageText,
        };

        setMessages((prev) => [...prev, userMsg]);
        setUserQuery('');
        setIsTyping(true);

        try {
            const response = await fetch('https://chatbot-backend-virid-ten.vercel.app/api/pattern-match', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: messageText }),
            });

            const data = await response.json();

            setTimeout(() => {
                const botMsg = {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: data.answer || "I am sorry, I could not process your request. Please try again.",
                };
                setMessages((prev) => [...prev, botMsg]);
                setIsTyping(false);
            }, 1000 + Math.random() * 1000);

        } catch (error) {
            console.error('Error:', error);
            setTimeout(() => {
                const errorMsg = {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: "Sorry, I am having trouble connecting right now. Please try again later.",
                };
                setMessages((prev) => [...prev, errorMsg]);
                setIsTyping(false);
            }, 1000);
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSend();
    };

    const handleSuggestionSelect = (prompt) => {
        handleSend(prompt);
    };

    const MessageBubble = ({ message }) => (
        <div className={`flex items-start mb-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center mr-2 shrink-0">
                    <span className="text-white dark:text-black font-bold text-xs">RF</span>
                </div>
            )}
            <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm break-words shadow-sm ${message.sender === "user"
                        ? "bg-black dark:bg-white text-white dark:text-black rounded-br-none"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-700"
                    }`}
            >
                {message.sender === 'bot' ? (
                    <ReactMarkdown
                        components={{
                            a: ({ ...props }) => (
                                <a {...props} className="font-semibold text-blue-600 dark:text-blue-400 underline" />
                            ),
                            strong: ({ ...props }) => (
                                <strong {...props} className="font-semibold" />
                            ),
                            p: ({ ...props }) => (
                                <p {...props} className="leading-relaxed" />
                            ),
                        }}
                    >
                        {message.text}
                    </ReactMarkdown>
                ) : (
                    message.text
                )}
            </div>
            {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center ml-2 shrink-0">
                    <FaUser className="text-gray-500 dark:text-gray-400 text-xs" />
                </div>
            )}
        </div>
    );

    MessageBubble.propTypes = {
        message: PropTypes.shape({
            sender: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    };

    const TypingIndicator = () => (
        <div className="flex items-start mb-3 justify-start text-sm animate-fadeIn">
             <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center mr-2 shrink-0">
                    <span className="text-white dark:text-black font-bold text-xs">RF</span>
                </div>

            <div className="px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none flex items-center shadow-sm">
                <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.12s' }} />
                    <span className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.24s' }} />
                </div>
            </div>
        </div>

    );

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60]">
            {isOpen && (
                // Mobile backdrop
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden" onClick={() => setIsOpen(false)} />
            )}

            {isOpen ? (
                <div className="
                        w-full h-screen sm:w-[360px] sm:h-[600px]
                        fixed sm:relative
                        top-0 left-0 sm:top-auto sm:left-auto
                        bg-white dark:bg-gray-900 shadow-2xl 
                        sm:rounded-2xl 
                        flex flex-col overflow-hidden animate-fadeIn
                        border border-gray-200 dark:border-gray-800
                        z-50
                    ">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-black dark:bg-gray-800 text-white px-4 py-3 sm:rounded-t-2xl">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                     <FaRobot className="text-white" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></span>
                            </div>
                            <div>
                                <h2 className="font-bold text-sm">RF-GUL Assistant</h2>
                                <p className="text-[10px] text-gray-300">Typically replies instantly</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Close chatbot"
                        >
                            <FiX className="text-lg" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50 dark:bg-gray-950 scrollbar-hide">
                         {messages.length === 0 && (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <FaRobot className="text-2xl text-gray-400 dark:text-gray-500" />
                                </div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">Hi there! 👋</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    I am here to help you navigate my portfolio. specific. Ask me anything!
                                </p>
                            </div>
                        )}
                        
                        {messages.map((message) => (
                            <MessageBubble key={message.id} message={message} />
                        ))}
                        {isTyping && <TypingIndicator />}
                        <div ref={bottomRef} />
                    </div>

                    {/* Suggestions */}
                    {showSuggestions && (
                        <div className="px-2 pb-2 bg-gray-50 dark:bg-gray-950">
                             <SuggestionChips
                                suggestions={chatbotSuggestions}
                                onSelect={handleSuggestionSelect}
                                disabled={isTyping}
                                resetTrigger={messages.length}
                                onClose={() => setShowSuggestions(false)}
                            />
                        </div>
                    )}

                    {/* Input Field */}
                    <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 sm:rounded-b-2xl">
                        <div className="flex items-center space-x-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={userQuery}
                                onChange={(e) => setUserQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type a message..."
                                disabled={isTyping}
                                className="flex-1 px-4 py-2.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border-none rounded-full focus:outline-none focus:ring-1 focus:ring-black/10 dark:focus:ring-white/20 transition-all placeholder:text-gray-400"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!userQuery.trim() || isTyping}
                                className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <FiSend className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="group flex items-center justify-center w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
                    aria-label="Open chatbot"
                >
                    <FaRobot className="text-2xl group-hover:rotate-12 transition-transform" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </button>
            )}
        </div>
    );
};

export default ChatBot;
