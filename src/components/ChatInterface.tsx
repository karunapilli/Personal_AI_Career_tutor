import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatInterfaceProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
}

export default function ChatInterface({ messages, onSendMessage }: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">AI Career Tutor</h2>
          <p className="text-sm text-gray-600">Your personalized AI mentor</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to Your AI Career Tutor!</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              I'm here to guide you through your personalized AI/ML learning journey. Ask me anything about your projects, progress, or career goals!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <button
                onClick={() => onSendMessage('Tell me about my first project')}
                className="p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
              >
                <span className="text-sm font-medium text-blue-900">Tell me about my first project</span>
              </button>
              <button
                onClick={() => onSendMessage('Show me my progress')}
                className="p-3 text-left bg-cyan-50 hover:bg-cyan-100 rounded-lg transition-colors border border-cyan-200"
              >
                <span className="text-sm font-medium text-cyan-900">Show me my progress</span>
              </button>
              <button
                onClick={() => onSendMessage('What should I do next?')}
                className="p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200"
              >
                <span className="text-sm font-medium text-green-900">What should I do next?</span>
              </button>
              <button
                onClick={() => onSendMessage('Show me learning resources')}
                className="p-3 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-200"
              >
                <span className="text-sm font-medium text-purple-900">Show me learning resources</span>
              </button>
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === 'user'
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white'
                  : 'bg-gray-50 text-gray-900 border border-gray-200'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-70 mt-2 block">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            {message.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about your AI/ML journey..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
