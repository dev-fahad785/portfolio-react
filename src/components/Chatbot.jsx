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
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center mr-2 shrink-0">
                    {/* <FaRobot className="text-white text-xs sm:text-base" /> */}
                            <img
                            src="/images/me-1.jpg"
                            alt="rf gul "
                            className="object-cover w-full h-full  rounded-full"
                        />
                </div>
            )}
            <div
        className={`px-3 py-2 sm:px-4 sm:py-2 rounded-xl max-w-[75%] sm:max-w-[70%] text-xs sm:text-sm break-words ${
            message.sender === "user"
        ? "bg-gray-700 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
            >
                {message.sender === 'bot' ? (
                    <ReactMarkdown
                        components={{
                            a: ({ ...props }) => (
                                <a {...props} className="font-semibold text-blue-600 underline" />
                            ),
                            strong: ({ ...props }) => (
                                <strong {...props} className="font-semibold" />
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
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-700 flex items-center justify-center ml-2 shrink-0">
                    <FaUser className="text-white text-xs sm:text-base" />
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
        <div className="flex items-start mb-3 justify-start text-xs sm:text-sm animate-fadeIn">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center mr-3 shrink-0">
                {/* <FaRobot className="text-white text-xs sm:text-base" /> */}
                                            <img
                            src="/images/me-1.jpg"
                            alt="rf gul "
                            className="object-cover w-full h-full  rounded-full"
                        />
            </div>

            <div className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl max-w-[70%] bg-gray-200 text-gray-800 text-xs sm:text-sm break-words rounded-bl-none flex items-center">
                <div className="flex items-center"></div>
                    <div className="flex space-x-1 mr-3">
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.12s' }} />
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.24s' }} />
                    </div>
                    <span className="italic text-gray-600">Typing...</span>
                </div>
            </div>
        
    );

    return (
        <>
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                @media (max-width: 640px) {
                    .chatbot-mobile-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        z-index: 9999;
                    }
                }
            `}</style>

            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
                {isOpen && (
                    // Mobile backdrop
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={() => setIsOpen(false)} />
                )}
                
                {isOpen ? (
                    <div className="
                        w-full h-screen sm:w-80 md:w-96 sm:h-[36rem] md:h-[40rem] lg:h-[38rem]
                        fixed sm:relative
                        top-0 left-0 sm:top-auto sm:left-auto
                        bg-white shadow-2xl 
                        rounded-none sm:rounded-2xl 
                        border-0 sm:border border-gray-200 
                        flex flex-col overflow-hidden animate-fadeIn
                        z-50
                    ">
                        {/* Header */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-gray-700 to-gray-500 text-white px-4 sm:px-6 py-4 sm:py-4 rounded-none sm:rounded-t-2xl">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <div>
                                    <h2 className="font-bold text-base sm:text-lg">RF-GUL&apos;s Chatbot</h2>
                                    <p className="text-xs opacity-90">Online • Ready to help</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 sm:p-2 hover:bg-white/20 rounded-full transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
                                aria-label="Close chatbot"
                            >
                                <FiX className="text-lg sm:text-xl" />
                            </button>
                        </div>

                        {/* Welcome Message */}
                        {messages.length === 0 && (
                            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-100">
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full flex items-center justify-center">
                                        <FaRobot className="text-white text-xs sm:text-base" />
                                    </div>
                                    <span className="font-semibold text-sm sm:text-base text-gray-800">Welcome!</span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    I am here to help you with information about our services, courses, location, office
                                    hours, and more. How can I assist you today?
                                </p>
                            </div>
                        )}

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-br from-gray-50 to-gray-100/40 scrollbar-hide">
                            {messages.map((message) => (
                                <MessageBubble key={message.id} message={message} />
                            ))}
                            {isTyping && <TypingIndicator />}
                            <div ref={bottomRef} />
                        </div>

                        {showSuggestions && (
                            <SuggestionChips
                                suggestions={chatbotSuggestions}
                                onSelect={handleSuggestionSelect}
                                disabled={isTyping}
                                resetTrigger={messages.length}
                                onClose={() => setShowSuggestions(false)}
                            />
                        )}

                        {/* Input Field */}
                        <div className="border-t border-gray-200 p-3 sm:p-4 bg-white rounded-none sm:rounded-b-2xl safe-area-inset-bottom">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={userQuery}
                                    onChange={(e) => setUserQuery(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message here..."
                                    disabled={isTyping}
                                    className="flex-1 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[40px] sm:min-h-[48px]"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!userQuery.trim() || isTyping}
                                    className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 disabled:from-gray-300 disabled:to-gray-400 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-60 transform hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:active:scale-100 disabled:shadow-none min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center"
                                >
                                    <FiSend className="text-base sm:text-xl" />
                                </button>
                            </div>
                            {!showSuggestions && (
                                <div className="mt-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowSuggestions(true)}
                                        className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-2.5 border border-dashed border-gray-400 text-gray-600 text-xs sm:text-sm rounded-full hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        Show suggested questions
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] flex items-center justify-center"
                        aria-label="Open chatbot"
                    >
                        <FaRobot className="text-xl sm:text-2xl" />
                    </button>
                )}
            </div>
        </>
    );
};

export default ChatBot;
