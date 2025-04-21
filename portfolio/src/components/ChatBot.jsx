// components/ChatBot.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('fullname')) return "I'm Thirumoorthi Murugesan";
    if (lowerMessage.includes('firstname') || lowerMessage.includes('surname')) return "First name: Thirumoorthi <br/>Surname: Murugesan";
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello')) return "Hello! How can I assist you today?";
    if (lowerMessage.includes('qualification') || lowerMessage.includes('mca')) return "Master of Computer Applications (MCA)";
    if (lowerMessage.includes('passedout') || lowerMessage.includes('year of passing')) return "2021–2024 with a CGPA of 7.7";
    if (lowerMessage.includes('native location')) return "Erode, Tamil Nadu, India";
    if (lowerMessage.includes('current location')) return "Trichy, Tamil Nadu, India";
    if (lowerMessage.includes('preferred location')) {
      return `Preferred Locations:<br/>
      • Chennai<br/>
      • Bengaluru<br/>
      • Coimbatore<br/>
      • Cochin<br/>
      • Hyderabad<br/>
      • Madurai<br/>
      • Trichy`;
    }
    if (lowerMessage.includes('college') || lowerMessage.includes('university')) return "Kongu Engineering College, Erode, TN";
    if (lowerMessage.includes('skills') || lowerMessage.includes('technologies')) return "HTML, CSS, JavaScript, React.js, Node.js, Python, MySQL, MongoDB, OIC, etc.";
    if (lowerMessage.includes('projects') || lowerMessage.includes('work')) return "Worked on MERN stack apps & OIC integrations. View more in Projects section.";
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) return "Download here: [Thirumoorthi_Resume.pdf](https://your-portfolio-url/assets/Resume/Thirumoorthi_resume.pdf)";
    if (lowerMessage.includes('experience') || lowerMessage.includes('year')) return "1.3 years of experience in software development.";
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) return "Email: thirumoorthim2200@gmail.com";
    if (lowerMessage.includes('mobile') || lowerMessage.includes('phone')) return "Phone: +91 81110 34557";
    if (lowerMessage.includes('previous organisation') || lowerMessage.includes('current organisation')) return "NearTekPod - Associate Software Engineer since Feb 5, 2024";
    if (lowerMessage.includes('github') || lowerMessage.includes('project link')) return "GitHub: [GitHub Profile](https://github.com/Thiruop)";
    if (lowerMessage.includes('linkedin') || lowerMessage.includes('social media')) return "LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/thirumoorthi-murugesan-0b1a1b1b6/)";

    return "Thanks for reaching out! Ask about name, skills, resume, or experience.";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prev) => [...prev, { text: inputMessage, isBot: false }]);

      const botResponse = getBotResponse(inputMessage);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      }, 800);

      setInputMessage('');
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
  
    if (messages.length === 0) {
      setMessages([
        {
          text: "Hi 👋 I'm ThiruBot! You can ask me about skills, resume, experience, etc.",
          isBot: true,
        },
      ]);
    }
  };
  

  const handleToggleChatWindow = () => {
    if (!isOpen) handleOpenChat();
    else setIsOpen(false); // Do not clear messages
  };

  const handleClearChat = () => {
    setMessages([]);
    setInputMessage('');
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h6>Chat with Thiru</h6>
            <button
              className="close-btn"
              onClick={handleClearChat}
              title="Clear Chat"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.isBot ? 'bot' : 'user'}`}
                dangerouslySetInnerHTML={{
                  __html: msg.text.replace(
                    /\[(.*?)\]\((.*?)\)/g,
                    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
                  )
                }}
              />
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
            />
            <button className="send-btn" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}

      <button
        className="chat-toggle glass-card"
        onClick={handleToggleChatWindow}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faComment} />
      </button>
    </div>
  );
};

export default ChatBot;
