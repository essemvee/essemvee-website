'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are ESSEMVEE Assistant, the AI-powered chatbot for ESSEMVEE Technology Services Limited — a senior-led IT consulting firm headquartered in Dublin, Ireland.

ABOUT ESSEMVEE:
- Founded by Mohammed Viquarahmed — CEO, Founder, Senior DevOps Engineer, Lead Consultant
- Based in Dublin, Ireland with global delivery capability
- Specialises in: Cloud Engineering, DevOps & Automation, AI & MLOps, DevSecOps, Monitoring & Logging, Business & Data Analysis
- Target clients: SaaS companies, FinTech firms, enterprise teams, scale-ups
- Key differentiators: senior-only delivery, boutique focus, transparent pricing, GDPR-aligned

SERVICES:
1. Cloud Engineering — AWS, Azure, GCP, multi-cloud architecture, migrations, cost optimisation, Terraform, Kubernetes
2. DevOps & Automation — CI/CD pipelines, GitOps, ArgoCD, GitHub Actions, GitLab CI, SRE practices, infrastructure as code
3. AI & MLOps — production AI pipelines, model governance, MLflow, Kubeflow, PyTorch, TensorFlow, automated retraining
4. DevSecOps — shift-left security, SAST/DAST, Snyk, policy-as-code, zero-trust architecture, compliance automation
5. Monitoring & Logging — Prometheus, Grafana, ELK stack, OpenTelemetry, Datadog, SLO tracking, AI anomaly detection
6. Business & Data Analysis — KPI frameworks, Power BI, Tableau, stakeholder alignment, executive dashboards

RESULTS DELIVERED:
- 40% infrastructure cost reduction
- 60% reduction in deployment failures
- 3x faster release cycles
- 10+ years senior delivery experience

BOOKING:
- Free 30-minute consultation available
- Direct booking: https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/
- Email: info@essemvee.com

YOUR BEHAVIOUR:
- Be professional, knowledgeable, and helpful
- Keep responses concise — 2-4 sentences max unless a detailed explanation is needed
- Always offer to book a consultation when someone shows interest
- If asked about pricing, explain that pricing depends on scope and offer a free consultation to discuss
- Never make up specific prices or commitments
- If you don't know something specific, offer to connect them with Mohammed directly
- Be warm and personable — not robotic
- Use British/Irish English spelling (e.g. "optimisation" not "optimization")`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm the ESSEMVEE Assistant. I can answer questions about our Cloud, DevOps, AI, and security services. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          system: SYSTEM_PROMPT,
        }),
      });

      const data = await response.json();
      setIsTyping(false);

      if (data.content) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.content },
        ]);
      }
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please email us at info@essemvee.com or book a call directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    'What services do you offer?',
    'How much does it cost?',
    'Book a consultation',
    'Tell me about DevOps',
  ];

  return (
    <>
      {/* ── CHAT WINDOW ─────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
          style={{ height: '520px', background: '#080f1e' }}>

          {/* HEADER */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-800"
            style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)' }}>
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-blue-500 flex-shrink-0">
              <Image src="/branding/logo/smv-color.png" alt="ESSEMVEE" fill className="object-contain p-1" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">ESSEMVEE Assistant</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 text-xs">Online · Powered by Claude AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition p-1 rounded-lg hover:bg-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e3a5f transparent' }}>

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-blue-700 flex-shrink-0 mt-1">
                    <Image src="/branding/logo/smv-color.png" alt="Bot" width={28} height={28} className="object-contain p-0.5" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-800 text-gray-200 rounded-bl-sm border border-gray-700'
                  }`}
                >
                  {msg.content}
                  {/* Show booking link if message contains booking URL */}
                  {msg.role === 'assistant' && msg.content.toLowerCase().includes('book') && (
                    <a
                      href="https://outlook.office365.com/owa/calendar/ESSEMVEEExecutiveConsultation@NETORGFT20382626.onmicrosoft.com/bookings/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-xs text-blue-400 hover:text-blue-300 underline"
                    >
                      → Book a free consultation
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-blue-700 flex-shrink-0 mt-1">
                  <Image src="/branding/logo/smv-color.png" alt="Bot" width={28} height={28} className="object-contain p-0.5" />
                </div>
                <div className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* QUICK QUESTIONS — show only at start */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => { setInput(q); setTimeout(() => sendMessage(), 50); }}
                  className="text-xs px-3 py-1.5 rounded-full border border-blue-700 text-blue-300 hover:bg-blue-900/40 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* INPUT */}
          <div className="px-4 py-3 border-t border-gray-800 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about our services..."
              disabled={isLoading}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl px-4 py-2.5 transition flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          {/* FOOTER */}
          <div className="px-4 py-2 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-600">Powered by Claude AI · ESSEMVEE Technology Services</p>
          </div>
        </div>
      )}

      {/* ── FLOATING BUTTON ─────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)' }}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse" />
        )}
      </button>
    </>
  );
}
