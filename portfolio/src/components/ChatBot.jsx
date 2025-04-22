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
  
    if (lowerMessage.includes('firstname') || lowerMessage.includes('surname'))
      return "First name: Thirumoorthi<br/>Surname: Murugesan";
  
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello'))
      return "Hello! 👋 How can I assist you today?";
  
    if (lowerMessage.includes('qualification') || lowerMessage.includes('mca'))
      return "Master of Computer Applications (MCA)";
  
    if (lowerMessage.includes('passedout') || lowerMessage.includes('year of passing'))
      return "Year of Passing: 2024<br/>CGPA: 7.7";
  
    if (lowerMessage.includes('native location'))
      return "Native Location: Erode, Tamil Nadu, India";
  
    if (lowerMessage.includes('current location'))
      return "Current Location: Trichy, Tamil Nadu, India";
  
    if (lowerMessage.includes('preferred location')) {
      return `Preferred Job Locations:<br/>
      • Chennai<br/>
      • Bengaluru<br/>
      • Coimbatore<br/>
      • Cochin<br/>
      • Hyderabad<br/>
      • Madurai<br/>
      • Trichy`;
    }
  
    if (lowerMessage.includes('college') || lowerMessage.includes('university'))
      return "Kongu Engineering College, Erode, Tamil Nadu";
  
    if (lowerMessage.includes('skills') || lowerMessage.includes('technologies'))
      return `I work with:<br/>
      • HTML, CSS, JavaScript<br/>
      • React.js, Node.js, Express.js<br/>
      • Python, MySQL, MongoDB<br/>
      • Oracle Integration Cloud (OIC)`;
  
    if (lowerMessage.includes('projects') || lowerMessage.includes('work'))
      return `Worked on:<br/>
      • MERN stack applications<br/>
      • OIC Integrations (Reservation, Profile, Validation APIs)<br/>
      View full list in the Projects section!`;
  
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv'))
      return `You can download my resume here:<br/>
      <a href="https://your-portfolio-url/assets/Resume/Thirumoorthi_resume.pdf" target="_blank">📄 Thirumoorthi_Resume.pdf</a>`;
  
    if (lowerMessage.includes('experience') || lowerMessage.includes('year'))
      return "I have 1.3 years of professional experience as a Full Stack + OIC Developer.";
  
    if (lowerMessage.includes('contact') || lowerMessage.includes('email'))
      return "📧 Email: thirumoorthim2200@gmail.com <br/> 📞 Mobile: +91 81110 34557";
  
    if (lowerMessage.includes('mobile') || lowerMessage.includes('phone'))
      return "📞 Mobile: +91 81110 34557";
  
    if (lowerMessage.includes('previous organisation') || lowerMessage.includes('current organisation'))
      return "I'm currently working at NearTekPod as an Associate Software Engineer (since Feb 5, 2024)";
  
    if (lowerMessage.includes('github') || lowerMessage.includes('project link'))
      return `GitHub Profile: <a href="https://github.com/Thiruop" target="_blank">Thiruop</a>`;
  
    if (lowerMessage.includes('linkedin') || lowerMessage.includes('social media'))
      return `LinkedIn: <a href="https://www.linkedin.com/in/thirumoorthi-murugesan-0b1a1b1b6/" target="_blank">Click to Connect</a>`;
  
    // Default fallback response with suggestions
    return `🤔 I’m not sure I understood that.<br/>
    Try asking about:<br/>
    • My skills<br/>
    • My resume<br/>
    • My current company<br/>
    • My projects<br/>
    • My experience<br/>
    • My contact details`;
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
